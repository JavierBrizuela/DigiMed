import logo from "../assets/Logo1.png";
import logoSVG from "../assets/logo.svg";
import { HamburgerMenu } from "./HamburgerMenu";
import menuLogo from "../assets/iconamoon_menu-burger-horizontal-bold.svg"

export function Navbar2() {
  return (
    <div className="flex items-center  md:bg-destacar mb-[6rem] h-[5.625rem] w-full md:ml-20 mr-[rem] md:relative justify-between md:justify-end">
      <div className=" w-[6.2rem] h-[6.2rem] mt-10 md:w-[10.3rem] md:h-[10.3rem] md:absolute lg:-left-20 lg:-top-4 md:-mt-1 md:ml-10">
        <img src={logoSVG} alt="" className="" />
      </div>

      <div className=" hidden  md:flex gap-[2.375rem] justify-end  items-center mr-36">
        <a href="/#">Home</a>
        <a href="#">Nosotros</a>
        <a href="/servicios">Servicios</a>
        <a href="#">Contacto</a>
      </div>
      <div className="px-5 md:hidden" >
        <button className="cursor-pointer px-[0.75rem] py-[0.90rem] bg-blue-500 rounded-lg">

        <HamburgerMenu/>
        </button>
        
        
      </div>
    </div>
  );
}
