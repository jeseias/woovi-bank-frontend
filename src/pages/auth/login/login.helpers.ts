import { IUser } from "@/@types/app.types";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($input: LoginUserInput!) {
    login(input: $input) {
      user {
        id
        tax_id
        name
      }
      token
    }
  }
`;

interface Response {
  data: {
    user: IUser;
    token: string;
  };
}

export const useApiLogin = () => {
  const [login, { data, loading, error }] =
    useMutation<Response>(LOGIN_USER_MUTATION);

  return {
    login,
    data,
    isLoading: loading,
    error,
  };
};
