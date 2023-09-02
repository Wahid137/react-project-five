import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div>
        <div>
          <FiSearch />
        </div>
      </div>
    </div>
  );
}

export default App;
