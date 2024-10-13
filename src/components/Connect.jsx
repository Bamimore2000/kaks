import { connect } from "@/app/lib/data";
import Link from "next/link";
import ContactCard from "./ContactCard";

const Connect = () => {
  return (
    <div className="contact-wrapper mx-auto py-3 mt-4 md:mt-0 md:pb-3 md:py-0 px-3 md:w-[30vw] md:max-w-[300px] md:px-1 h-full w-[100%]">
      <h1 className="text-[18px] md:text-[14px] md:pb-2 font-bold py-2 md:py-0 border-b px-4">
        Connect
      </h1>
      <div className="links flex flex-col gap-3 md:gap-2 px-4 md:px-2 mt-6 md:mt-4">
        {connect.map((contact, index) => {
          return <ContactCard key={index} {...contact} />;
        })}
      </div>
    </div>
  );
};
export default Connect;
