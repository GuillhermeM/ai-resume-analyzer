import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants";
import ResumeCard from "~/components/ResumeCard";


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
      

      {resumes?.length > 0 && (
  <div className="resumes-section justify-center">
    {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
  </div>
)}
</section>

    </main>
  );
}
