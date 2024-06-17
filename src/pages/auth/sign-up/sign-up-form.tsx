import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputMask from "react-input-mask";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation, useRoutes } from "react-router-dom";
import { AppRoutePaths } from "@/constants";
import { gql, useMutation } from "@apollo/client";

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

const formSchema = z.object({
  name: z.string(),
  tax_id: z.string(),
  password: z.string().min(6).max(50),
});

export const SignUpForm = () => {
  const [signUp, { data, loading, error }] = useMutation(
    REGISTER_USER_MUTATION
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    signUp({
      variables: { input: values },
      onCompleted() {},
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-[440px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tax_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tax Id</FormLabel>
              <FormControl>
                <InputMask
                  mask="999.999.999-99"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                >
                  {(inputProps: any) => (
                    <Input placeholder="cpf or cnpj" {...inputProps} />
                  )}
                </InputMask>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tax Id</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-end">
          <Button type="submit">Submit</Button>
          <Link
            to={AppRoutePaths.Auth.Login}
            className="ml-auto hover:underline"
          >
            <p className="">Login here</p>
          </Link>
        </div>
      </form>
    </Form>
  );
};
