import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Bem vindo a aplicação!</h1>
      <Link href="/register">Registre-se</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
