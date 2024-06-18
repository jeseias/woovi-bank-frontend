import { IUser } from "@/@types/app.types";
import { useAuth } from "@/contexts/auth-context";
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
  const { authenticateUser } = useAuth();
  const [signUp, { data, loading, error }] = useMutation<Response>(
    REGISTER_USER_MUTATION,
    {
      onCompleted() {
        authenticateUser(data?.data.user, data?.data.token);
      },
    }
  );

  return {
    signUp,
    data,
    isLoading: loading,
    error,
  };
};
