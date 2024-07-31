import Link from "next/link";

/*
Component for Contact section on the main page, handling email functionality.
*/
export default function Contact() {
  // NEEDS FULL IMPLEMENTATION
  return (
    <div>
      <h1 className="chromatic">Connect With Me!</h1>
      <h3 className="chromatic">Feel free to send me an email down below:</h3>
      <br className="small-br" />
      <Link
        href="mailto:gunnar.alan.moody@gmail.com"
        className="hover:text-blue-400 chromatic"
      >
        <h3>gunnar.alan.moody@gmail.com</h3>
      </Link>
    </div>
  );
}
