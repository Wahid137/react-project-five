import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div>
        <div className="flex relative">
          <FiSearch className="absolute ml-1 mt-1 text-3xl text-white" />
          <input
            type="text"
            className="h-10 border border-white bg-transparent text-white rounded-lg flex-grow"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
