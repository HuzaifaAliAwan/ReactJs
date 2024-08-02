import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  // Hooks are used here ........ 
  const [length, setlength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const passwordRef = useRef();

  // Function to generate password
  const passwordGenerator = useCallback(
    () => {
      let pass = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if (numberAllowed) str += '0123456789'
      if (charAllowed) str += '!@#$%^&*()_+?[]{}|/-'

      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass);
    },
    [
      length,
      numberAllowed,
      charAllowed,
      setPassword
    ])

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(
    () => {

      // This line is used to highlight text selection effect when user press copy button.
      passwordRef.current?.select()

      // This line is used to copy data to clipboard.
      window.navigator.clipboard.writeText(password)

      
    },
    [password]
  )

  // Hook to act if any change happend in the dependency
  useEffect(
    () => { passwordGenerator() },
    [length, numberAllowed, charAllowed, passwordGenerator]
  )

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-200">
        <h1 className="text-4xl text-center font-bold p-4 text-gray-600">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            className="p-2 w-full"
            type="text"
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>length: {length}</label>

          </div>
          <div className="text-gray-900 font-bold flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => { setNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="text-gray-900 font-bold flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={(e) => { setCharAllowed((prev) => !prev) }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
