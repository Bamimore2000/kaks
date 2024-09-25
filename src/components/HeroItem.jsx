import Image from "next/image";
import Book from "./Book";

const HeroItem = () => {
  return (
    <div className="absolute inset-0 z-20 grid place-items-center h-full w-full">
      {/* This is your background image component */}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#91661c]"></div>

      {/* Content wrapper */}
      <div className="content-wrapper w-full relative z-5  h-full grid place-items-center">
        <div className="content-wrapper text-center ">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            {" "}
            Expert in Construction <br /> Contracting & Consulting
          </h1>
          <p className="text-lg text-white md:text-xl mt-4 max-w-sm md:max-w-lg mx-auto">
            Elevate your business with our construction, contracting, and
            consulting services across residential, industrial, commercial, and
            government projects
          </p>
          <Book className="bg-[#FFCB05] gap-1 mt-6 shadow-lg shadow-yellow-500 rounded-sm text-black py-3 px-6 w-[max-content] mx-auto" />
          <div className="lower-details absolute bottom-5 left-1/2 -translate-x-1/2 text-white">
            <p className="tracking-normal text-[10px]">
              {" "}
              Kaks have completed constructions for companies like:
            </p>
            <div className="flex justify-center gap-3 items-center w-full h-[40px] text-white">
              <div className="lagos-state-govt relative h-[30px] w-max">
                <div className="lagos flex flex-col gap-[1px]">
                  <span className="-mb-1 font-semibold text-[13px] leading-none">
                    Lagos state{" "}
                  </span>
                  <span className="m-0 font-semibold text-[13px] ">
                    Government
                  </span>
                </div>
              </div>
              <div className="dangote-image relative h-[30px] w-[50px] ">
                <Image
                  src="https://utfs.io/f/gzs3u2midcSLM1rksPphnydmgLeiRPlf15UjsCZKEaDkQb62"
                  layout="fill"
                />
              </div>
              <div className="wemmy relative h-[30px] w-[90px]">
                <Image
                  src="https://utfs.io/f/gzs3u2midcSLFHnilYPoXySYe72UCTxD9BO38NRtHkIjzAuf"
                  layout="fill"
                />
              </div>

              <div className="lagos-club flex items-center">
                <div className="lagos-club relative h-[30px] w-[40px]">
                  <Image
                    src="https://utfs.io/f/gzs3u2midcSLIb5XvMfyOY9s3M0PqXxohT8i2QIapwejFC7k"
                    layout="fill"
                  />
                </div>
                <span className="font-semibold text-[13px] leading-none">
                  Lagos <br /> Club
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default HeroItem;
