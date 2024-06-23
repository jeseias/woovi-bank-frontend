import { IUser } from "@/@types/app.types";
import { useAuth } from "@/contexts/auth-content/use-auth";
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
  login: {
    user: IUser;
    token: string;
  };
}

export const useApiLogin = () => {
  const { authenticateUser } = useAuth();
  const [login] = useMutation<Response>(LOGIN_USER_MUTATION, {
    onCompleted(data) {
      authenticateUser(data.login.user, data.login.token);
    },
  });

  return {
    login,
  };
};
