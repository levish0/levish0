import React from "react";
import { Navigation } from "../components/nav";
import ProjectCard from "./project_card";

export const revalidate = 60;
export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            남는 시간에 끄적거려 본 프로젝트들.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <ProjectCard
            project_link="https://jeyviz.vercel.app/"
            project_name="Jeyviz"
            project_description="Jeyviz는 Discord내의 복잡한 사회구축을 목적으로 한 봇입니다."
            project_date="2023"
          />
          <ProjectCard
            project_link="https://github.com/shiueo/FFT-Canvas"
            project_name="FFT-Canvas"
            project_description="간결한 FFT 실험장입니다."
            project_date="2023"
          />
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
