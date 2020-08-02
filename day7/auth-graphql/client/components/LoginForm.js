//@ts-check
import React, { useState, useCallback } from "react";
import AuthForm from "./AuthForm";
import { graphql, commitMutation } from "react-relay";
import environment from "../relay/environment";
import { useHistory } from "react-router-dom";

const mutation = graphql`
  mutation LoginForm_Mutation($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

function LoginForm() {
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const onSubmit = ({ email, password }) => {
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
        //@ts-ignore
        if (response.login && !errors) {
          history.push("/dashboard");
        }
      },
      updater: (store, data) => {
        //@ts-ignore
        const { login } = data;
        if (login) {
          const user = store
            .getRoot()
            .getOrCreateLinkedRecord("user", "UserType");
          user.setValue(login.id, "id");
        }
      },
    });
  };
  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
}

export default LoginForm;
