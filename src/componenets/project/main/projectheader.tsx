import Link from "next/link";
import { ProjectLink } from "@/data/mainproject";

interface Props {
  award?: string;
  title: string;
  period: string;
  className?: string;
  projectLink: ProjectLink[];
}

export default function ProjectHeader({
  award,
  title,
  period,
  className,
  projectLink,
}: Props) {
  return (
    <div className={className}>
      <p className="text-xs lg:text-base text-teal-300 pb-3">Project</p>
      <p className="py-2 text-green-400">{award}</p>

      <Link
        href={
          typeof projectLink[0] === "string"
            ? projectLink[0]
            : projectLink[0].url
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-lg lg:text-4xl py-1 ani cursor-pointer">{title}</p>
      </Link>
      <p className="text-xs lg:text-lg pb-2">{period}</p>
    </div>
  );
}
