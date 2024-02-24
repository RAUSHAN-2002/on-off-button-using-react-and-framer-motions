import React, { useState } from 'react'
import { motion } from 'framer-motion';


const App = () => {
     const [A, setA] = useState(false)
  return (
    <div className='w-full h-screen bg-black text-white flex justify-center items-center'>
      <div data-change={A} onClick={()=>setA(!A)}
      className='handle w-96 h-34 bg-green-500 p-4
      rounded-full flex cursor-pointer
      '>

        <motion.div layout className='w-32 h-32 layout
        bg-green-700 p-4 rounded-full flex items-center
        '  transition={{duration:0.3}}></motion.div>
      </div>
      
    </div>
  )
}

export default App
