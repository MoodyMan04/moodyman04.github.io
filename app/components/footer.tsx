"use client";

import { scrollToElement } from "./scroll";

export default function Footer() {
  return (
    <footer>
      <div className="float-left flex add-margin">
        <p className="chromatic">
          2024 |{" "}
          <button
            className="underline hover:text-blue-400 chromatic"
            onClick={scrollToElement("top")}
          >
            Gunnar Moody
          </button>{" "}
          | Thank you for viewing!
        </p>
      </div>
    </footer>
  );
}
