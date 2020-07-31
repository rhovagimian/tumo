//@ts-check
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../relay/environment";
import { Link } from "react-router-dom";
import LogoutLink from "./LogoutLink";

const query = graphql`
  query Header_Query {
    user {
      id
    }
  }
`;

function renderQuery({ error, props }) {
  if (!error && !props) {
    return null;
  }
  if (props.user) {
    return (
      <li>
        <LogoutLink />
      </li>
    );
  } else {
    return (
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
}

function Header() {
  return (
    <div className="row">
      <nav className="col">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            TUMO
          </Link>
          <ul className="right">
            <QueryRenderer
              environment={environment}
              query={query}
              variables={{}}
              render={renderQuery}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
