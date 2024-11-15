
import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, gitUrl = "#", previewUrl = "#" }) => {
  return (
    <div>
     <div id="project"
      className="h-52 md:h-72 rounded-t-xl relative group"
         style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* CodeBracket Icon */}
          <Link href={gitUrl} className="h-14 w-14 mr-2 flex items-center justify-center border-2 border-[#ADB7BE] rounded-full group-hover:border-white transition-colors duration-300">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" />
          </Link>
          {/* Eye Icon */}
          <Link href={previewUrl} className="h-14 w-14 flex items-center justify-center border-2 border-[#ADB7BE] rounded-full group-hover:border-white transition-colors duration-300">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" />
          </Link>
          </div>
        </div>
        </div>
     
      

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
       
      </div>
      
    </div>
  );
};

export default ProjectCard;

