
function Hero() {
  return (
    <section className=" text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        All your Digital Products

        <span className="sm:block"> Is one click away </span>
      </h1>

      <p className="mx-auto mt-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold max-w-xl sm:text-xl/relaxed">
        Start Exploring State of the Art Assets Now!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border-none bg-primary hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-primary px-12 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto hover:text-gray-500"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero