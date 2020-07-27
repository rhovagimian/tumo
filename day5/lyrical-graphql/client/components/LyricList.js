// @ts-check
import React from "react";
import { graphql, createFragmentContainer, commitMutation } from "react-relay";
import environment from "../relay/environment";

const mutation = graphql`
  mutation LyricList_Mutation($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

const onLike = (id, likes) => {
  commitMutation(environment, {
    mutation,
    variables: {
      id,
    },
    optimisticResponse: {
      likeLyric: {
        id,
        likes: likes + 1,
      },
    },
  });
};

function LyricList(props) {
  const lyricItems = props.song.lyrics.map(({ id, content, likes }) => {
    return (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          {likes}
          <i
            className="material-icons"
            onClick={() => {
              onLike(id, likes);
            }}
          >
            thumb_up
          </i>
        </div>
      </li>
    );
  });
  return <ul className="collection">{lyricItems}</ul>;
}

export default createFragmentContainer(LyricList, {
  song: graphql`
    fragment LyricList_song on SongType {
      lyrics {
        id
        content
        likes
      }
    }
  `,
});
