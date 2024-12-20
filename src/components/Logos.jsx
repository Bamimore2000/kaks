const Logos = () => {
  return (
    <section className="logo-sections">
      <div className="sections-wrapper md:text-center mx-auto w-[92%] max-w-[1300px]">
        <h5 className="mt-6 mb-5 text-[#A8A8A8] text-[10px] md:text-[14px] font-mono">
          Happy clients we have worked with
        </h5>
        <h4 className="font-semibold md:text-[24px] leading-6 mb-8 text-black text-[19px]">
          Few of the organizations <br /> we have constructed for 
        </h4>
        <div className="images mb-5 md:hidden">
          <img
            className="mx-auto w-full cursor-pointer"
            src="https://utfs.io/f/gzs3u2midcSLDcGd9gUfYUEoHQBvSdjZkyT1g59F7Oa8Gsph"
            alt="logo images"
          />
        </div>
        <div className="images hidden md:block mb-8 max-w-[768px] mx-auto">
          <div className="image-wrapper">
            <img
              className="cursor-pointer"
              src="https://utfs.io/f/gzs3u2midcSLDvlSwX2UfYUEoHQBvSdjZkyT1g59F7Oa8Gsp"
              alt="logo-images"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Logos;
