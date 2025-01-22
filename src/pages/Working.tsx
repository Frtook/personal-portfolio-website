import { FaUber } from "react-icons/fa";
import { SiGojek } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
export default function Working() {
  return (
    <main className="flex flex-col justify-between gap-10 bg-gray-100 lg:flex-row">
      <div className="flex flex-col items-start gap-10">
        <p className="text-3xl font-bold">Working experience</p>
        <div className="flex justify-center gap-5">
          <FaUber className="size-12" />
          <div>
            <p className="text-2xl">
              product desing at <b className="font-bold">Uber</b>
            </p>
            <p className="text-gray-500 ">Feburay 2018 - Febray 2020</p>
          </div>
        </div>
        <span className="block w-full h-1 bg-slate-300"></span>
        <div className="flex justify-center gap-5">
          <SiGojek className="size-12" />
          <div>
            <p className="text-2xl">
              Senior Product desing at <b className="font-bold">Gojek</b>
            </p>
            <p className="text-gray-500 ">Feburay 2020 - Febray 2023</p>
          </div>
        </div>
        <span className="block w-full h-1 bg-slate-300"></span>
        <div className="flex justify-center gap-5">
          <FaGoogle className="size-12" />
          <div>
            <p className="text-2xl">
              Part time Product desing at <b className="font-bold">Google</b>
            </p>
            <p className="text-gray-500 ">Feburay 2023 - presen</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-10">
        <p className="text-3xl font-bold">Award: Best Designer</p>
        <div className="flex justify-center gap-5">
          <FaUber className="size-12" />
          <div>
            <p className="text-2xl">
              product desing at <b className="font-bold">Uber</b>
            </p>
            <p className="text-gray-500 ">Feburay 2018 - Febray 2020</p>
          </div>
        </div>
        <span className="block w-full h-1 bg-slate-300"></span>
        <div className="flex justify-center gap-5">
          <SiGojek className="size-12" />
          <div>
            <p className="text-2xl">
              Senior Product desing at <b className="font-bold">Gojek</b>
            </p>
            <p className="text-gray-500 ">Feburay 2020 - Febray 2023</p>
          </div>
        </div>
        <span className="block w-full h-1 bg-slate-300"></span>
        <div className="flex justify-center gap-5">
          <FaGoogle className="size-12" />
          <div>
            <p className="text-2xl">
              Part time Product desing at <b className="font-bold">Google</b>
            </p>
            <p className="text-gray-500 ">Feburay 2023 - presen</p>
          </div>
        </div>
      </div>
    </main>
  );
}
