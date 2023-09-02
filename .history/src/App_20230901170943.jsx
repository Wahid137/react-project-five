import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div>
        <div>
          <FiSearch className="absolute" />
          <input type="text" className="h-10 " />
        </div>
      </div>
    </div>
  );
}

export default App;
