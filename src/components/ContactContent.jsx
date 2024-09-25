import { contacts } from "@/app/lib/data";
import Link from "next/link";
import ContactCard from "./ContactCard";

const ContactContent = () => {
  return (
    <div className="contact-wrapper mx-auto py-3 mt-4 h-full w-[100%]">
      <h1 className="text-[20px] font-bold py-2 border-b px-4">Intro Call</h1>
      <div className="links flex flex-col gap-3 px-4 mt-6">
        {contacts.map((contact, index) => {
          return <ContactCard key={index} {...contact} />;
        })}
      </div>
    </div>
  );
};
export default ContactContent;
