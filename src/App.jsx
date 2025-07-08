import { Masonry } from 'masonic';
import { PINS, PIN_MORE_IDEAS } from '@mocks/index';
import MoreIdeasCard from '@components/MoreIdeasCard';
import PinBoard from '@components/Pin/PinBoard';
// import ConfirmAlert from './components/ConfirmAlert';
// import { useState } from 'react';
// import Button from './components/Button';

const [ PINS_PREVIEW_00, PINS_PREVIEW_01, PINS_PREVIEW_02, PINS_PREVIEW_03 ] = PIN_MORE_IDEAS

function App() {

  // const [ show, setShow ] = useState()



  return (
    <div className='max-w-[98%] w-[95%] mx-auto my-4'>
      <h1 className='text-3xl font-bold text-center my-5'>Pinterest</h1>

      <div className='flex gap-x-2 overflow-x-auto mb-4'>
        <MoreIdeasCard pinsPreview={PINS_PREVIEW_00} cardTitle='Anime & Manga' />
        <MoreIdeasCard pinsPreview={PINS_PREVIEW_01} cardTitle='Anime & Manga' />
        <MoreIdeasCard pinsPreview={PINS_PREVIEW_02} cardTitle='Anime & Manga' />
        <MoreIdeasCard pinsPreview={PINS_PREVIEW_03} cardTitle='Anime & Manga' />
      </div>

      
      {/* <ConfirmAlert 
        message='¿Eliminar entrada?'
        onCancel={()=> console.log('cancelado')}
        onConfirm={()=> console.log('ok papi')}
        onClose={()=> setShow(false)}
        show={show}
      />

      <Button type='button' variant='primary' onClick={()=> setShow(true)}>
        Eliminar entrada
      </Button> */}

      {/* INDIVIDUAL PIN */}

      <Masonry
        // Provides the data for our grid items
        items={PINS}
        // Adds 8px of space between the grid cells
        columnGutter={10}
        rowGutter={10}
        // Sets the minimum column width to 172px
        columnWidth={215}
        // Pre-renders 5 windows worth of content
        overscanBy={5}
        // This is the grid item component
        render={({ data })=> <PinBoard {...data} />}
      />


    </div>
  );
}

export default App;
