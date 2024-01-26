import Link from "next/link"
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const StudioNavbar = (props: any) => {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#E4242a] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#E4242a] mr-2" />
                Go to Website
            </Link>

            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#E4242a]">
                <h1 className="font-bold text-white">
                    Check out the Ecommerce Site
                </h1>
                <Link href="https://ecommerce-project-five-xi.verel.app" className="text-[#E4242a] font-bold ml-2">
                    Ecommerce
                </Link>
            </div>
        </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar