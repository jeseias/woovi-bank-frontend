import { IUser } from "@/@types/app.types";
import { useAuth } from "@/contexts/auth-content/use-auth";
import { gql, useMutation } from "@apollo/client";

interface Response {
  registerUser: {
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
  const { authenticateUser } = useAuth();
  const [signUp, {loading}] = useMutation<Response>(REGISTER_USER_MUTATION, {
    onCompleted(data) {
      authenticateUser(data.registerUser.user, data.registerUser.token);
    },
  });

  return {
    signUp,
    isLoading: loading,
  };
};
