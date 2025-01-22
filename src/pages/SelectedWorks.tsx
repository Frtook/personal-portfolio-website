import Button from "../components/Button";

export default function SelectedWorks() {
  return (
    <main>
      <p className="text-4xl font-bold">Seleced Works</p>
      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
        <div className="p-5 bg-gray-100 rounded-xl">
          <img src="src/assets/images/img1.webp" alt="" />
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
          <img src="../assets/images/img1.webp" alt="" />
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
          <img src="../assets/images/img3.webp" alt="" />
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
          <img src="../assets/images/img4.webp" alt="" />
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
