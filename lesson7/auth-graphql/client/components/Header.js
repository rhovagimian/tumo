//@ts-check
import React from "react";
import { graphql, createFragmentContainer, commitMutation } from "react-relay";
import { Link } from "react-router-dom";
import environment from "../relay/environment";
import { useHistory } from "react-router-dom";

const mutation = graphql`
  mutation Header_Mutation {
    logout {
      ...Header_user
    }
  }
`;

function Header(props) {
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
  let links = null;
  if (props.user) {
    links = (
      <li>
        <a onClick={onLogout}>Logout</a>
      </li>
    );
  } else {
    links = (
      <>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </>
    );
  }
  return (
    <div className="row">
      <nav className="col">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            TUMO
          </Link>
          <ul className="right">{links}</ul>
        </div>
      </nav>
    </div>
  );
}

export default createFragmentContainer(Header, {
  user: graphql`
    fragment Header_user on UserType {
      id
    }
  `,
});
