export default function Home() {
  return (
    <div className="m-4">
      <h1 className="chromatic" data-text="Hello World">
        Hello World!
      </h1>
      <div className="aboutSection">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-blue-400 bg-opacity-25 rounded-md">
            <h1 className="chromatic" data-text="Who Am I?">
              Who Am I?
            </h1>
            <p>Hello all! My name is Gunnar Moody!</p>
          </div>
          <div className="p-4 bg-blue-400 bg-opacity-25 rounded-md">
            Insert Images Here
          </div>
        </div>
      </div>
    </div>
  );
}
