import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href='/'>
                <Image
                    src='./next.svg'
                    width={50}
                    height={50}
                    alt="logo"
                    className="rounded-full"
                />
            </Link>
            <h1>Blogish</h1>
        </div>
        <div className="">
            <Link
                href='/'
                className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#E4242a] flex items-center rounded-full text-center"
            >
                Sign up to Finfo
            </Link>
        </div>
    </header>
  )
}

export default Header