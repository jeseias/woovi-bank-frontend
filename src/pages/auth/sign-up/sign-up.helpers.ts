import { IUser } from "@/@types/app.types";
import { gql, useMutation } from "@apollo/client";

interface Response {
  data: {
    user: IUser;
    token: string;
  };
}

const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        id
        tax_id
        name
      }
      token
    }
  }
`;

export const useApiSignUp = () => {
  const [signUp, { data, loading, error }] = useMutation<Response>(
    REGISTER_USER_MUTATION
  );

  return {
    signUp,
    data,
    isLoading: loading,
    error,
  };
};
