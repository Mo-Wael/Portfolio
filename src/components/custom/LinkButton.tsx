import { GitFork, Github } from "lucide-react";
import {  } from "react-icons/gi";

interface IProps {
    buttonType: 'github' | 'demo';
    link: string;
}

const LinkButton = ({buttonType, link} : IProps) => {

    if (buttonType === "github"){
        return (
            <div className="flex gap-2 text-gray-600 w-fit bg-slate-100 px-3 py-1 rounded-lg hover:bg-gray-300">
                <a href={link} className="flex gap-2">
                    <Github />
                    GitHub
                </a>
            </div>
       )
    } else {
        return (
            <div className="flex gap-2 text-gray-600 w-fit bg-slate-100 px-3 py-1 rounded-lg hover:bg-gray-300">
                <a href={link} className="flex gap-2">
                    <GitFork />
                    Live
                </a>
            </div>
       )
    }
}

export default LinkButton