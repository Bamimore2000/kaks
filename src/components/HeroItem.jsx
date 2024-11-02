import Image from "next/image";
import Book from "./Book";

const HeroItem = () => {
  return (
    <div className="absolute  inset-0 z-20 grid place-items-center h-full w-full">
      <div class="absolute top-0 left-0 right-0 h-full bg-[#3B2603]/[.07] z-10"></div>
      <div
        style={{
          background:
            " linear-gradient(360deg, #382402 0%, rgba(89, 56, 0, 0.495654) 67.03%, rgba(137, 86, 0, 0) 95.57%)",
        }}
        class="absolute bottom-0 left-0 right-0 h-[70%] z-10"
      ></div>
      {/* <div class="absolute top-0 left-0 right-0 h-full bg-[#3B2603]/[.23] z-30"></div>
      <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b to-[#231600] from-[#895600]/[0] z-20"></div>
      <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b to-[#231600]/[.94] from-[#0D0801]/[0] z-10"></div> */}

      {/* Content wrapper */}
      <div className="content-wrapper w-full relative  h-full grid place-items-center">
        <div className="content-wrapper text-center">
          <div className="wrapper relative w-full mx-auto py-10">
            <div
              style={{
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #231600 99%, transparent 1%)",
                filter: "blur(120px)",
              }}
              className="layer bg-[#231600] absolute inset-0 -z-1"
            ></div>
            <h1 className="text-3xl text-center main-heading w-full mx-auto md:text-5xl relative z-40 font-bold leading-tight text-white">
              {" "}
              <p>
                Expert in Construction <br /> Contracting&nbsp;&&nbsp;Consulting
              </p>
            </h1>
            <p className="text-lg secondary-text w-[90%] text-white z-40 relative md:text-xl leading-6 mt-3 max-w-sm md:max-w-lg mx-auto">
              Elevate Your Business with Our Comprehensive construction services
              on residential, industrial and commercial projects, contractings
              services on government and civil projects and consulting services
              on approvals, designs and ideations of projects
            </p>
          </div>

          <Book
            className="bg-[#FFCB05] z-40 relative hero-book-button gap-1 mt-0 rounded-sm text-[#292929] py-2 px-3 md:px-6 md:py-3 w-[max-content] mx-auto"
            style={{
              boxShadow:
                "0px 0px 53.98px 0px rgba(255, 255, 255, 0.5), 0px 2.43px 53.98px 0px rgba(255, 203, 5, 0.19), 0px 2.43px 10.8px 0px rgba(255, 228, 124, 0.41)",
            }}
          />
          {/* <div className="lower-details absolute bottom-5 left-1/2 -translate-x-1/2 text-white">
            <p className="tracking-normal text-[0.625rem]">
              {" "}
              Kaks have completed constructions for companies like:
            </p>
            <div className="flex  justify-center gap-3 items-center w-full h-[40px] text-white">
              <div className="lagos-state-govt relative h-[1.875rem] w-max">
                <div className="lagos flex flex-col gap-[0.0625rem]">
                  <span className="-mb-1 font-semibold text-[0.8125rem] leading-none">
                    Lagos state{" "}
                  </span>
                  <span className="m-0 font-semibold text-[0.8125rem] ">
                    Government
                  </span>
                </div>
              </div>
              <div className="dangote-image relative h-[1.875rem] w-[3.125rem] ">
                <Image
                  src="https://utfs.io/f/gzs3u2midcSLM1rksPphnydmgLeiRPlf15UjsCZKEaDkQb62"
                  layout="fill"
                />
              </div>
              <div className="wemmy relative h-[1.875rem] w-[5.62rem]">
                <Image
                  src="https://utfs.io/f/gzs3u2midcSLFHnilYPoXySYe72UCTxD9BO38NRtHkIjzAuf"
                  layout="fill"
                />
              </div>

              <div className="lagos-club flex items-center">
                <div className="lagos-club relative h-[1.875rem] w-[2.5rem]">
                  <Image
                    src="https://utfs.io/f/gzs3u2midcSLIb5XvMfyOY9s3M0PqXxohT8i2QIapwejFC7k"
                    layout="fill"
                  />
                </div>
                <span className="font-semibold text-[0.8125rem] leading-none">
                  Lagos <br /> Club
                </span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default HeroItem;
