"use client";

import { gitHubLink, linkedInLink, resumeLink } from "@/public/links";
import { channelNum, channelNumForward, channelNumBackward } from "./channel";
import { scrollToElement } from "./scroll";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="float-left flex add-margin">
        <button
          className="hover:text-blue-400 mr-1.5 ml-4 md:ml-0 xl:mr-2 chromatic"
          onClick={scrollToElement("about")}
        >
          About
        </button>
        <button
          className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
          onClick={scrollToElement("projects")}
        >
          Projects
        </button>
        <Link
          href={gitHubLink}
          target="_blank"
          className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          GitHub
        </Link>
        <Link
          href={linkedInLink}
          target="_blank"
          className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          LinkedIn
        </Link>
        <Link
          href={resumeLink}
          target="_blank"
          className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          Resume
        </Link>
      </div>
      <br className="my-1 md:hidden" />
      <div className="float-left md:float-right flex add-margin md:no-margin">
        <button
          className="hover:text-blue-400 pr-2 md:px-2 ml-4 md:ml-0 xl:mr-2 chromatic"
          onClick={channelNumBackward()}
        >
          &lt;
        </button>
        <p className="mx-1.5 xl:mx-2 chromatic" id="channelNum">
          Channel 0{channelNum}
        </p>
        <button
          className="hover:text-blue-400 pl-2 md:px-2 md:mr-6 xl:mx-2 chromatic"
          onClick={channelNumForward()}
        >
          &gt;
        </button>
      </div>
      <br className="my-1 md:hidden" />
      <div className="float-left md:float-right flex add-margin md:no-margin">
        <button className="hover:text-blue-400 mr-1.5 ml-4 md:ml-0 xl:mr-2 chromatic">
          Audio
        </button>
        <button className="hover:text-blue-400 mx-1.5 mr-6 xl:mx-2 chromatic">
          Foreground
        </button>
      </div>
    </header>
  );
}
