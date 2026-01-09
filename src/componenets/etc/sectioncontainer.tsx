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
      className={`${className ? className : ""}  md:pt-10 md:px-10 pt-10 pb-5 `}
      {...attr}
    >
      <div className="flex flex-row gap-1 md:pb-18  pb-4 justify-center items-center">
        <p className="md:text-4xl text-3xl text-orange-500 font-medium">
          {title}
        </p>
      </div>
      {children}
    </section>
  );
}
