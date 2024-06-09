"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* 
For the logic of fetching GitHub repos using React and the GitHub API, 
credit goes it Minisodan at https://github.com/minisodan
Thank you.
*/

export default function Projects() {
  // Logic to call GitHub API and fetch owned and public repos
  const [repos, setRepo] = useState<any[]>([]);

  const fetchRepos = async () => {
    const response = await fetch(
      "https://api.github.com/users/moodyMan04/repos"
    );
    const repos = await response.json();
    setRepo(repos);
  };
  useEffect(() => {
    fetchRepos();
  }, []);

  // Return to display the repos
  return (
    <div>
      <h1 className="chromatic">Projects!</h1>
      <h3 className="chromatic">GitHub Repos:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {repos.map((user) => {
          const { id, name, html_url, language, owner, description } = user;
          return (
            <div
              key={id}
              className="p-2 bg-black bg-opacity-50 rounded-md hover:bg-opacity-75"
            >
              <Link
                href={html_url}
                target="_blank"
                className="block w-full h-full"
              >
                <div className="flex items-center">
                  <img
                    src={`${owner.avatar_url}`}
                    alt="Space Dog"
                    width={75}
                    className="rounded-full"
                  />
                  <h2 className="ml-4 chromatic">{name}</h2>
                </div>
                <br className="small-br" />
                <h3 className="chromatic">Language: {language}</h3>
                <br className="small-br" />
                <p className="chromatic">{description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}