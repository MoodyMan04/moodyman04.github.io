"use client";

import { gitHubLink, linkedInLink, resumeLink } from "@/public/links";
import { channelNum, channelNumForward, channelNumBackward } from "./channel";

export default function Header() {
  return (
    <header className="m-4">
      <div className="float-left flex">
        <button
          className="hover:text-blue-500 mr-1.5 chromatic"
          data-text="About"
        >
          About
        </button>
        <button
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="Projects"
        >
          Projects
        </button>
        <a
          href={gitHubLink}
          target="_blank"
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="GitHub"
        >
          GitHub
        </a>
        <a
          href={linkedInLink}
          target="_blank"
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href={resumeLink}
          target="_blank"
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="Resume"
        >
          Resume
        </a>
      </div>
      <br className="md:hidden" />
      <div className="float-left md:float-right flex">
        <button
          className="hover:text-blue-500 mr-1.5 chromatic"
          data-text="&lt;"
          onClick={channelNumBackward()}
        >
          &lt;
        </button>
        <p className="mx-1.5 chromatic" data-text="Channel 0" id="channelNum">
          Channel {channelNum}
        </p>
        <button
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="&gt;"
          onClick={channelNumForward()}
        >
          &gt;
        </button>
      </div>
      <br className="md:hidden" />
      <div className="float-left md:float-right flex">
        <button
          className="hover:text-blue-500 mr-1.5 chromatic"
          data-text="Audio"
        >
          Audio
        </button>
        <button
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="Foreground"
        >
          Foreground
        </button>
        <button
          className="hover:text-blue-500 mx-1.5 mr-10 chromatic"
          data-text="Background"
        >
          Background
        </button>
      </div>
    </header>
  );
}
