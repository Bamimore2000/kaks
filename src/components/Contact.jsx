import { contactCards } from "@/app/lib/data";
import ContactCards from "./ContactCards";

const Contact = () => {
  return (
    <section className="w-[92%] max-w-[1300px] py-10 mx-auto">
      <div className="contact-text mb-10">
        <h2 className="section-header">Contact</h2>
        <h4 className="text-center ">
          {" "}
          Give us a call or send us an email and we will get back to you as soon
          as possible
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1240967234717!2d3.3197331749479977!3d6.631505821898934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9141df0fa75b%3A0xb826db542f52c56!2s28%20County%20Estate%2C%20Ifako%20Agege%2C%20Lagos%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1727822674983!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;
