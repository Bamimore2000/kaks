import { contactCards } from "@/app/lib/data";
import ContactCards from "./ContactCards";

const Contact = () => {
  return (
    <section className="py-10 border-none  bg-[#141414]">
      <div className="content-wrapper mx-auto border-none w-[92%] max-w-[1300px]">
        <div className="contact-text mb-10">
          <h2 className="section-header text-[#FDFDFD]">Contact</h2>
          <h4 className="text-center max-w-[400px] mx-auto text-[#D1D1D1]">
            {" "}
            Give us a call or send us an email and we will get back to you as
            soon as possible
          </h4>
        </div>

        <div className="adresses-map flex flex-col md:flex-row md:gap-x-6 max-w-[1024px] mx-auto">
          <div className="cards flex flex-col gap-y-3 mb-6 md:mb-0">
            {contactCards.map((card) => {
              return <ContactCards key={card.text} {...card} />;
            })}
          </div>
          <div className="map flex-auto h-[400px] md:h-auto max-w-[100%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3963.1264844918196!2d3.3205714750294564!3d6.6312088933631586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s28%2C%20County%20Estate%2C%20Pen%20Cinema%2C%20%3Cbr%20%2F%3E%20Ogba%20Ikeja%2C%20Lagos%2C%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Nigeria!5e0!3m2!1sen!2sng!4v1728423603296!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
