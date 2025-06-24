import { FaChevronRight } from "react-icons/fa";
import { notFoundImg } from "../constants/images";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
  <section className="mt-16 flex flex-col-reverse gap-10 md:gap-4 md:flex-row py-8 px-4 md:px-8 items-center justify-center mb-auto ">
    <div className="text flex flex-col gap-2 md:px-12">
        <h2 className="text-xl md:text-2xl  xl:text-3xl font-bold capitalize">Page Not Found</h2>
        <p className="capitalize  xl:text-lg">this page which you are trying to reach is not found. if you are having any issues feel free to send us your problem, and we will be happy to fix it as soon as we can.</p>
        <Link to={"/contact"}>
        <button className="flex mt-2 items-center gap-2 border border-primary text-primary px-5 py-2 rounded hover:bg-primary/10 hover:cursor-pointer max-w-min">
            Contact <FaChevronRight/>
        </button>
        </Link>
    </div>
    {/* <div className="img md:max-w-[40%] mobMd:max-h-[40vh] border-2"> */}
        <img src={notFoundImg} alt="" className="md:min-w-[40%] mobMd:max-h-[40vh] "/>
    {/* </div> */}
  </section>
  )
}
