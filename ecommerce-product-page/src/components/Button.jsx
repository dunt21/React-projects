export default function Button({ classname, children, onClick }) {
  return (
    <button
      className={`${classname} bg-orange w-full font-bold rounded-lg py-3 text-dark-blue`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
