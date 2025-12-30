export default function Button({ classname, children }) {
  return (
    <button
      className={`${classname} bg-orange w-full font-bold rounded-lg py-3 text-dark-blue`}
    >
      {children}
    </button>
  );
}
