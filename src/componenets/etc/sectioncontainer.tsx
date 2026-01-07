import { ComponentProps } from "react";

type Props = {
  title: string;
  className?: string;
} & ComponentProps<"section">;

export default function SectionContainer({
  children,
  title,
  className,
  ...attr
}: Props) {
  return (
    <section
      className={`${className ? className : ""}  sm:py-20 sm:px-10 pt-10 pb-5 `}
      {...attr}
    >
      <div className="flex flex-row gap-1 sm:pb-18  pb-10 justify-center items-center">
        <p className="md:text-4xl text-3xl text-orange-500">{title}</p>
      </div>
      {children}
    </section>
  );
}
