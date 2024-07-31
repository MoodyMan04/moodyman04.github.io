"use client";

import { gitHubLink, linkedInLink, resumeLink } from "@/public/links";
import Channel from "./channel";
import Link from "next/link";

/* 
Component for the Header navbar for the website. 
Includes:
- About
- Projects
- GitHub
- LinkedIn
- Resume
And buttons from the Channel component.
*/
export default function Header() {
  return (
    <header>
      <div className="float-left flex add-margin blur">
        <Link
          href="./#about"
          className="hover:text-blue-400 ml-4 mx-1.5 md:ml-0 xl:mx-2 chromatic"
        >
          <h2>About</h2>
        </Link>
        <Link
          href="./#projects"
          className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          <h2>Projects</h2>
        </Link>
        <Link
          href={gitHubLink}
          target="_blank"
          className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          <h2>GitHub</h2>
        </Link>
        <Link
          href={linkedInLink}
          target="_blank"
          className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          <h2>LinkedIn</h2>
        </Link>
        <Link
          href={resumeLink}
          target="_blank"
          className="hover:text-blue-400 mx-1.5 xl:mx-2 chromatic"
        >
          <h2>Resume</h2>
        </Link>
      </div>
      <Channel />
    </header>
  );
}
