//@ts-check
import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import environment from "../relay/environment";

const mutation = graphql`
  mutation LyricCreate_Mutation($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      ...LyricList_song
    }
  }
`;

function LyricCreate(props) {
  const [content, setContent] = useState("");
  const { songId } = props;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        commitMutation(environment, {
          mutation,
          variables: {
            content,
            songId,
          },
          onCompleted: (response, errors) => {
            setContent("");
          },
        });
      }}
    >
      <label>Add a Lyric</label>
      <input
        onChange={(event) => {
          setContent(event.target.value);
        }}
        value={content}
      />
    </form>
  );
}

export default LyricCreate;
