import { useState } from "react";
import { contactImage } from "../../constants/images";
import toast from "react-hot-toast";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { contactMail, contactNumber } from "../../constants/title";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    toast.success("Thank You For Contacting Us");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <h2 className="text-2xl text-center font-bold  text-primary mt-8">
        Contact Us
      </h2>
      <div className="flex flex-col justify-between pb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 pt-12 gap-10">
          <img
            src={contactImage}
            alt="Contact"
            className=" h-full w-75 xl:w-[35%] md:h-[60%]"
          />
          <form onSubmit={handleSubmit} className="w-full lg:w-[50%] space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="field items-center flex  w-full md:w-1/2 gap-2 font-medium  sm:text-lg">
                <BsTelephoneFill className="text-lg h-6 w-6" />
                {contactNumber}
              </div>
              <a
  href={`mailto:${contactMail}`}
  className="field flex items-center font-medium sm:text-lg gap-2 w-full md:w-1/2 text-nowrap overflow-hidden"
  title={contactMail}
>
  <IoIosMail className="text-lg h-6 w-6 shrink-0" />
  <span className="truncate">{contactMail}</span>
</a>
            </div>

            <div className="flex gap-4 flex-col md:flex-row">
              <div className="field flex flex-col w-full">
                <label className="capitalize font-medium">First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="field flex flex-col w-full">
                <label className="capitalize font-medium">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="field flex flex-col">
              <label className="capitalize font-medium">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Write Your Message Down Here
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message..."
                className="w-full border rounded px-3 py-2 focus:outline-none resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary  text-white px-6 py-2 rounded-md hover:bg-primary/90 transition duration-200 hover:cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
