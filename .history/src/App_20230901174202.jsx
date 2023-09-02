import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const conactsRef = collection(db, "contacts");
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex flex-grow relative items-center">
            <FiSearch className="absolute ml-1 mt-1 text-3xl text-white" />
            <input
              type="text"
              className="h-10 border border-white pl-9 bg-transparent text-white rounded-lg flex-grow"
            />
          </div>
          <AiFillPlusCircle className="cursor-pointer text-5xl text-white" />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
