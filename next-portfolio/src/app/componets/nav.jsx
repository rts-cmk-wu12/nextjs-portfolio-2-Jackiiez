import Link from "next/link";
import { FaLinkedin, FaRegEye } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Nav() {
  return (
    <nav className="bg-[#1B1B1B] p-4">
      <div className="grid grid-cols-6">
        <div className="col-span-3 flex justify-start space-x-4">
          <Link href="/">
            <p className="text-white hover:text-[#62BA1B] cursor-pointer">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white hover:text-[#62BA1B] cursor-pointer">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-white hover:text-[#62BA1B] cursor-pointer">Contact</p>
          </Link>
        </div>


        <div className="col-span-3 flex justify-end space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-[#62BA1B]" size={24} />
          </a>
          <a href="https://www.bereal.com" target="_blank" rel="noopener noreferrer">
            <FaRegEye className="text-white hover:text-[#62BA1B]" size={24} />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <SiX className="text-white hover:text-[#62BA1B]" size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}