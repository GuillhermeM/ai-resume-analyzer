import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />


      <section className="main-section">
        <div className="page-heading" />
        <h1 className="text-center">Track Your Applications & Resume Rating</h1>
        <h2 className="text-center">Review your submissions and check AI-powered feedback</h2>
      </section>


      {[]}





    </main>
  );
}
