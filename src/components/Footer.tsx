import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <main className="mb-0 text-white bg-black">
      <div className="flex flex-col items-center gap-8 ">
        <p className="text-4xl font-bold">Portfolio</p>
        <div className="flex flex-wrap gap-5 text-gray-400">
          <p>For designers</p>
          <p>Hire talent</p>
          <p>Inspiration</p>
          <p>Inspiration</p>
          <p>Blog</p>
          <p>About</p>
          <p>About</p>
        </div>
        <div className="flex gap-5">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaGithub />
        </div>
        <p className="text-gray-300">@ 2025 Portfolio</p>
      </div>
    </main>
  );
}
