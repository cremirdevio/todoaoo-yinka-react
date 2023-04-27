/* eslint-disable react/prop-types */
export default function Badge({ children, isActive }) {
  const className = isActive
    ? "border-[1px] text-gray-900"
    : "border-[0px] text-gray-600";

  return (
    <div
      className={`${className} cursor-pointer border-gray-500 px-2 rounded-sm  text-xs`}
    >
      {children}
    </div>
  );
}
