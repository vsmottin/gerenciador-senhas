import {Button} from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignUpPage = () => {
    return (
        <section className="flex h-screen w-screen items-center justify-center px-5">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Crie sua conta</CardTitle>
                    <CardDescription>Insira suas informações abaixo para se cadastrar.</CardDescription>
                </CardHeader>

                <Input></Input>

                <Button asChild>
                    <Link href={"/"}>Voltar a tela inicial</Link>
                </Button>
            </Card>
        </section>
    );
};

export default SignUpPage;