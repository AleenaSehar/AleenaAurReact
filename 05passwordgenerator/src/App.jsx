import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed]=useState(false);
  const [charactersallowed, setcharactersallowed]=useState(false)
  const [password,setpassword]=useState("")

  // ref hook

  const passwordRef= useRef(null)


   const passwordGenerator= useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str+= "0123456789"
    if (charactersallowed) str+= "!$#&*+=_-{}`^%[]"
    for (let i=1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setpassword(pass)
   },[length, numberallowed, charactersallowed,setpassword])

   const copypasswordtoclip= useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password)
   }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberallowed, charactersallowed, passwordGenerator])
  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center p-3'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
     <input
     type="text"
     value={password}
     className='outline-none w-full py-1 px-3'
     placeholder='password'
     readOnly
     ref={passwordRef}
     />
     <button
     onClick={copypasswordtoclip}
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" min={8} max={100} value={length} 
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
        />
        <label> length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={numberallowed}
        id="numberInput"
        onChange={() =>{
          setnumberallowed((prev) => !prev);
        }}
        />
        <label>Numbers:{numberallowed}</label>

      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={charactersallowed}
        id="charInput"
        onChange={() =>{
          setcharactersallowed((prev) => !prev);
        }}
        />
        <label>character:{charactersallowed}</label>

      </div>
    </div>
  </div>
    </>
  )
}

export default App
