import { useState } from "react";

const useDisclause = () => {
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
      setOpen(true);
    }
    const onClose = () => {
      setOpen(false);
    }
  

  return {  onClose, onOpen, isOpen}
  
}

export default useDisclause