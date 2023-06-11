import { createPortal } from 'react-dom';
import {AiOutlineClose} from 'react-icons/ai';


const Modal = ({ onClose, isOpen, children }) => {

  return createPortal(
    <>

      {isOpen &&
        <>
        <div className="relative z-50 m-auto min-h-[200px] max-w-[100%] bg-white p-4">
          <div className="flex justify-end">
          <AiOutlineClose onClick={onClose} className='self-end text-2xl' />
          </div>
          {children}
        </div>
        <div className="absolute top-0 z-40 h-screen w-screen backdrop-blur"></div>
        </>
      }
    </>,
    document.getElementById('modal-root')
  )
}

export default Modal