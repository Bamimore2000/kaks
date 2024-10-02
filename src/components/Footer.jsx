import { socialLinks } from "@/app/lib/data";
import { MdArrowOutward } from "react-icons/md";
import OurServices from "./OurServices";
import UsefulLinks from "./UsefulLinks";

const Footer = () => {
  return (
    <footer className=" mx-auto bg-[#231600] ">
      <div className="footer-wrapper mx-auto py-12  max-w-[1300px] w-[92%]">
        <div className="kaks-socials flex flex-col gap-4 md:flex-row md:items-center ">
          <h3 className="text-white text-2xl">Kaks</h3>
          <div className="links flex gap-2 text-white">
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.link}
                  className="flex gap-2 text-[#f5f5f5]"
                  href={link.link}
                >
                  <span className="font-thin text-sm">{link.name}</span>
                  <MdArrowOutward />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-items relative pt-6 pb-6 mt-4 grid grid-cols-2 md:grid-cols-3 text-white">
          <div className="left-0 absolute bg-[#fbfbfb] opacity-40 w-px -top-2 -bottom-2 "></div>
          <div className="col-start-2 absolute bg-[#fbfbfb] opacity-40 w-[0.5px] top-0 bottom-0 "></div>
          <div className="col-start-3 hidden md:block absolute opacity-40 bg-[#fbfbfb] w-[0.5px] top-0 bottom-0 "></div>
          <div className="right-0 absolute bg-[#fbfbfb] opacity-40 w-px -top-2 -bottom-2 "></div>
          <div className="top-0 absolute -left-2 -right-2 opacity-40 h-px bg-[#fbfbfb]"></div>
          <div className="bottom-0 absolute -left-2 -right-2 opacity-40 h-px bg-[#fbfbfb]"></div>
          <div className="get-things-done  p-4 md:p-8">
            <div className="done">
              <h3 className="text-2xl md:text-4xl mb-6 font-semibold">
                We get things done!
              </h3>
              <div className="address-phone text-xs md:text-sm flex flex-col gap-7">
                <div className="first flex flex-col text-[#A8A8A8] gap-4">
                  <div className="address font-thin  flex gap-1 items-center">
                    <a
                      href="https://maps.app.goo.gl/yNtfFdcws9xKjd7z9"
                      className="first underline tracking-wide"
                    >
                      46, White house Agiliti Aina road, <br /> Mile 12 Lagos,
                      Nigeria
                    </a>
                    <MdArrowOutward size={20} />
                  </div>
                  <div className="phone-email font-thin flex gap-1 items-center">
                    <div className="first underline">
                      <a className="phone block" href="tel:2348161179370">
                        Phone: +2348161179370
                      </a>
                      <a className="email" href="mailto:md@kaksgroup.com">
                        Email:md@kaksgroup.com
                      </a>
                    </div>
                    <MdArrowOutward size={20} />
                  </div>
                </div>

                <div className="md:hidden">
                  <OurServices />
                </div>
              </div>
            </div>
          </div>
          <div className="useful-links pt-4 md:pt-8 flex justify-center md:items-start">
            <UsefulLinks />
          </div>
          <div className="our-services md:pt-8 hidden justify-center md:flex md:items-start">
            <OurServices />
          </div>
        </div>
        <div className="other-info flex justify-between text-[#A8A8A8] mt-5 text-xs">
          <h5>Kaks &copy; 2024</h5>
          <h5>Based in Nigeria</h5>
          <h5>@Femidesigns</h5>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
