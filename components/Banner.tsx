
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-5xl md:text-6xl">George&apos;s Daily Blog</h1>
            <h2 className="mt-3 md:mt-5">
                Welcome to{" "}
                <span className="underline decoration-4 decoration-[#E4242a]">
                    Every Developers
                </span>{" "}
                favourite blog in the Devosphere
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New product features | The latest in technology | The weekly debugging nightmares and More!
        </p>
    </div>
  )
}

export default Banner