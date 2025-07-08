import { createContext, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const ModalContext = createContext({ 
  isOpen: false, onClose: ()=> null, size: 'md'
});

const Modal = ({ children, size, isOpen = false, onClose }) => {
  useEffect(() => {
    document.documentElement.style.overflowY = isOpen ? "hidden" : "initial";
  }, [isOpen]);

  const value = { size, isOpen, onClose }

  const visibilityClasses = !isOpen ? "hidden" : "flex justify-center items-center";

  return (
    <ModalContext.Provider value={value}>
      {isOpen
        ? createPortal(
            <div 
              className={`fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-60 ${visibilityClasses}`}
              onClick={onClose}
              data-testid="modal"
            >
              {children}
            </div>,
            document.body
          )
        : null
      }
    </ModalContext.Provider>
  );
};

// export const ModalOverlay = ()=> {
//   const { onClose } = useContext(ModalContext)!;

//   return <div onClick={onClose} className='fixed z-10 left-0 top-0 w-full h-full bg-black bg-opacity-50'></div>
// }

const contentSizes = {
  xs: 'min-w-fit sm:w-9/12 md:w-6/12 lg:w-4/12',
  sm: 'sm:w-8/12 md:w-5/12 w-11/12',
  md: 'w-4/5 md:w-7/12',
  lg: 'w-10/12'
}
  
export const ModalContent = ({ children, className })=> {
  const { size } = useContext(ModalContext);

  const contentSizeClasses = contentSizes[size ?? 'md'];

  return (
    <div 
      onClick={e=> e.stopPropagation()}
      className={`relative rounded-lg p-4 max-h-[500px] overflow-auto z-40 ${className} ${contentSizeClasses}`}
    >
      {children}
    </div>
  )
}

export const ModalHeader = ({ children, className })=> {
  return (
    <header className={className}>
      {children}
    </header>
  )
}

export const ModalBody = ({ children, className })=> {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const ModalFooter = ({ children, className }) => {
  return (
    <footer className={className}>
      {children}
    </footer>
  )
}

export const ButtonCloseModal = ()=> {
  const { onClose } = useContext(ModalContext);

  // absolute right-2 top-2
  return (
    <button type='button' className='' onClick={onClose}>✕</button>
  )
}

export default Modal;