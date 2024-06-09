import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="float-left flex add-margin">
        <p className="chromatic">
          2024 |{" "}
          <Link href="/" className="underline hover:text-blue-400">
            Gunnar Moody
          </Link>{" "}
          | Thank you for viewing!
        </p>
      </div>
    </footer>
  );
}
