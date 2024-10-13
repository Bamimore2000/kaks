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
    <section id="About" className="section-name py-12">
      <div className="first-description w-[92%] max-w-[1300px] mx-auto">
        <h3
          style={{
            textAlign: "left",
          }}
          className="my-6 text-[#A8A8A8] text-[16px] font-mono"
        >
          About
        </h3>
      </div>
      <div className="items-text flex flex-col md:flex-row w-[92%] max-w-[1300px] mx-auto">
        <div className="text">
          <h4 className="font-bold text-2xl leading-6 xmd:text-3xl">
            What are <br className="md:hidden" /> we all{" "}
            <br className="hidden md:block" /> about?
          </h4>
          <p className="text-[#545454] text-base  font-semibold md:mt-3 mt-2 tracking-tight">
            Here is what some of our clients have to say about Kaks Multiprofile
            Services. – and more time running your business.
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
                  className="flex flex-col gap-y-4 px-2 py-10 md:p-6 lg:p-8 xl:p-12"
                >
                  <Image
                    height={32}
                    width={32}
                    src={about.icon}
                    alt={about.heading}
                  />
                  <div>
                    <h3 className="text-lg font-bold">{about.heading}</h3>
                    <p className="mt-1 text-[13px] leading-[22px] tracking-[0.01em] ">
                      {about.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Book className="mt-4 md:ml-6 lg:ml-8 xl:ml-12" />
        </div>
      </div>

      <div className="meet-details md:items-center md:py-8 mt-12 flex flex-col md:flex-row gap-y-5 w-[92%] max-w-[1300px] mx-auto">
        <div className="first-col md:max-w-[35%]">
          <h4 className="mb-4 text-xl italic font-medium md:text2xl">
            Meet the CEO
          </h4>
          <h5 className="text-lg md:text-xl font-medium">Arikawe Oladipupo</h5>
          <p className="text-gray-600 mb-2">
            Creative, vibrant and Intelligent.
          </p>
          <div className="image-container w-screen relative left-1/2 md:hidden -translate-x-1/2 xmd:h-[350px] sm:h-[420px] h-[300px]">
            <Image
              height={500}
              width={500}
              quality={60}
              className="w-full h-full object-cover"
              src="https://utfs.io/f/gzs3u2midcSLpLIs4b7xAavRtrduf6gsGeQMOZHwyp5lkjPm"
            />
          </div>
          <p className="text-sm text-gray-700 mt-3 md:text-xs">
            Arikawe Oladipupo is a seasoned general contractor with over 15
            years of experience in the construction industry. Specializing in
            both residential and commercial projects, John has built a
            reputation for delivering high-quality craftsmanship with a keen eye
            for detail.
          </p>
          <ConnectBtn className="my-4 md:mt-4" />

          {/* <ConnectBtn className="mt-2 hidden md:block" /> */}
        </div>
        <div className="image-container w-full hidden md:flex md:justify-end ">
          <div className="max-w-[450px]  w-full h-[350px]">
            <Image
              height={500}
              width={500}
              quality={60}
              className="w-full h-full object-cover select-none"
              src="https://utfs.io/f/gzs3u2midcSLpLIs4b7xAavRtrduf6gsGeQMOZHwyp5lkjPm"
            />
          </div>
        </div>
      </div>
      <div className="carousel w-[92%] max-w-[1300px] mx-auto">
        <h4 className="mb-4 text-xl italic font-medium md:text2xl">
          Staffs on Duty
        </h4>
      </div>
      <AboutCarousel slides={aboutImages} options={OPTIONS} />
      <Testimonials />
    </section>
  );
};
export default About;
