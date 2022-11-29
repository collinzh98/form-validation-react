import type { NextPage} from 'next'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import Image from 'next/image'
import logo from '../public/login-image.svg';
import { motion as m} from 'framer-motion'

const Home: NextPage = (

) => {

  const router = useRouter()
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United States",
      terms: ""
    },

    validationSchema: Yup.object({
      name: Yup.string().max(20, 'Name should be less than 20 characters').required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      terms: Yup.array().required('Must agree with the `terms')
    }),

    onSubmit: (values) => {
      console.log(values);
      router.push({ pathname: "/success", query: values})
    }
    
  })
  console.log(formik.errors);
  
  return (
    <m.main
      initial={{
        opacity: 0
      }} 
      animate ={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
     className="flex justify-center items-center bg-[#001122] h-screen">
    <form onSubmit={formik.handleSubmit} className="relative bg-white flex w-1/2 rounded-lg">
     <div className="flex-1 p-20 text-gray-700">
       <h1 className="text-2xl font-bold pb-2">Let's Get Started 🚀</h1>
       <p className="text-lg text-gray-500 font-semibold">A Simple React Validation Form</p>
       <div className="mt-6">
       <div className="pb-4">

         <label className={`block font-bold text-sm pb-2 ${formik.errors.name ? "text-red-400" : ''}`} htmlFor="name">
           {formik.errors.name ? formik.errors.name : "Name"}
         </label>
         <input 
           className="border-2 border-gray-500 w-full focus:ring-teal-500 rounded-md p-2"
           type="text" 
           name="name" 
           placeholder="Enter name" 
           value={formik.values.name}
           onChange={formik.handleChange}/>
       </div>

       <div className="pb-4">
         <label className={`block font-bold text-sm pb-2 ${formik.errors.email ? "text-red-400" : ''}`} htmlFor="email">
         {formik.errors.email ? formik.errors.email : "Email"}
         </label>
         <input 
            className="border-2 border-gray-500 w-full focus:ring-teal-500 rounded-md p-2"
            type="email" 
            name="email"
            placeholder="Enter email" 
            value={formik.values.email}
            onChange={formik.handleChange} />
       </div>

       <div className="pb-4">
         <label className="block font-bold text-sm pb-2" htmlFor="country">Country</label>
           <select name="country" 
             className="border-2 border-gray-500 w-full focus:ring-teal-500 rounded-md p-2"
             value={formik.values.country}
             onChange={formik.handleChange}>
             <option>Germany</option>
             <option>Australia</option>
             <option>South Africa</option>
             <option>United Kingdom</option>
             <option>United States</option>
             <option>Canada</option>
             <option>Japan</option>
             <option>China</option>
             <option>Kenya</option>
             <option>Belgium</option>
             <option>Croatia</option>
           </select>
       </div>

       <div className="pb-4">
         <label className={`font-bold text-sms pb-2 ${formik.errors.terms ? "text-red-400" : ''}`} htmlFor="terms">
         {formik.errors.terms ? formik.errors.terms : "Terms"}
         </label>
         <div className="flex items-center gap-2">
          <input 
          type="checkbox"
          name="terms"
          value="checked"
          className="h-4 w-4 border-2 border-gray-500  focus:ring-teal-500 rounded-md"
          onChange={formik.handleChange}/>
          <p className="text-sm text-gray-500 font-semibold">I agree to the terms and service for the validation of information</p>
         </div>
          <button type="submit" className="bg-teal-500 text-sm font-bold w-full border-2 text-white py-3 mt-6 rounded-lg ">Submit</button>
       </div>
     </div>
     </div>
       <div className="relative flex-1">
         <Image src={logo} alt="logo" fill priority className="object-cover rounded-lg"/>
       </div>
    </form>
    
    </m.main>
  )
}

export default Home
