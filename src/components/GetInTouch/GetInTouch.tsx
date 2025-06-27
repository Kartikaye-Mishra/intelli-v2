import { useState } from "react";
import { subImg } from "../../constants/images"
import toast from "react-hot-toast";

export default function GetInTouch() {
  const [email,setEmail] = useState("");
  const handleRegister = (e:React.FormEvent) =>{
    e.preventDefault();
    console.log("Email: ",email);
    toast.success("Email Registered Successfully")
    setEmail("");
  }
  return (
  <section id="getintouch" className="py-16 px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">
      <div className="w-full lg:w-1/2">
        <img src={subImg} alt="Get in touch" className="w-full max-w-sm lg:max-w-md mx-auto" />
      </div>
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-bold text-primary mb-4">Get In Touch</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Stay Connected With Us! Subscribe With Your Email To Receive The Latest Updates,
          Insights, And Exclusive Offers Delivered Directly To Your Inbox.
        </p>
        <form onSubmit={handleRegister} className="flex flex-col lg:mr-4 sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded shadow focus:outline-none border"
            required
          />
          <button type="submit" className="bg-primary text-white px-6 py-2  rounded shadow hover:cursor-pointer hover:bg-primary/90 transition">
            Register
          </button>
        </form>
      </div>
    </section>
  )
}
