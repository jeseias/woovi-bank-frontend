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
import { Link } from "react-router-dom";
import { AppRoutePaths } from "@/constants";
import { validateCPF } from "@/lib/validate-cpf";
import { useApiLogin } from "./login.helpers";

const formSchema = z.object({
  tax_id: z.string().refine((value) => validateCPF(value), {
    message: "CPF is not valid",
  }),
  password: z.string().min(6).max(50),
});

type FormData = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const { login } = useApiLogin();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormData) => {
    login({
      variables: { input: values },
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
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-end">
          <Button type="submit">Submit</Button>
          <Link
            to={AppRoutePaths.Auth.SignUp}
            className="ml-auto hover:underline"
          >
            <p className="">Create an account here</p>
          </Link>
        </div>
      </form>
    </Form>
  );
};
