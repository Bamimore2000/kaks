import { FaGreaterThan } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const FaqCard = ({ question, answer, setCurrent, current, index }) => {
  return (
    <article
      style={{
        transition: "all 300ms ease",
      }}
      className="bg-[#292929] text-left text-[14px] md:text-base md:py-6 md:px-4 text-white py-4 px-4 my-2"
    >
      <div
        onClick={() => {
          setCurrent((prev) => (prev === index ? "" : index));
        }}
        className="question-arrow flex justify-between items-center"
      >
        <span className="question">{question}</span>
        <span
          className={`icon transition-transform duration-300 ${
            index === current ? "transform rotate-90" : ""
          }`}
        >
          <IoIosArrowForward />
        </span>
      </div>
      <div className="underline"></div>
      <div
        className={`content text-left text-xs  leading-5 tracking-wide transition-all duration-300 ${
          index === current
            ? "max-h-screen opacity-100 mt-3"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {answer}
      </div>
    </article>
  );
};
export default FaqCard;
