import {Button} from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, InputPassword } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import SignUpForm from "./components/sign-up-form";

const SignUpPage = () => {
    return (
        <section className="flex h-screen w-screen items-center justify-center px-5">
            <Card className="w-full max-w-md p-5">
                <CardHeader>
                    <CardTitle>Crie sua conta</CardTitle>
                    <CardDescription>Insira suas informações abaixo para se cadastrar.</CardDescription>
                </CardHeader>

                <SignUpForm/>

                <Button asChild>
                    <Link href={"/"}>Voltar a tela inicial</Link>
                </Button>
            </Card>
        </section>
    );
};

export default SignUpPage;