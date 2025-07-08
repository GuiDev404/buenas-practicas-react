import PinImage from './Pin/PinImage';

const MoreIdeasCard = ({ pinsPreview, cardTitle }) => {
   
  return (
    <article className='flex gap-x-10 p-5 min-w-80 rounded-md bg-orange-200 '>
      <div className='flex ms-5 group transition ease-in delay-150 '>
        {pinsPreview.map((pin, index) => {
          const rotate = [
            '-rotate-12 group-hover:-rotate-[16deg]',
            'rotate-0 group-hover:relative group-hover:bottom-1 ',
            'rotate-12 group-hover:rotate-[16deg]'
          ]

          return (
            <PinImage
              key={pin.id}
              size='xs'
              src={pin.img}
              alt={pin.alt}
              className={`rounded-xl border border-white -mx-5 ${rotate[index]}`}
            />
          )
        }
        )}
      </div>

      <div>
        <p className='text-sm'> More ideas for </p>
        <h2 className='text-lg font-semibold'> {cardTitle} </h2>
      </div>
    </article>
  );
};

export default MoreIdeasCard;
