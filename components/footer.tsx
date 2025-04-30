import Image from "next/image";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";



const ownerEmail = "rahul7926963@gmail.com"; // Replace with the actual email
export const Footer = () => {
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto relative">
      {/* Background Image */}
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-[999] mt-16 flex flex-col items-center justify-center">
        
        {/* Big Line Above Copyright */}
        <div className="w-full max-w-4xl h-1 bg-gray-300 mb-6 md:mb-12"></div> {/* Added max-width for alignment */}

        {/* Copyright Text */}
        <p className="text-sm font-light md:text-base md:font-normal text-center">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href={`mailto:${ownerEmail}?subject=&body=`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple hover:underline"
          >
            Rahul
          </Link>{" "}
          All Rights Reserved |{" "}
          <Link href="tel:+9779822228722" className="underline">
            <IoCallOutline className="inline-block mr-2" />
            Call
          </Link>
        </p>
      </div>
    </footer>
  );
};
