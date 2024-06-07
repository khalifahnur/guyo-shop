"use client"
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaHeadphonesAlt, FaSearch, FaUser,  FaShoppingCart } from 'react-icons/fa';
import { IoLogoFacebook,IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";



function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const TOP_OFFSET = 200;

  useEffect(() => {
    const handleScroll = () => {
      //console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const NavbarHandler=()=>{
    setNavbarOpen(!navbarOpen)
    setShowBackground(!showBackground)
  }
    
  return (
    // <nav className={`fixed w-full top-0 left-0 right-0 px-6 py-1 z-40 ${showBackground ? "bg-white border border-[#fff] shadow-md text-white " : "bg-transparent-500 text-black "} bg-opacity-100`}>
    //     <div className='flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2'>
    //         <Link href={'/'} className='text-2xl md:text-2xl font-semibold text-white'>
    //         <Image src='/download.svg' alt='logo' width={118} height={18} className='object-contain' />
    //         </Link>
    //         <div className='mobile-menu block md:hidden'>
    //             {
    //                 !navbarOpen?(
    //                     <button onClick={NavbarHandler} className='flex items-center py-2 px-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
    //                         <Bars3Icon className='h-5 w-5'/>
    //                     </button>
    //                 ):(
    //                     <button onClick={NavbarHandler} className='flex items-center py-2 px-3 border rounded border-black text-black hover:text-[#e8e8e8] hover:border-[#e8e8e8]'>
    //                         <XMarkIcon className='h-5 w-5' />
    //                     </button>
    //                 )
    //             }
    //         </div>
    //         <div className='menu hidden md:block md:w-auto' id='navbar'>
    //             <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0 '>      
    //                 {navLinks.map((item,index)=>(
    //                     <li key={index}>
    //                         <NavLink href={item.path} title={item.title} id={item.id} showBackground  />
    //                     </li>
                        
    //                 ))}
    //             </ul>
    //         </div>
    //     </div>
    //     {navbarOpen && <MenuOverlay Links={navLinks} />}
    // </nav>
    <>
    <div>
    <div className="bg-gray-100 text-sm py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex justify-between items-center gap-5'>
          <span className='py-3 border border-[#c4c4c4]'/>
          <span>Welcome to our online store!</span>
        </div>
        
        <div className="flex space-x-3 items-center">
        <span className='py-2 items-center border border-[#c4c4c4]'/>
          <Link href={"/"}><IoLogoFacebook /></Link>
          <Link href={"/"}><FaTwitter /></Link>
          <Link href={"/"}><FaInstagram /></Link>
          <Link href={"/"}><FaPinterestP /></Link>
          <Link href={"/"}><FaYoutube /></Link>
          <span className='py-2 items-center border border-[#c4c4c4]'/>
        </div>
      </div>
    </div>

    <hr />

    <div className="container mx-auto py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FaHeadphonesAlt className="text-green-600" size={24} />
        <div>
          <span className="text-xs">CALL US</span>
          <p className="text-lg font-bold">+254 71800 3335</p>
        </div>
      </div>
      {/* <div className="text-2xl font-bold">ekommart</div> */}
      <Image src={'/logo.svg'} width={120} height={120} alt='logo' className='cursor-pointer'/>
      <div className="flex items-center space-x-4 cursor-pointer">
        <FaSearch className="text-gray-400" size={18}/>
        <FaUser className="text-gray-400" size={18} />
        <IoIosHeartEmpty className="text-gray-700" size={24}/>
        <div className="relative">
          <MdOutlineShoppingCart className="text-gray-700" size={24} />
          <span className="absolute -top-3.5 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
        </div>
        <span>Ksh.0.00</span>
      </div>
    </div>
    </div>
    <hr />
    <header className={`w-full top-0 left-0 right-0 px-6 py-1 z-40 transition-all duration-300 ${showBackground ? "bg-white border rounded-lg border-[#fff] shadow-lg border-b fixed " : "bg-transparent-500 text-black "}`}>
    <nav className=" py-4 flex justify-center space-x-6  bg-white  ">
      <Link href={"/"} className="text-green-600">Home</Link>
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Shop</Link>
      <Link href={"/"}>Blog</Link>
      <Link href={"/"}>Pages</Link>
      <Link href={"/"}>Contact</Link>
    </nav>
  </header>
  </>
  )
}

export default Navbar