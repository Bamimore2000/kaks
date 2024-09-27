import { sectionsName } from "@/app/lib/data";

const ImageHeader = ({ current, setCurrent }) => {
  return (
    <div className="w-[95%] flex justify-between mb-12 mx-auto max-w-lg md:px-3 shadow-gray-500/20 shadow-lg rounded-md h-[3.4rem] p-2 ">
      {sectionsName.map((section, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setCurrent(section.name);
            }}
            style={{
              backgroundColor: current === section.name ? "black" : "white",
              color: current === section.name ? "white" : "black",
            }}
            className="text-center select-none bg-black/80 text-[14px] md:text-[16px] grid place-items-center cursor-pointer mix-blend-difference p-2 text-black rounded-sm"
          >
            {section.name}
          </div>
        );
      })}
    </div>
  );
};
export default ImageHeader;
