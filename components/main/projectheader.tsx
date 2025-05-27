interface Props{
    title:string;
    period:string;
}

export default function ProjectHeader({title,period}:Props){
    return(
        <div>
            <p className="text-xs lg:text-base colorful pb-3">Main Project</p>
            <p className="text-lg lg:text-4xl py-1">{title}</p>
            <p className="text-xs lg:text-lg pb-2">{period}</p>
        </div>
    )
}