import { ComponentProps, } from 'react';


type Props = {
	title: string;
	count: string;
	className?: string;
} & ComponentProps<'section'>;

export default function SectionContainer({
	children,
	title,
	count,
	className,
	...attr
}:Props) {
	return (
		<section
			className={`${className ? className : ''}  sm:py-20 py-15 `}
			{...attr}
		>
			<div className="flex flex-row gap-1 sm:pb-18 lg:text-4xl text-lg pb-10">
  				<p className="colorful sm:text-lg text-base">{count}</p>
  				<p className="sm:text-lg text-base">{title}</p>
  				<div className="lg:w-lg lg:border-t-2 lg:mt-5 border-t-1 border-gray-600 sm:mt-3 w-40 sm:w-xs sm:ml-5 mt-3 ml-3"></div>
			</div>
			{children}
		</section>
	);
}