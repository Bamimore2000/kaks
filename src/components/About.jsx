import { abouts, imageData } from "@/app/lib/data";
import Image from "next/image";
import Book from "./Book";
import { twMerge } from "tailwind-merge";
import ConnectBtn from "./ConnectBtn";
import { aboutImages } from "../app/lib/data";
import AboutCarousel from "./AboutCarousel";
import Testimonials from "./Testimonials";
const About = () => {
  const OPTIONS = { loop: true };
  return (
    <section id="About" className="section-name py-12 bg-[#141414]">
      <div className="first-description w-[92%] max-w-[1300px] mx-auto">
        {/* <h3
          style={{
            textAlign: "left",
          }}
          className="my-6 text-[#FDFDFD] text-[16px] font-mono"
        >
          About
        </h3> */}
      </div>
      <div className="items-text flex flex-col md:flex-row w-[92%] max-w-[1300px] mx-auto">
        <div className="text">
          <h4 className="font-semibold text-2xl text-[#FDFDFD] leading-6 xmd:text-3xl">
            What are <br className="md:hidden" /> we all{" "}
            <br className="hidden md:block" /> about?
          </h4>
          <p className="text-[#DEDEDE] text-[14px] font-medium md:mt-3 mt-2 tracking-tight">
            At Kaks, we build with purpose and precision. As experts in general
            contracting, construction, water engineering, and real estate
            consulting.
          </p>
        </div>
        <div className="information">
          <div className="details grid relative md:grid-cols-2 ">
            {/* mobile top line */}
            {/* mapping out all details */}
            {abouts.map((about, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-y-4 py-8 md:p-6 lg:p-8 xl:p-12"
                >
                  <Image
                    height={32}
                    width={32}
                    src={about.icon}
                    alt={about.heading}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#DEDEDE]">
                      {about.heading}
                    </h3>
                    <p className="mt-1 text-[14px] text-[#B1B1B1] leading-[22px] tracking-[0.01em] ">
                      {about.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Book className="mt-4 md:ml-6 lg:ml-8 xl:ml-12 text-[#141414] bg-[#FDFDFD]" />
        </div>
      </div>

      <div className="meet-details md:items-center md:py-8 mt-12 flex flex-col md:flex-row gap-y-5 w-[92%] max-w-[1300px] mx-auto">
        <div className="first-col md:max-w-[35%]">
          <h4 className="mb-4 text-xl text-[20px] italic font-medium md:text-[40px] text-[#FDFDFD]">
            Meet the CEO
          </h4>
          <h5 className="text-[18px] text-[#FAFAFA] md:text-[33px] font-medium">
            Oladipupo Arikawe
          </h5>
          <p className=" mb-2 text-[14px] md:text-[26px] text-[#B4B4B4]">
            Creative, vibrant and Intelligent.
          </p>
          <div className="image-container w-screen relative left-1/2 md:hidden -translate-x-1/2 xmd:h-[420px] sm:h-[450px] h-[400px]">
            <Image
              height={500}
              width={500}
              quality={60}
              className="w-full h-full object-cover"
              src="https://utfs.io/f/gzs3u2midcSLuMkbZ1WOWwrxsTXIb761HcjvGLko2helnA3z"
            />
          </div>
          <p className=" mt-3 text-[14px] md:text-[20px] text-[#DEDEDE]">
            Oladipupo Arikawe is a seasoned general contractor with over 15
            years of experience in the construction industry. Specializing in
            both residential and commercial projects, Oladipupo has built a
            reputation for delivering high-quality craftsmanship with a keen eye
            for detail.
          </p>
          <ConnectBtn className="mt-4 w-[137px] h-[39px] md:w-[182px] md:h-[59px] border-[#F0F0F0] text-[#F0F0F0] mb-10 md:mt-4 md:mb-4" />

          {/* <ConnectBtn className="mt-2 hidden md:block" /> */}
        </div>
        <div className="image-container w-full hidden md:flex md:justify-end ">
          <div className="max-w-[550px]  w-full h-[450px]">
            <Image
              height={500}
              width={500}
              quality={60}
              className="w-full h-full object-cover select-none"
              src="https://utfs.io/f/gzs3u2midcSLuMkbZ1WOWwrxsTXIb761HcjvGLko2helnA3z"
            />
          </div>
        </div>
      </div>
      <div className="carousel w-[92%] max-w-[1300px] mx-auto">
        <h4 className="mb-4 text-xl italic font-medium md:text2xl text-[#FDFDFD]">
          Staffs on Duty
        </h4>
      </div>
      <AboutCarousel slides={aboutImages} options={OPTIONS} />
      <Testimonials />
    </section>
  );
};
export default About;
