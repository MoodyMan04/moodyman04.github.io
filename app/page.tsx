import Link from "next/link";
import { byteleLink } from "@/public/links";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="add-margin">
      <br />
      <h1 className="ml-4 chromatic">Hello World!</h1>
      <div id="aboutSection">
        <div className="grid grid-cols-1 md:grid-cols-6 mt-4 gap-8">
          <div className="p-4 bg-blue-500 bg-opacity-40 rounded-md md:col-span-4">
            <h1 className="chromatic">Who Am I?</h1>
            <h2 className="chromatic">
              Gunnar Moody | Full-Stack Software Developer
            </h2>
            <h3 className="chromatic">
              <br className="small-br" />
              Skills:
              <br className="small-br" />
              Java | Python | C# | SQL | HTML | CSS | JavaScript and TypeScript
              | VB.NET
              <br className="small-br" />
              Git | GitHub | MySQL | PostgreSQL | React | Next.js | Django |
              ASP.NET
              <br className="small-br" />
              Current Work:
              <br className="small-br" />
              Fast Enterprises: Implementation Intern for the Colorado Tax team!
            </h3>
            <p className="chromatic">
              <br className="small-br" />
              Hello! My name is Gunnar Moody! I am a dedicated software engineer
              and current student of NDSU&#39;s class of 2025, where I am
              pursuing a bachelor&#39;s degree in Computer Science with an
              interest in Cybersecurity and a minor in A.I.
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
              programming competition for our 2024-25 games!
              <br className="small-br" />I love to learn and find everything
              computers fascinating! When I am not studying or working, I am
              typically working on personal projects or enjoying one of many
              hobbies, such as watching movies, reading, practicing guitar,
              filming and editing videos, game developing, etc.
            </p>
          </div>
          <div className="p-4 bg-blue-500 bg-opacity-40 rounded-md md:col-span-2">
            <img
              src="forest.svg"
              alt="Tree House Picture"
              loading="lazy"
              decoding="async"
              className="rounded-md"
            />
            <br />
            <img
              src="ceoBytele2024.svg"
              alt="CEO Byte-le Picture"
              loading="lazy"
              decoding="async"
              className="rounded-md"
            ></img>
          </div>
        </div>
      </div>
      <div id="projectsSection">
        <div className="mt-4 p-4 bg-blue-500 bg-opacity-40 rounded-md">
          <Projects />
        </div>
      </div>
      <p className="mt-4 chromatic">
        In case I don&#39;t see ya, good afternoon, good evening, and good
        night!
      </p>
    </div>
  );
}
