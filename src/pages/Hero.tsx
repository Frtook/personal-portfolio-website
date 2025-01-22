import { FaRegUserCircle } from "react-icons/fa";
import Button from "../components/Button";
export default function Hero() {
  return (
    <main className="flex flex-col gap-20 lg:items-center lg:justify-between lg:flex-row">
      <div className="flex flex-col gap-5">
        <FaRegUserCircle className="size-12" />
        <p className="text-3xl font-bold">Hello! i'm Ibrahim Alnahdi</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className="text-3xl">A Website designer based in Yemen,Mokalla</p>
        <p className="text-gray-500 text-2xl inline`">
          Specialized in building websites using React and Tailwindcss
        </p>
        <div className="flex gap-5 ">
          <Button className="dark">Talk with me</Button>
          <Button className="light">See my work</Button>
        </div>
      </div>
    </main>
  );
}
