import Link from "next/link";
import { byteleLink } from "@/public/links";
import Projects from "./components/projects";
import Contact from "./components/contact";

/*
Main page of the website.
Used Components:
- Projects
- Contact
*/
export default function Home() {
  return (
    <div className="add-margin blur">
      <br className="mt-12 md:hidden" />
      <div className="grid grid-cols-2">
        <h2 className="ml-4 chromatic">Hello World!</h2>
      </div>
      <div id="about" className="grid grid-cols-1 md:grid-cols-6 mt-4 gap-4">
        <div className="p-4 bg-blue-500 bg-opacity-40 rounded-md md:col-span-4">
          <h1 className="chromatic">Who Am I?</h1>
          <h2 className="chromatic">
            Gunnar Moody | Full-Stack Software Developer
          </h2>
          <h3 className="chromatic">
            <br className="small-br" />
            Skills:
            <br className="small-br" />
            Java | Python | C# | SQL | HTML | CSS | JavaScript and TypeScript |
            VB.NET
            <br className="small-br" />
            Git | GitHub | MySQL | PostgreSQL | React | Next.js | Django |
            ASP.NET
          </h3>
          <p className="chromatic">
            <br className="small-br" />
            Hello! My name is Gunnar Moody! I am a dedicated software engineer
            and graduate of NDSU&#39;s class of 2025 with a bachelor&#39;s
            degree in Computer Science with an interest in Cybersecurity and
            Artifical Intelligence.
            <br className="small-br" />
            While at NDSU, I have gained experience through many different
            projects, including school team projects and working as a game
            developer on our ACM&#39;s{" "}
            <Link
              href={byteleLink}
              target="_blank"
              className="underline hover:text-blue-400"
            >
              Byte-le Royale
            </Link>{" "}
            programming competition for our 2024-25 games! I have served on NDSU
            ACM's board as Secretary and Vice Chair.
            <br className="small-br" />I love to learn and find everything
            computers fascinating! When I am not studying or working, I am
            typically working on personal projects or enjoying one of many
            hobbies, such as watching movies, reading, practicing guitar,
            filming and editing videos, game developing, etc.
          </p>
        </div>
        <div className="p-4 bg-blue-500 bg-opacity-40 rounded-md md:col-span-2">
          <img
            src="images/forest.png"
            alt="Tree House Picture"
            loading="lazy"
            decoding="async"
            className="rounded-md mb-10 blur"
          />
          <br />
          <img
            src="images/ceo.png"
            alt="CEO Byte-le Picture"
            loading="lazy"
            decoding="async"
            className="rounded-md blur"
          />
        </div>
      </div>
      <div
        id="projects"
        className="mt-4 p-4 bg-blue-500 bg-opacity-40 rounded-md"
      >
        <Projects />
      </div>
      <div
        id="contact"
        className="mt-4 p-4 bg-blue-500 bg-opacity-40 rounded-md"
      >
        <Contact />
      </div>
      <div className="mt-8 flex align-middle justify-center">
        {/* "Floppy Disk" (https://skfb.ly/oqpCQ) by p1xfx is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */}
        <Link href="/game">
          <img
            src="floppy_disk_animation.gif"
            width={100}
            alt="Floppy Disk"
            className="hover:scale-125 transform transition duration-400"
          />
        </Link>
      </div>
      <h2 className="text-center chromatic">Mystery Game?</h2>
      <p className="mt-4 chromatic">
        In case I don&#39;t see ya, good afternoon, good evening, and good
        night!
      </p>
    </div>
  );
}
