//@ts-check
import React, { useState, useCallback } from "react";
import AuthForm from "./AuthForm";
import { graphql, commitMutation } from "react-relay";
import environment from "../relay/environment";

const mutation = graphql`
  mutation LoginForm_Mutation($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

function LoginForm() {
  const [errors, setErrors] = useState([]);
  const onSubmit = useCallback(
    ({ email, password }) => {
      commitMutation(environment, {
        mutation,
        variables: {
          email,
          password,
        },
        onCompleted: (response, errors) => {
          if (errors) {
            setErrors(errors.map((e) => e.message));
          } else {
            setErrors([]);
          }
        },
      });
    },
    [errors]
  );
  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
}

export default LoginForm;
