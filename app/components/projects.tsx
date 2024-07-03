"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* 
For the logic of fetching GitHub repos using React and the GitHub API, 
credit goes it Minisodan at https://github.com/minisodan.
Thank you.
*/

export default function Projects() {
  // Logic to call GitHub API and fetch owned and public repos, as well as some Byte-le repos
  // Set states
  const [repos, setRepo] = useState<any[]>([]);
  const [reposOther, setOtherRepo] = useState<any[]>([]);

  // Get repos
  const fetchRepos = async () => {
    const response = {
      "My Repos": await fetch("https://api.github.com/users/moodyMan04/repos"),
      "Byte Engine": await fetch(
        "https://api.github.com/repos/acm-ndsu/byte_engine"
      ),
      "Byte 2024": await fetch(
        "https://api.github.com/repos/acm-ndsu/Byte-le-2024"
      ),
    };

    // Get jsons from repos
    const repos = await response["My Repos"].json();
    const reposByteEngine = await response["Byte Engine"].json();
    const reposByte2024 = await response["Byte 2024"].json();

    // Call set repo methods on repo jsons
    setRepo(repos);
    setOtherRepo([reposByteEngine, reposByte2024]);
  };
  useEffect(() => {
    fetchRepos();
  }, []);

  // Return to display the repos
  return (
    <div>
      <h1 className="chromatic">Projects!</h1>
      <h2 className="chromatic">GitHub Repos:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {repos.map((user) => {
          const { id, name, html_url, language, owner, description } = user;
          return loadProjectCards(
            id,
            name,
            html_url,
            language,
            owner,
            description
          );
        })}
      </div>
      <h2 className="chromatic">NDSU ACM Byte-le Repos:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {reposOther.map((user) => {
          const { id, name, html_url, language, owner, description } = user;
          return loadProjectCards(
            id,
            name,
            html_url,
            language,
            owner,
            description
          );
        })}
      </div>
    </div>
  );
}

// Function for displaying projects as cards on the website
function loadProjectCards(
  id: number,
  name: string,
  html_url: string,
  language: string,
  owner: any,
  description: string
) {
  return (
    <div
      key={id}
      id={name}
      className="m-1 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-75"
    >
      <Link href={html_url} target="_blank" className="p-4 block w-full h-full">
        <div className="flex items-center">
          <img
            src={`${owner.avatar_url}`}
            alt="Owner Image"
            width={50}
            className="rounded-full"
          />
          <h2 className="ml-4 title-overflow chromatic">{name}</h2>
        </div>
        <br className="small-br" />
        <h3 className="chromatic">Language: {language}</h3>
        <br className="small-br" />
        <p className="text-overflow chromatic">{description}</p>
      </Link>
    </div>
  );
}
