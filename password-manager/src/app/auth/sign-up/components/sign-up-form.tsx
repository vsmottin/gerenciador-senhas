'use client'

import { TSignUpInputSchema } from "@/@core/modules/auth/domain/sign-up.entity"
import { signUpSchema } from "@/@core/modules/auth/schema/sign-up.schema"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input, InputPassword } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-label"
import { Link } from "lucide-react"
import { FormProvider, useForm } from "react-hook-form"

const SignUpForm = () => {
    const form = useForm<TSignUpInputSchema>({
        resolver: zodResolver(signUpSchema.in),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    });

    const onHandleSubmit = (formData: any) => {
        console.log(formData);
    };

    return(
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onHandleSubmit)}>
                <CardContent className="">
                    <FormField control={form.control} name='name' render={({field}) => (
                        <FormItem>
                            <FormLabel>NOme</FormLabel>
                            <FormControl>
                                <Input placeholder="Joãozinho" {...field}></Input>
                            </FormControl>
                        </FormItem>
                    )}>
                    </FormField>
                    </CardContent>
                    <CardFooter>
                        <Button>Cadastrar</Button>
                        <Button type="button"><Link href={"/auth/sign-in"}>Possuo uma conta</Link></Button>
                    </CardFooter>
                </form>
    </FormProvider>
    )};

export default SignUpForm;