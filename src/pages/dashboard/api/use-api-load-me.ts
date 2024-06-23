import { IUser } from "@/@types/app.types";
import { gql, useQuery } from "@apollo/client";

interface Response {
  user: {
    user: IUser;
  };
}

const LOAD_ME_QUERY = gql`
  query LoadMe(id: String!) {
    user {
      id 
      tax_id
      name
    }
  }
`;

export const useApiLoadMe = (tax_id: string) => {
  const { data, loading } = useQuery<Response>(LOAD_ME_QUERY, {
    variables: { id: tax_id },
  });

  return {
    data: data?.user,
    isLoading: loading,
  };
};
