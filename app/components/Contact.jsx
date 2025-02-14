import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "74842b18-ada9-4591-bd65-3501f9e006d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] dark:bg-none">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ">
        Please feel free to contact me  if you have any questions, comments , feedback or would like to collaborate, by filling in the form below.
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter your name' required  className='flex-1 p-3 otline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 ' name='name'/>
            <input type="Email" placeholder='Enter your email' required  className='flex-1 p-3 otline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email' />
        </div>
        <textarea name="message"  rows={6} placeholder='Type your message here....' required  className='w-full p-4 otline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'></textarea>

        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit <Image src={assets.right_arrow_white} alt="" className="w-4"/></button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
