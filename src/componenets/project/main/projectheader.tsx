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
      <p className="text-xs lg:text-base text-orange-500 pb-3">Project</p>
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
        <p className="text-lg lg:text-4xl py-1 cursor-pointer">{title}</p>
      </Link>
      <p className="text-xs md:text-base pl-1 text-orange-600">{period}</p>
    </div>
  );
}
