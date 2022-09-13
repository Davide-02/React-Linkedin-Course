import "./App.css";
import { BiArchive } from "react-icons/bi";

export function Home() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top " />
        My Website
      </h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
