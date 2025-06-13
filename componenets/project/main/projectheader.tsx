import Link from "next/link";

interface Props {
  title: string;
  period: string;
  className?: string;
  projectLink: string;
}

export default function ProjectHeader({
  title,
  period,
  className,
  projectLink,
}: Props) {
  return (
    <div className={className}>
      <p className="text-xs lg:text-base colorful pb-3">Main Project</p>
      <Link href={projectLink}>
        <p className="text-lg lg:text-4xl py-1 ani">{title}</p>
      </Link>
      <p className="text-xs lg:text-lg pb-2">{period}</p>
    </div>
  );
}
