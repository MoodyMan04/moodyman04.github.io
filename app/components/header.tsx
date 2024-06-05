import { gitHubLink, linkedInLink, resumeLink } from "@/public/links";

export default function Header() {
  return (
    <header className="m-4">
      <div className="float-left flex">
        <button
          className="hover:text-blue-500 mx-1.5 chromatic"
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
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="Background"
        >
          Background
        </button>
        <button
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="&lt;"
        >
          &lt;
        </button>
        <p className="mx-1.5 chromatic" data-text="Channel 0">
          Channel 0
        </p>
        <button
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="&gt;"
        >
          &gt;
        </button>
      </div>
    </header>
  );
}
