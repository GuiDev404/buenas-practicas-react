import { ArrowUpRightIcon, ShareIcon } from '../Icons';

import Pin from './';
import PinButton from './PinButton';
import PinFooter from './PinFooter';
import PinHeader from './PinHeader';
import PinImage from './PinImage';

function PinBoard ({ img, alt, size, type, isCompact, url, title }){
  // const [open, setOpen] = useState(false)

  // const handleOpen = ()=> {
  //   setOpen(prevState=> !prevState)
  // }

  return (
    <div className='relative'>
         {/* {open && <div className='absolute left-full bg-white z-20 p-4 rounded-xl shadow-xl border border-gray-100 max-w-72 w-full -ml-4 min-h-56'>
          Lorem, ipsum.
        </div>} */}

      <Pin size={size} type={type}>
        <PinImage 
          src={img}
          alt={alt}
        />

        {/* <PinHeader className={{ 'justify-between': isCompact, 'justify-end': !isCompact }}> */}
        <PinHeader className={'justify-between'}>
          {!isCompact && (
            <PinButton variant='outline' className={'font-semibold flex items-center'} radius="small" >
              <span> Japon </span>

              <svg  xmlns="http://www.w3.org/2000/svg"  width={20}  height={20}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
            </PinButton>
          )}

          <PinButton variant='primary' className='font-semibold' radius="small">
            Save
          </PinButton>
        </PinHeader>

        <PinFooter className={['',{ 'justify-between': url, 'justify-end': !url }]}>
          {url && 
            <PinButton url={url} radius="small" variant='secondary' className='text-sm font-semibold' isFooterBtn isExternal>
              <ArrowUpRightIcon />
              <span className='truncate max-w-24 inline-block'>{new URL(url).hostname}</span>
            </PinButton>  
          }
          
          <div className="flex gap-x-2">
            {/* <PinButton variant='secondary' radius='small' isFooterBtn> 
              <EditIcon width={16} /> 
            </PinButton> */}
            <PinButton variant='secondary' radius='small' isFooterBtn> 
              <ShareIcon width={16} />
            </PinButton>
          </div>
        </PinFooter>
      </Pin>
      {Boolean(title) && <p className='truncate text-sm text-zinc-900 font-semibold w-[90%] px-2 py-1'>{title}</p>}
    </div>
  )
}

export default PinBoard