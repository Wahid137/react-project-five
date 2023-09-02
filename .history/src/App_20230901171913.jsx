import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="gap-2">
        <div className="flex relative">
          <FiSearch className="absolute ml-1 mt-1 text-3xl text-white" />
          <input
            type="text"
            className="h-10 border border-white pl-9 bg-transparent text-white rounded-lg flex-grow"
          />
        </div>
        <AiFillPlusCircle className="cursor-pointer text-5xl text-white" />
      </div>
    </div>
  );
}

export default App;
