import Link from "next/link";

export default function NavBar() {
    return (
        <div>
        <nav className="bg-[#000000] dark:bg-[#000000] w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
            <img src="/logo.png" className="h-10 mr-3" alt="CW"></img>
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Coding Wizards</span> */}
            </Link>
            <div className="flex md:order-2">
            <button type="button" className="text-white bg-[#750F87] hover:bg-[#750F87] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#750F87] dark:hover:bg-[#750F87] dark:focus:ring-[#750F87]">Contact Us</button>
            <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#000000] md:dark:bg-[#000000] dark: border-gray-700">
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 text-white bg-[#750F87] rounded md:bg-transparent md:text-[#750F87] md:dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#750F87] md:p-0 md:dark:hover:text-[#750F87]">Services</Link>
                </li>
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#750F87] md:p-0 md:dark:hover:text-[#750F87] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</Link>
                </li>
                <li>
                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#750F87] md:p-0 md:dark:hover:text-[#750F87] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
                </li>
            </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}