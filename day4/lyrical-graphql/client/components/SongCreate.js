//@ts-check
import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
    commitMutation(environment, {
      mutation,
      variables: {
        title,
      },
      onCompleted: (response, errors) => {
        history.push("/");
      },
    });
  };
  return (
    <div>
      <Link to="/">Back</Link>
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
