import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="py-2 h-fit flex justify-center items-center border-t-2
     border-t-primary text-sm relative"
    >
      {/* <div className="size-14 absolute left-28">
         <Image  className="rounded-full " src={"/logo.svg"} width={600} height={600} alt="Logo Denlam" />
       </div> */}
      <ul className="">
        <li>
          {
            <p>
              &copy; {currentYear} Société Denlâm. Tous droits réservés -{" "}
              <Link className="hover:underline" href={"/terms"}>
                Mentions Légales
              </Link>
              .
            </p>
          }
        </li>
        <li>
          <Link href={"/"}>
            <FaInstagram className="size-5" />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <FaWhatsapp className="size-5" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
