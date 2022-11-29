import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti';
import { motion as m } from 'framer-motion'
type Props = {}

function success({}: Props) {

   const router = useRouter();
   const [pieces, setPieces] = useState(200)

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0)
    }, 3000)
  }

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <m.main
    initial= {{
        opacity: 0,
    }}
    animate ={{
        opacity: 1,
    }}
    exit = {{
        opacity: 0
    }}
     className="flex items-center justify-center h-screen bg-[#001122]">
        <div className="bg-white rounded-lg w-1/2 text-gray-700 py-8 px-14">
            <h1 className="pb-4 text-3xl font-bold">Thank you for the email {router.query.name} ✨✨</h1>
            <p className="text-md text-gray-500">We have sent back an email over at <span className="underline decoration-black cursor-pointer">{router.query.email}</span>. We will get back to you ASAP</p>
        </div>
        <Confetti
        gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  )
}

export default success