import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="float-left flex add-margin">
        <p
          className="chromatic"
          data-text="2024 Gunnar Moody | Thank you for viewing!"
        >
          2024{" "}
          <Link href="/" className="hover:text-blue-500">
            Gunnar Moody
          </Link>{" "}
          | Thank you for viewing!
        </p>
      </div>
    </footer>
  );
}
