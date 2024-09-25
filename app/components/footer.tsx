import Link from "next/link";

/*
Component for the Footer section of the website.
Includes a link to the main page. 
*/
export default function Footer() {
  return (
    <footer>
      <div className="float-left flex add-margin blur">
        <p className="chromatic">
          &#169; 2024{" "}
          <Link href="/" className="underline hover:text-blue-400">
            Gunnar Moody
          </Link>{" "}
          | Thank you for viewing!
        </p>
      </div>
    </footer>
  );
}
