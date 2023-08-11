import Link from "next/link";
import { Card } from "../components/card";

export default function ProjectCard({
  project_name,
  project_description,
  project_date,
  project_link,
}: {
  project_name: string;
  project_description: string;
  project_date: string;
  project_link: string;
}) {
  return (
    <Card>
      <Link href={project_link}>
        <article className="p-4 md:p-8">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
              {project_date}
            </span>
          </div>
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
            {project_name}
          </h2>
          <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
            {project_description}
          </p>
        </article>
      </Link>
    </Card>
  );
}
