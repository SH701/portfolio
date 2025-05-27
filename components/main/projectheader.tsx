interface Props{
    title:string;
    period:string;
}

export default function ProjectHeader({title,period}:Props){
    return(
        <div>
            <p className="text-xs colorful">Main Project</p>
            <p className="text-lg">{title}</p>
            <p className="text-xs">{period}</p>
        </div>
    )
}