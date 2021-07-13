//@ts-check
import React, { useEffect } from "react";
import { graphql, createFragmentContainer } from "react-relay";
import { useHistory } from "react-router-dom";

export default (Component) => {
  function RequireAuth(props) {
    const history = useHistory();
    useEffect(() => {
      const { user } = props;
      if (!user) {
        history.push("/");
      }
    });

    return <Component {...props} />;
  }

  return createFragmentContainer(RequireAuth, {
    user: graphql`
      fragment RequireAuth_user on UserType {
        id
      }
    `,
  });
};
