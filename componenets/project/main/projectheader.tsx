import Link from "next/link";

interface Props {
  award?: string;
  title: string;
  period: string;
  className?: string;
  projectLink: string;
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
      <p className="text-xs lg:text-base colorful pb-3">Main Project</p>
      <p className="py-2 text-green-400">{award}</p>
      <Link href={projectLink}>
        <p className="text-lg lg:text-4xl py-1 ani">{title}</p>
      </Link>
      <p className="text-xs lg:text-lg pb-2">{period}</p>
    </div>
  );
}
