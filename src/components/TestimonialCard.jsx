const TestimonialCard = ({ name, role, comment }) => {
  return (
    <article className="cursor-pointer bg-[#141414] testimonial-card p-6 md:p-8 break-inside-avoid my-2 xmd:my-3 xmd:mx-3 ">
      <h5 className="font-semibold text-[#fdfdfd]">{name}</h5>
      <span className=" text-xs block mb-3 text-[#e0e0e0]">{role}</span>

      <p className="text-[#eeeeee]">{comment}</p>
    </article>
  );
};
export default TestimonialCard;
