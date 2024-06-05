export default function Header() {
  return (
    <header className="m-4">
      <div className="float-left flex">
        <a
          href="#About"
          className="text-white hover:text-blue-500 mr-1.5 chromatic"
          data-text="About"
        >
          About
        </a>
        <a
          href="#Projects"
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="Projects"
        >
          Projects
        </a>
        <a
          href="#GitHub"
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="GitHub"
        >
          GitHub
        </a>
        <a
          href="#LinkedIn"
          className="hover:text-blue-500 mx-1.5 chromatic"
          data-text="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="#Resume"
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
