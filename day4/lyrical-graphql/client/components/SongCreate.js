//@ts-check
import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import environment from "../relay/environment";

const mutation = graphql`
  mutation SongCreate_Mutation($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

function SongCreate() {
  const [title, onTitleChange] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    commitMutation(environment, {
      mutation,
      variables: {
        title,
      },
    });
  };
  return (
    <div>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Create:</label>
        <input
          onChange={(event) => {
            onTitleChange(event.target.value);
          }}
          value={title}
        />
      </form>
    </div>
  );
}

export default SongCreate;
