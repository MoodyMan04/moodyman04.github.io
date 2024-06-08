export default function Home() {
  return (
    <div className="add-margin">
      <br className="mt-14 md:mt-8" />
      <h1 className="chromatic">Hello World!</h1>
      <div className="aboutSection">
        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-8">
          <div className="p-4 bg-blue-400 bg-opacity-25 rounded-md">
            <h1 className="chromatic">Who Am I?</h1>
            <br />
            <h2 className="chromatic">Gunnar Moody | Software Engineer</h2>
            <br />
            <p className="chromatic">
              Hello! My name is Gunnar Moody! I am a dedicated software engineer
              and current student of NDSU&#39;s class of 2025! I am pursuing a
              bachelor&#39;s degree in Computer Science with an interest in
              Cybersecurity and a minor in A.I.
            </p>
          </div>
          <div className="p-4 bg-blue-400 bg-opacity-25 rounded-md">
            Insert Images Here
          </div>
        </div>
      </div>
    </div>
  );
}
