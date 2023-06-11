import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { FiSearch } from "react-icons/fi";

import { AiFillPlusCircle } from "react-icons/ai";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclause from "./hooks/useDisclause";




function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclause();
  

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts');
        // const contactSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot)=> {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
  
          setContacts(contactList);
          return contactList;
        })


      } catch (error) {

      }
    };
    getContacts();

  }, [])

const filterContacts = (e) => {
  const value = e.target.value;
  const contactsRef = collection(db, 'contacts');
  // const contactSnapshot = await getDocs(contactsRef);
  onSnapshot(contactsRef, (snapshot)=> {
    const contactLists = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    
      const filteredContacts = contactLists.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()))
    console.log(value)
      setContacts(filteredContacts);
      return filteredContacts;
  })
}
  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex items-center gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute" />
            <input type="text" className="bg-transparent border border-white h-10 flex-grow text-white pl-8" onChange={filterContacts} />
          </div>

          <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer" />

        </div>
        <div>
          {contacts.map((contact) => (
            <ContactCard contact={contact} key={contact.id} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    </>
  )
} 

export default App