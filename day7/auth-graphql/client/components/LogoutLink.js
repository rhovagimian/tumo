//@ts-check
import React from "react";
import { graphql, QueryRenderer, commitMutation } from "react-relay";
import environment from "../relay/environment";
import { useHistory } from "react-router-dom";

const mutation = graphql`
  mutation LogoutLink_Mutation {
    logout {
      id
    }
  }
`;

function LogoutLink() {
  const history = useHistory();
  const onLogout = () => {
    commitMutation(environment, {
      mutation,
      variables: {},
      onCompleted: (response, errors) => {
        history.push("/");
      },
      updater: (store, data) => {
        //@ts-ignore
        const id = data.logout;
        if (id) {
          store.delete(id);
        }
      },
    });
  };
  return <a onClick={onLogout}>Logout</a>;
}

export default LogoutLink;
