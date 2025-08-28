import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className='bg-red-500'>Hello world!</div>
      <Button asChild>
        <Link href={"/auth/sign-up"}>Tela de cadastro</Link>
      </Button>
    </main>
  );
}
