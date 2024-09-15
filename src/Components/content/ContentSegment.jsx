import Title from "../Typography/Title";
import SwiperCard from "./SwipperCard"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function ContentSegment() {
  return (
    <>
      <section className="w-full h-[600px] relative my-36">
      <div className="rounded-[100px] top-0 left-full bg-gradient-to-r rotate-90 from-[#00c3ffdb] to-[#FF29C3] absolute h-72 w-72 blur-[100px] z-0"></div>

        <div className="text-center m-auto">
        <Title title={"Customer is Our Top Priority"} miniTitle={"Testimonial"}/>
          <p className="w-[400px] m-auto mt-3  text-xl font-light text-neutral-500">
            We survey all or clients,the results of which of which go directly
            to our CEO
          </p>
        </div>
        <div className="w-full h-full mt-5 relative">
          <SwiperCard />
          <button className="absolute top-52 left-10 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-md text-gray-700 rounded-full p-4 shadow-lg hover:bg-opacity-50 transition">
            <MdArrowBackIos size={24} />
          </button>

          <button className="absolute top-52 right-10  transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-md text-gray-700 rounded-full p-4 shadow-lg hover:bg-opacity-50 transition">
            <MdArrowForwardIos size={24} />
          </button>
        </div>
      </section>
    </>
  );
}
export default ContentSegment;
