import { abouts, imageData } from "@/app/lib/data";
import Image from "next/image";
import Book from "./Book";
import { twMerge } from "tailwind-merge";
import ConnectBtn from "./ConnectBtn";
import AboutCarousel from "./AboutCarousel";
import Testimonials from "./Testimonials";
const About = () => {
  const OPTIONS = { loop: true };
  return (
    <section className="section-name w-[92%] max-w-[1300px] mx-auto">
      <div className="first-description">
        <h3
          style={{
            textAlign: "left",
          }}
          className="mt-6 section-header"
        >
          About us
        </h3>
        <p className="font-semi-bold text-[16px] mb-6">
          Here is what some of our clients have to say about Kaks Multiprofile
          Services. – and more time running your business.
        </p>
      </div>

      <div className="details grid relative md:grid-cols-3">
        <>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div
                key={index}
                style={{
                  gridRowStart: index + 2,
                }}
                className={twMerge(
                  `lines absolute -left-4 -right-4 top-[-0.5px]  h-px bg-black/20 md:hidden`
                )}
              ></div>
            );
          })}
          {/* mobile top line */}
          <div className="absolute -left-4 -right-4 top-0 h-px bg-black/20 md:hidden"></div>
          <div className="absolute -left-4 -right-4 bottom-0 row-start-4 h-px bg-black/20 md:hidden"></div>
          <div className="absolute -left-2 -top-2 -bottom-2 w-px bg-black/20 md:hidden"></div>
          <div className="absolute -right-2 -top-2 -bottom-2 w-px bg-black/20 md:hidden"></div>

          {/* map out all the inner crosses */}
          <div className="absolute left-0 hidden -top-2 -bottom-2 w-px bg-black/20 md:block"></div>
          <div className="absolute right-0 hidden -top-2 -bottom-2 w-px bg-black/20 md:block"></div>
          <div className="absolute -left-4 hidden -right-4 top-0 h-px bg-black/20 md:block"></div>
          <div className="absolute -left-4 hidden -right-4 bottom-0 h-px bg-black/20 md:block"></div>
          <div className="absolute left-0 right-0 hidden row-start-2 top-[-0.5px]  h-px bg-black/20 md:block"></div>
          <div className="absolute top-0 bottom-0 hidden col-start-2   w-px bg-black/20 md:block"></div>
          <div className="absolute top-0 bottom-0 hidden col-start-3   w-px bg-black/20 md:block"></div>

          {/* mapping out all details */}
          {abouts.map((about, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8 xl:p-12"
              >
                <Image
                  height={32}
                  width={24}
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
        </>
      </div>
      <Book className="w-max mt-8" />
      <div className="meet-details mt-12 flex md:items-center flex-col md:flex-row md:justify-between gap-y-5">
        <div className="first-col md:flex-auto">
          <h4 className="mb-4 text-xl italic font-medium md:text2xl">
            Meet the CEO & staffs on duty
          </h4>
          <h5 className="text-lg md:text-xl font-medium">Arikawe Oladipupo</h5>
          <p className="text-gray-600">Creative, vibrant and Intelligent.</p>
          <ConnectBtn className="mt-2 hidden md:block" />
        </div>
        <div className="second-col flex justify-end flex-1">
          <p className="text-sm text-gray-700 md:text-xs">
            Arikawe Oladipupo is a seasoned general contractor with over 15
            years of experience in the construction industry. Specializing in
            both residential and commercial projects, John has built a
            reputation for delivering high-quality craftsmanship with a keen eye
            for detail.
          </p>
        </div>
        <ConnectBtn className="mt-2 md:hidden" />
      </div>
      <AboutCarousel slides={imageData} options={OPTIONS} />
      <Testimonials />
    </section>
  );
};
export default About;
