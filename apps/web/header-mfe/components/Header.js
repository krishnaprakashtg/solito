import Image from "next/image" 
import 'tailwindcss/tailwind.css';
const Header = () => {
  return (
    <header>
        <div className="relative flex flex-col md:flex-row justify-center items-center bg-themered p-3 text-white">
        <span className="text-sm static md:absolute top-0 bottom-0 right-3 flex items-center">
                <a className="mr-2 hidden sm:block" href="#">Enable Accessibility</a>
                <Image src="http://localhost:3001/accessibility.svg" alt="accessibility" width={26} height={26} />
            </span>
            <h6 className="text-sm text-center mt-3 md:mt-0">WOW DAYS are back! Save up to 40% off* the best tech, home, toys & more!<a className="ms-2 font-bold" href="#">Shop Now</a></h6>
        </div>
        <div className="mx-auto w-[90%] max-w-[1440px]">
            <div className="align-center flex flex-wrap py-6 items-center justify-start">
                <div className="order-1 justify-center mb-3 md:mb-0 md:justify-start flex-1 md:flex-initial flex"><a className="logo" href="/" aria-label="bjs Logo">
                    <Image className="min-w-[58px]" src="http://localhost:3001/logo.svg" alt="bjs-logo" width={58} height={49} />
                </a></div>
                <nav className="mx-8 hidden sm:block order-2 flex-auto1" aria-label="Main Navigation">
                    <ul className="flex">
                        <li className="mr-3 font-bold"><a href="#home" aria-current="page">Categories</a></li>
                        <li className="font-bold"><a href="#home" aria-current="page">Deals &amp; Coupons</a></li>
                    </ul>
                </nav>
                <div className="flex relative flex-auto order-4 md:order-3 mt-3 md:mt-0">
                    <input className="flex-auto rounded-full border border-solid border-[#999] px-4 py-2" type="text" name="search" />
                    <button className="cursor-pointer border-l border-l-solid border-[#999] absolute ps-2 right-4 top-0 bottom-0">
                      <i className="material-icons cursor-pointer">search</i>
                    </button>
                </div>
                <div className="flex basis-full md:basis-auto flex-auto w-full md:w-auto flex-grow cursor-pointer gap-4 justify-center md:justify-end m-0 md:ms-auto order-3 md:order-4">
                    <a>Buy it again</a>
                    <div className="flex gap-4">
                        <a className="flex">
                          <Image className="mr-2" src="http://localhost:3001/signin.svg" alt="signin" width={24} height={24} />
                          Sign In
                        </a>
                        <a>Join  today</a>
                    </div>
                    <a>
                      <Image src="http://localhost:3001/cart.svg" alt="signin" width={21} height={21} />
                    </a>
                </div>
            </div>
        </div>
    </header> 
  )
}

export default Header