import Button from "../components/Button";
//images
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.webp";
export default function SelectedWorks() {
  return (
    <main>
      <p className="text-4xl font-bold">Seleced Works</p>
      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
        <div className="p-5 bg-gray-100 rounded-xl">
          <img src={img1} alt="" />
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-3xl font-bold">Struktura</p>
            <p className="text-2xl">Consturction Company</p>
            <p className="text-gray-500">August 2022</p>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              maxime minima incidunt quam optio quibusdam.
            </p>
            <Button className="dark">View project</Button>
          </div>
        </div>
        <div className="p-5 bg-gray-100 rounded-xl">
          <img src={img2} alt="" />
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-3xl font-bold">Struktura</p>
            <p className="text-2xl">Consturction Company</p>
            <p className="text-gray-500">August 2022</p>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              maxime minima incidunt quam optio quibusdam.
            </p>
            <Button className="dark">View project</Button>
          </div>
        </div>
        <div className="p-5 bg-gray-100 rounded-xl">
          <img src={img3} alt="" />
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-3xl font-bold">Struktura</p>
            <p className="text-2xl">Consturction Company</p>
            <p className="text-gray-500">August 2022</p>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              maxime minima incidunt quam optio quibusdam.
            </p>
            <Button className="dark">View project</Button>
          </div>
        </div>
        <div className="p-5 bg-gray-100 rounded-xl">
          <img src={img4} alt="" />
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-3xl font-bold">Struktura</p>
            <p className="text-2xl">Consturction Company</p>
            <p className="text-gray-500">August 2022</p>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              maxime minima incidunt quam optio quibusdam.
            </p>
            <Button className="dark">View project</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
