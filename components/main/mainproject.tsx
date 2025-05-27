import ProjectHeader from "./projectheader";
import {Main} from "@/data/mainprojects"

export default function MainProject(){
    return(
        <div className="pb-10">
            {Main.map(({ title, description, language, period }, index) => {
                const isEven = index % 2 === 0;
                return (
                <div
                    key={title}
                    className={`mb-10 -translate-y-8 flex ${isEven ? "justify-start" : "justify-end lg:mr-20 mr-2"} `}>
                    <div className={`max-w-[500px] ${isEven ? "" : "text-right"}`}>
                        <ProjectHeader title={title} period={period} />
                        <div className={`p-3 bg-[#112240] flex items-center justify-center w-80 h-40 z-30 lg:w-[90%] lg:h-[80%]   ${isEven ? "ml-0 mr-auto" : "ml-auto mr-0"}`}>
                            <p className="text-[14px] lg:text-xl">{description}</p>
                        </div>
                            <p className="text-xs pt-3 lg:text-lg">{language}</p>
                    </div>
                </div>
                );
            })}
            </div>
    )
}