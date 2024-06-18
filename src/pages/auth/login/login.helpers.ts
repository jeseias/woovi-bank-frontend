import { IUser } from "@/@types/app.types";
import { AppRoutePaths } from "@/constants";
import { useAuth } from "@/contexts/auth-context";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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
  const navigateTo = useNavigate();
  const { authenticateUser } = useAuth();
  const [login, { data, loading, error }] = useMutation<Response>(
    LOGIN_USER_MUTATION,
    {
      onCompleted() {
        authenticateUser(data?.data.user, data?.data.token);
        navigateTo(AppRoutePaths.Dashboard.Index);
      },
    }
  );

  return {
    login,
    data,
    isLoading: loading,
    error,
  };
};
