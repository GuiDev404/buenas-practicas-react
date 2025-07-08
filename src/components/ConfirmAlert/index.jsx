import Button from '../Button';
import Modal, { ModalBody, ModalContent } from '../Modal';

const ConfirmAlert = ({
  message,
  btnSuccessContent: btnConfirmContent = 'Confirmar',
  onConfirm,
  onCancel,
  btnCancelContent = 'Cancelar',
  show, 
  onClose
}) => {

  const handleCancel = ()=> {
    onCancel && onCancel()
    onClose()
  }

  const handleConfirm = ()=> {
    onConfirm && onConfirm()
    onClose()
  }

  return (
    <Modal onClose={onClose} size='xs' isOpen={show}>
      <ModalContent>
        <ModalBody className='bg-white p-2 rounded-md'>
          <p className='text-center text-lg font-semibold my-4'> {message} </p>

          <div className='inline-flex gap-2 w-full justify-center'>
            <Button 
              type='button'
              variant='secondary'
              // className='p-2 rounded-md bg-gray-200'
              onClick={handleCancel}
            >
              {btnCancelContent}
            </Button>
            
            <Button 
              type='button'
              variant='primary'
              onClick={handleConfirm}
            >
              {btnConfirmContent}
            </Button>
        
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmAlert;
