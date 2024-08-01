import { useState } from 'react'
import CustomButton from './components/customButton.jsx'

function App() {

    const[color, setColor] = useState("olive");


  return (
    <>
      <div className='w-full h-screen duration-200' 
        style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg'>
            <CustomButton title="Red" color='red' updater={setColor}/>
            <CustomButton title="Green" color='green' updater={setColor}/>
            <CustomButton title="Blue" color='blue' updater={setColor}/>
            <CustomButton title="Purple" color='Purple' updater={setColor}/>
            <CustomButton title="Orange" color='Orange' updater={setColor}/>
            <CustomButton title="Pink" color='Pink' updater={setColor}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
