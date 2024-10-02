const Message = () => {
  return (
    <section className="py-12 max-w-[1200px] w-[92%] mx-auto">
      <div className="information mx-auto max-w-[640px]">
        <h2 className="section-header ">Send a Message</h2>
        <form className="contact-form mt-6" action="">
          <input
            className="w-full outline-none input  border border-[#7d7d7d] border-solid"
            placeholder="Your Name"
            type="text"
          />
          <input className="w-full" placeholder="Your Email" type="email" />
          <input className="w-full" placeholder="Subject" type="text" />
          <textarea
            placeholder="Message"
            className="w-full resize-none"
            aria-expanded="false"
            name=""
            id=""
            cols="20"
            rows="5"
          ></textarea>
          <button
            className="bg-[#FFCB05] w-full text-center py-3 rounded-sm"
            type="submit"
          >
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Message;
