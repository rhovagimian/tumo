// @ts-check
import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

function LyricList(props) {
  const lyricItems = props.song.lyrics.map(({ id, content }) => {
    return (
      <li key={id} className="collection-item">
        {content}
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
      }
    }
  `,
});
