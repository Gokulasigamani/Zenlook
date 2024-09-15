import User from "../images/User.avif"
function SwiperCard() {
  return (
    <>
      <div className="w-[1100px] py-16 flex  m-auto bg-white/10 backdrop-blur-sm rounded-3xl">
        <div className="w-[50%] h-full">
          <div className=" ml-16">
            <h2 className="font-normal text-3xl text-white ">Gymstory</h2>
            <h3 className="bg-clip-text font-bold text-2xl mt-5 text-transparent bg-gradient-to-r from-[#F9B5FB]  to-[#921196]">
              Zenhook Is The Best Digital Agency I've Ever Encountered! Highly
              Recommended!
            </h3>
            <p className="mt-5 leading-7 tracking-wider text-white font-thin">
              I recently engaged Zenhook for a custom web development project,
              and I am thrilled with the outcome. The team effectively brought
              my unique ideas to life, resulting in a website that truly stands
              out.
            </p>
            <h3 className="font-bold mt-5 text-white">Diana Loreza</h3>
            <h4 className="text-white">Director of <span className="font-bold" >GYMSTORY</span></h4>
          </div>
        </div>
        <div className="w-[50%] h-full">
            <img src={User} className="rounded-[50%] w-[350px] h-[350px] ml-28   object-cover " alt="" />
        </div>
      </div>
    </>
  );
}
export default SwiperCard;
