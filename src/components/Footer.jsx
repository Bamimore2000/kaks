import { socialLinks } from "@/app/lib/data";
import { MdArrowOutward } from "react-icons/md";
import OurServices from "./OurServices";
import UsefulLinks from "./UsefulLinks";

const Footer = () => {
  return (
    <footer className=" mx-auto bg-[#231600] ">
      <div className="footer-wrapper mx-auto py-12  ">
        <div className="kaks-socials flex flex-col gap-4 max-w-[1300px] w-[92%] mx-auto md:flex-row md:items-center ">
          <h3 className="text-white text-2xl">Kaks</h3>
          <div className="links flex items-center gap-2 text-white">
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.link}
                  className="flex gap-1 items-center text-[#f5f5f5]"
                  href={link.link}
                  target="_blank"
                >
                  <span className="font-thin text-sm">{link.name}</span>
                  <MdArrowOutward color="white" size={12} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-items relative pt-6 pb-6 mt-4 grid max-w-[1300px] mx-auto w-[98%] grid-cols-2 md:grid-cols-3 text-white">
          <div className="left-0 absolute bg-[#fbfbfb] opacity-40 w-px -top-2 -bottom-2 "></div>
          <div className="col-start-2 hidden md:block absolute bg-[#fbfbfb] opacity-40 w-[0.5px] top-0 bottom-0 "></div>
          <div className="col-start-3 hidden md:block absolute opacity-40 bg-[#fbfbfb] w-[0.5px] top-0 bottom-0 "></div>
          <div className="right-0 absolute bg-[#fbfbfb] opacity-40 w-px -top-2 -bottom-2 "></div>
          <div className="top-0 absolute -left-1 -right-1 opacity-40 h-px bg-[#fbfbfb]"></div>
          <div className="bottom-0 absolute -left-1 -right-1 opacity-40 h-px bg-[#fbfbfb]"></div>
          <div className="get-things-done py-4 px-4 md:px-8 md:py-8">
            <div className="done">
              <h3 className="text-2xl md:text-4xl mb-6 font-semibold">
                We get <br className="md:hidden" /> things done!
              </h3>
              <div className="address-phone text-[12px] md:text-sm flex flex-col gap-7">
                <div className="first flex flex-col text-[#A8A8A8] gap-4">
                  <div className="address font-semi-bold  flex gap-1 items-center">
                    <a
                      href="https://maps.app.goo.gl/eayQwUUggVaUgN2E8"
                      className="first underline tracking-wide"
                    >
                      28, County Estate, Pen Cinema, <br /> Ogba Ikeja, Lagos,
                      Nigeria
                    </a>
                    <MdArrowOutward size={14} />
                  </div>
                  <div className="phone-email font-semi-bold flex gap-1 items-center">
                    <div className="first underline">
                      <a className="phone block" href="tel:2348161179370">
                        Phone: +2348161179370
                      </a>
                      <a className="email" href="mailto:md@kaksgroup.com">
                        Email:md@kaksgroup.com
                      </a>
                    </div>
                    <MdArrowOutward size={14} />
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
        <div className="other-info  text-[#A8A8A8] max-w-[1300px] mx-auto w-[98%] mt-5 text-xs">
          <h5>Kaks &copy; 2024</h5>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
