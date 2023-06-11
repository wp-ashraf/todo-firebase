import { Field, Form, Formik } from 'formik'
import Modal from './Modal'
import { db } from '../config/firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {

    const addContact = async (contact) => {
        try {
          const contactRef = collection(db, 'contacts');
          await addDoc(contactRef, contact)

          onClose();
    
        } catch (error) {
          console.log(error)
        }
      }
    const updateContact = async (contact, id) => {
        try {
          
          const contactRef = doc(db, 'contacts', id);
          await updateDoc(contactRef, contact)
    
        } catch (error) {
          console.log(error)
        }
      }
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik initialValues={
                    isUpdate ?
                    {
                        name: contact.name,
                        email: contact.email,
                    }:
                    {
                        name: '',
                        email: ''
                    }
                }
                onSubmit={(values) => {
                    isUpdate ? 
                    updateContact(values, contact.id) :
                    addContact(values);
                }}
                >
                    <Form className='flex flex-col gap-2'>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" placeholder="Name" required className="border h-10 px-3" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Name</label>
                            <Field type="email" name="email" placeholder="Email" required className="border h-10 px-3" />
                        </div>
                        <button className=' bg-orange px-3 py-1.5 border self-start'>{isUpdate ? 'Update' : 'Add'} CContact</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default AddAndUpdateContact