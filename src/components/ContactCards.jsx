const ContactCards = ({ icon, secondary, link, text }) => {
  return (
    <article className="p-10 md:p-5 text-center md:max-w-[300px] bg-[#F8F8F8] text-[#545454]">
      <span className="mb-3 inline-block">{icon}</span>
      <p>{secondary}</p>
      <a className="underline inline-block max-w-[60%] text-black" href={link}>
        {text}
      </a>
    </article>
  );
};
export default ContactCards;
