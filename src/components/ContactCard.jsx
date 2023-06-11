import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclause from "../hooks/useDisclause";

const ContactCard = ({ contact }) => {
    const {isOpen, onClose, onOpen} = useDisclause();
  
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, 'contacts', id))
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div key={contact.id} className="bg-yellow flex items-center justify-between rounded-lg p-2 mb-2 mt-4">
                <div className="flex gap-2">
                    <HiOutlineUserCircle className="text-4xl text-orange" />
                    <div className="">
                        <h4 className="font-medium" >{contact.name}</h4>
                        <p className="font-sm">{contact.email}</p>
                    </div>
                </div>
                <div className="flex text-3xl">
                    <RiEditCircleLine onClick={onOpen} className=" cursor-pointer"/>
                    <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer" />
                </div>
            </div>
            <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default ContactCard