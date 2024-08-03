import { useCallback, useEffect, useState, useRef } from 'react'
import html2canvas from 'html2canvas'

function App() {

  const [angle, setAngle] = useState(0)
  const [redColor, setRedColor] = useState(0)
  const [greenColor, setGreenColor] = useState(0)
  const [blueColor, setBlueColor] = useState(0)
  const [borderRadius, setBorderRadius] = useState(0)
  const [name, setName] = useState('Name')
  const [image, setImage] = useState('')

  const canvasRef = useRef(null)
  const imageRef = useRef(null)

  const downloadCanvas = useCallback(
    () => {
      html2canvas(canvasRef.current)
        .then(
          canvas => {
            const ctx = canvas.getContext('2d');
            ctx.drawImage(imageRef.current, 0, 0);
            const link = document.createElement('a');
            link.download = 'profilecard.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          }
        )
    },
    [canvasRef, imageRef]
  )


  // const rotateBox = useCallback(
  //   (e) => {
  //     setAngle(e.target.value)
  //   },
  //   [
  //     angle
  //   ]
  // )

  // useEffect(
  //   () => {
  //     rotateBox()
  //   },
  //   [angle]
  // )



  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-between p-[100px] bg-gray-500'>
        <div
          ref={canvasRef}
          className='w-[300px] h-[300px] flex flex-col justify-center items-center'
          style={{
            backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})`,
            transform: `rotate(${angle}deg)`,
            borderRadius: `${borderRadius}%`
          }}
        >
          <img
            ref={imageRef}
            src={image}
            alt="Person Picture"
            srcSet={image}
            className='w-auto h-auto max-h-[200px] max-w-[200px]'
            crossOrigin='anonymous'
            style={{
              borderRadius: `${borderRadius}%`
            }}
          />
          <h1 className='uppercase'>{name}</h1>
        </div>
        <div className='flex flex-col space-y-5 w-full '>
          <div className='flex flex-row w-full bg-gray-50 p-5 rounded-lg space-x-5'>
            <div className='flex flex-col space-x-2 items-
          center space-y-3'>
              <input
                defaultValue={0}
                type="range"
                name="boxangle"
                id="boxangle"
                max={360}
                min={-360}
                onChange={(e) => { setAngle(e.target.value) }}
              />
              <label
                className='font-bold'
                htmlFor="boxangle"
              >
                Rotate Angle: {angle} deg
              </label>

            </div>

            <div className='flex flex-col space-x-2 items-center space-y-3'>
              <input
                defaultValue={0}
                type="range"
                name="redcolor"
                id="redcolor"
                max={255}
                min={0}
                onChange={(e) => { setRedColor(e.target.value) }}
              />
              <label
                className='font-bold text-red-500'
                htmlFor="redcolor"
              >
                Red Color: {redColor}
              </label>

            </div>
            <div className='flex flex-col space-x-2 items-center space-y-3'>
              <input
                defaultValue={0}
                type="range"
                name="greencolor"
                id="greencolor"
                max={255}
                min={0}
                onChange={(e) => { setGreenColor(e.target.value) }}
              />
              <label
                className='font-bold text-green-500'
                htmlFor="greencolor"
              >
                Green Color: {greenColor}
              </label>

            </div>
            <div className='flex flex-col space-x-2 items-center space-y-3'>
              <input
                defaultValue={0}
                type="range"
                name="bluecolor"
                id="bluecolor"
                max={255}
                min={0}
                onChange={(e) => { setBlueColor(e.target.value) }}
              />
              <label
                className='font-bold text-blue-500'
                htmlFor="bluecolor"
              >
                Blue Color: {redColor}
              </label>

            </div>

            <div className='flex flex-col space-x-2 items-center space-y-3'>
              <input
                defaultValue={0}
                type="range"
                name="borderradius"
                id="borderradius"
                min={0}
                max={100}
                onChange={(e) => { setBorderRadius(e.target.value) }}
              />
              <label
                className='font-bold'
                htmlFor="borderradius"
              >
                Border Radius: {borderRadius}%
              </label>

            </div>

          </div>
          <div className='flex flex-row w-full bg-gray-50 p-5 rounded-lg space-x-5'>
            <input
              type="text"
              name="username"
              id="username"
              placeholder='Name'
              maxLength={15}
              onChange={(e) => { setName(e.target.value) }}
              className='border outline-none p-2 rounded'
            />
            <input
              type="text"
              name="imageurl"
              id="imageurl"
              placeholder='Image URL'
              onChange={(e) => { setImage(e.target.value) }}
              className='border outline-none p-2 rounded'
            />

            <button
              type="button"
              onClick={downloadCanvas}
              className='bg-gray-500 hover:bg-gray-700 p-2 rounded-lg text-white font-semibold transition'
            >
              Download
            </button>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
