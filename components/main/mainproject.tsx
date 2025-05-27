import ProjectHeader from "./projectheader";
import {Main} from "@/data/mainprojects"

export default function MainProject(){
    return(
        <div className="pb-10">
            {Main.map(({ title, description, language,period }) => (
            <div key={title} className="mb-10 -translate-y-8">
                <ProjectHeader title={title} period={period}/>
                <div className="p-5 w-70 h-30 z-30 bg-[#112240] flex items-center justify-center">
                    <p className="text-[14px]">{description}</p>
                </div>
                <p className="text-xs pt-3">{language}</p>
            </div>
            ))}
        </div>
    )
}