import Button from './Button';
import { EditIcon, ShareIcon } from './Icons';
import PinBoard from './PinBoard';

const NormalPinBoard = ({ imgAlt, imgSrc, size }) => {
  return (
    <PinBoard
      imgAlt={imgAlt}
      imgSrc={imgSrc}
      size={size}
      header={
        <>
          <Button variant='primary' size={size} radius='normal'>
            Save
          </Button>
        </>
      }
      footer={
        <>
          <Button variant='secondary' size={size} radius='full'>
            <EditIcon width={16} height={16} />
          </Button>
          <Button variant='secondary' size={size} radius='full'>
            <ShareIcon width={16} height={16} />
          </Button>
        </>
      }
    />
  );
};

export default NormalPinBoard;
