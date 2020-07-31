//@ts-check
import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import { Link } from "react-router-dom";
import LogoutLink from "./LogoutLink";

function Header(props) {
  const links = props.user ? (
    <li>
      <LogoutLink />
    </li>
  ) : (
    <>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
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
