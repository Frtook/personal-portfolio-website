interface Props {
  className: string;
  children: React.ReactNode;
}

export default function Button({ className, children }: Props) {
  if (className === "light") {
    className = "text-gray-500 bg-gray-100 border-gray-400 hover:bg-gray-300";
  }
  if (className === "dark") {
    className = "text-white bg-black hover:bg-black/75";
  }
  return (
    <button
      className={`border py-2 px-4 rounded-2xl transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
