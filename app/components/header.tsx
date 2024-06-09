"use client";

import { gitHubLink, linkedInLink, resumeLink } from "@/public/links";
import { channelNum, channelNumForward, channelNumBackward } from "./channel";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="float-left flex add-margin">
        <button className="hover:text-blue-400 mr-1.5 xl:mr-2 chromatic">
          About
        </button>
        <button className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic">
          Projects
        </button>
        <Link
          href={gitHubLink}
          target="_blank"
          className="underline hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          GitHub
        </Link>
        <Link
          href={linkedInLink}
          target="_blank"
          className="underline hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          LinkedIn
        </Link>
        <Link
          href={resumeLink}
          target="_blank"
          className="underline hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          Resume
        </Link>
      </div>
      <br className="md:hidden" />
      <div className="float-left md:float-right flex add-margin md:no-margin">
        <button
          className="hover:text-blue-400 mr-1.5 xl:mr-2 chromatic"
          onClick={channelNumBackward()}
        >
          &lt;
        </button>
        <p className="mx-1.5 xl:mx-2 chromatic" id="channelNum">
          Channel {channelNum}
        </p>
        <button
          className="hover:text-blue-400 mr-4 mx-1.5 xl:mx-2 chromatic"
          onClick={channelNumForward()}
        >
          &gt;
        </button>
      </div>
      <br className="md:hidden" />
      <div className="float-left md:float-right flex add-margin md:no-margin">
        <button className="hover:text-blue-400 mr-1.5 xl:mr-2 chromatic">
          Audio
        </button>
        <button className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic">
          Foreground
        </button>
        <button className="hover:text-blue-400 mx-1.5 xl:mx-2 mr-10 xl:mr-12 chromatic">
          Background
        </button>
      </div>
    </header>
  );
}
