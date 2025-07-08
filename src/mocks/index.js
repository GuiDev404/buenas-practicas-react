const SIZE_PIN = 'lg';
const IS_COMPACT = false;

const TYPES = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
}

const genId = ()=> crypto.randomUUID()
export const randomPin = ()=> {
  const randomIndex = Math.floor(Math.random() * PINS.length)
  const pin = PINS[randomIndex]
  return pin
} 

export const PINS = [
  {
    id: genId(),
    alt: 'Lindsey Kustusch',
    img: 'https://i.pinimg.com/236x/e6/81/a2/e681a2ac9dca002b163052c4f8418fa3.jpg',
    title: 'Lindsey Kustusch',
    size: SIZE_PIN,
    isCompact: IS_COMPACT,
    type: TYPES.HOVERED,
    url: ''
  },
  {
    id: genId(),
    alt: 'Blade Runner 2049 The Memory Maker Scene. Dr. Ana Stelline recognizes K&#39;s memory as her own Pin page',
    img: 'https://i.pinimg.com/236x/9d/6d/51/9d6d517711f0805f20e529cf4b1ca280.jpg',
    title: 'Blade Runner 2049 The Memory Maker Scene. Dr. Ana Stelline recognizes K\'s memory as her own.',
    size: SIZE_PIN,
    isCompact: IS_COMPACT,
    type: TYPES.HOVERED,
    url: 'https://www.youtube.com/watch?v=9glkD8biCXs'
  },
  {
    id: genId(),
    alt: 'La Galería Popurrí: Photo Pin page',
    img: 'https://i.pinimg.com/236x/dd/6a/80/dd6a80124940846b2597857ef7860273.jpg',
    title: 'La Galería Popurrí: Photo',
    size: SIZE_PIN,
    isCompact: IS_COMPACT,
    type: TYPES.HOVERED,
    url: 'https://lagaleriapopurri.tumblr.com/image/184545472742'
  },
  {
    id: genId(),
    alt: '',
    img: 'https://i.pinimg.com/236x/1a/8a/dc/1a8adc74f2af4ea08dac99f910a50519.jpg',
    title: '',
    size: SIZE_PIN,
    isCompact: IS_COMPACT,
    type: TYPES.HOVERED,
    url: ''
  },
  {
    id: genId(),
    alt: 'This contains an image of: PEONY',
    img: 'https://i.pinimg.com/236x/68/73/c0/6873c00bbf65907076c6715ea051fbac.jpg',
    title: 'PEONY',
    size: SIZE_PIN,
    isCompact: IS_COMPACT,
    type: TYPES.HOVERED,
    url: 'https://miraclepooh.tumblr.com/post/670088253062463488'
  },
  {
    id: genId(),
    alt: 'This contains an image of: REMEMBER ME',
    img: 'https://i.pinimg.com/236x/4e/e2/52/4ee252f5bbf32b81c23c85a0cdada625.jpg',
    title: 'REMEMBER ME',
    size: SIZE_PIN,
    isCompact: IS_COMPACT,
    type: TYPES.HOVERED,
    url: ''
  },
];

export const PIN_MORE_IDEAS = [...Array(4).keys()].reduce((acc)=> {
  const list = []

  let count = 0
  while(count < 3){
    const pin = randomPin()

    const exist = list.some(p=> p.id === pin.id)
    if(!exist) {
      list.push(pin)
      count++
    } 
  }

  acc.push(list)
  return acc
}, [])
