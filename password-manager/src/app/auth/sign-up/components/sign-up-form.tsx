"use client";

import {
  TSignUpInputSchema,
  TSignUpOutputSchema,
} from "@/@core/modules/auth/domain/sign-up.entity";
import { signUpSchema } from "@/@core/modules/auth/schema/sign-up.schema";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputPassword } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const SignUpForm = () => {
  const form = useForm<TSignUpInputSchema>({
    resolver: zodResolver(signUpSchema.in),
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
    },
  });

  const onHandleSubmit = (formData: TSignUpInputSchema) => {
    const parsed: TSignUpOutputSchema = signUpSchema.parse(formData);
    console.log({ parsed });
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onHandleSubmit)}
        className="flex flex-col space-y-4"
      >
        <CardContent className="flex flex-col space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Matheus" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="asd@asd.asd" {...field} />
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
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <InputPassword placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme a sua senha</FormLabel>
                <FormControl>
                  <InputPassword placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button type="submit">Cadastrar</Button>
          <Button type="button">
            <Link href={"/auth/sign-in"}>Já possuo uma conta</Link>
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;