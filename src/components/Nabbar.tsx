import { useState } from "react";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
export default function Nabbar() {
  const [time, setTime] = useState("");
  const [mobile, setMobile] = useState(false);
  setTimeout(() => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    setTime(`${hours}:${minutes}:${seconds}`);
  }, 1000);

  return (
    <main className="flex items-center justify-between m-auto">
      <img
        className="size-12 md:size-10"
        src="../assets/react.svg"
        alt="logo"
      />
      <div className="flex flex-col items-center px-10 mr-auto text-2xl lg:hidden">
        <p className="text-gray-500">Yemen, Mukallah</p>
        <p>{time}</p>
      </div>
      <FaBars
        onClick={() => setMobile(!mobile)}
        className="flex cursor-pointer size-12 lg:hidden"
      />

      {mobile && (
        <div className="rounded-xl absolute text-3xl left-0 right-0 top-[125px] flex flex-col items-center gap-5 p-10 bg-black/80 lg:hidden">
          <div className="flex flex-col items-center gap-5 p-4 ">
            <p className="w-full p-4 text-center bg-white cursor-pointer rounded-xl">
              About me
            </p>
            <p className="w-full p-4 text-center bg-white cursor-pointer rounded-xl">
              Working experience
            </p>
            <p className="w-full p-4 text-center bg-white cursor-pointer rounded-xl">
              Case Studies
            </p>
            <p className="w-full p-4 text-center bg-white cursor-pointer rounded-xl">
              Help
            </p>
          </div>

          <div className="flex gap-5 ">
            <Button className="light">Slot Booked</Button>
            <Button className="dark">+</Button>
          </div>
        </div>
      )}
      <div className="items-center hidden gap-5 lg:flex">
        <p>About me</p>
        <p>Working experience</p>
        <p>Case Studies</p>
        <p>Help</p>
      </div>
      <div className="flex-col items-center hidden lg:flex ">
        <p className="text-gray-500">Yemen, Mukallah</p>
        <p>{time}</p>
      </div>
      <div className="hidden gap-5 lg:flex">
        <Button className="light">Slot Booked</Button>
        <Button className="dark">+</Button>
      </div>
    </main>
  );
}
