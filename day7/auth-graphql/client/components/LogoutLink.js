//@ts-check
import React from "react";
import { graphql, QueryRenderer, commitMutation } from "react-relay";
import environment from "../relay/environment";
import { useHistory } from "react-router-dom";

const mutation = graphql`
  mutation LogoutLink_Mutation {
    logout {
      ...Header_user
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
      updater: (store) => {
        const user = store.getRoot().getLinkedRecord("user");
        store.delete(user.getDataID());
      },
    });
  };
  return <a onClick={onLogout}>Logout</a>;
}

export default LogoutLink;
