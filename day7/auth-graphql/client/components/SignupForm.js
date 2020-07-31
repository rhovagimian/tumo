//@ts-check
import React, { useState, useCallback } from "react";
import AuthForm from "./AuthForm";
import { graphql, commitMutation } from "react-relay";
import environment from "../relay/environment";

const mutation = graphql`
  mutation SignupForm_Mutation($email: String, $password: String) {
    signup(email: $email, password: $password) {
      ...Header_user
    }
  }
`;

function SignupForm() {
  const [errors, setErrors] = useState([]);
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
      },
      updater: (store, data) => {
        //@ts-ignore
        const { signup } = data;
        if (signup) {
          const user = store
            .getRoot()
            .getOrCreateLinkedRecord("user", "UserType");
          user.setValue(signup.id, "id");
        }
      },
    });
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
}

export default SignupForm;
