import { subProjects } from "@/data/subprojects";
import ProjectHeader from "./subprojectheader";
import ScrollAnimation from "@/components/scrollAnimation";


export default function SubProject(){
    return(
        <div>
            <ScrollAnimation>
            <p className="text-center mb-7 lg:text-4xl text-2xl">Sub Projects</p>
            </ScrollAnimation>
            <div className="grid w-full grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4">
                {subProjects.map(({ title, description, language, githubLink, projectLink }) => (
                <ScrollAnimation key ={title} delay={1}>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#112240] p-5 hover:-translate-y-1 hover:shadow-lg transition duration-200">
                    <ProjectHeader title={title} githubLink={githubLink} />
                    <p className="lg:text-[16px] text-[13px] pt-2 opacity-80 ">{description}</p>
                    <p className="lg:text-xs text-[10px] pt-3 opacity-80">{language}</p>
                    </div>
                </a>
                </ScrollAnimation>
                ))}
            </div>
        </div>
    )
}