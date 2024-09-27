import { twMerge } from "tailwind-merge";

const ConnectBtn = ({ className }) => {
  return (
    <button
      className={twMerge(
        `px-6 py-1 w-max border-gray-400 hover:bg-black/90 hover:text-white rounded-sm border`,
        className
      )}
    >
      Connect
    </button>
  );
};
export default ConnectBtn;
