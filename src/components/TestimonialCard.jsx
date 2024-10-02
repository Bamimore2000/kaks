const TestimonialCard = ({ name, role, comment }) => {
  return (
    <article className="shadow-sm cursor-pointer hover:shadow-md  shadow-black/40 rounded-md p-4 md:p-8 break-inside-avoid my-2 xmd:my-3 xmd:mx-3 ">
      <h5 className="font-semibold">{name}</h5>
      <span className="text-gray-500 text-xs">{role}</span>

      <p>{comment}</p>
    </article>
  );
};
export default TestimonialCard;
