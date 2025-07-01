export default function Hero() {
  return (
    <main className="flex flex-1 flex-col justify-between h-full w-full ">
      <div className="flex py-10 relative">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex flex-col absolute md:gap-10 lg:top-12 lg:left-4 md:top-36 md:left-1 top-72 left-12 [@media(max-width:380px)]:top-28 [@media(max-width:380px)]:left-8"
        >
          <div
            className="introducing-container w-[230px] md:w-[300px] h-[33px] flex items-center justify-center
          mb-2 relative "
          >
            <div>
              <i class="bx bxs-star-half"> Frontend Developer Portfolio </i>
            </div>
          </div>
          <div className="lg:max-w-[700px]sm:max-w-[400px] max-w-[250px] leading-relaxed">
            <h1 className="lg:text-4xl sm:text-4xl text-2xl font-extrabold mb-5 bg-gradient-radial from-violet-400 to-white bg-clip-text text-transparent">
              Turning ideas into interactive, performant web applications.
            </h1>
            <p className="max-w-[400px]">
              FRONTEND DEVELOPER WITH OVER 2+ YEARS OF REFINED EXPERTISE |
              PROFICIENT IN REACT. JS, NEXT. JS, JAVASCRIPT, TYPESCRIPT, AND
              UI/UX DEVELOPMENT | FOCUSED ON BUILDING SCALABLE, HIGH-PERFORMANCE
              WEB APPLICATION.
            </p>
          </div>
          <div className="mt-1">
            <a
              href="#"
              className="w-[208px] h-[33px] inline-flex items-center justify-center border border-gray-400 rounded-full text-sm tracking-wider contact-button"
            >
              <i class="bx bx-send"></i> contact me
            </a>
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="lg:w-[85%] lg:h-[85%] -z-10 fixed lg:top-[12%] md:right-[-15%] md:top-[20%] md:h-[60%] h-[50%] top-[10%] right-[14%]"
        >
          <Spline scene="https://prod.spline.design/XqJw9LxeeTa5MDZQ/scene.splinecode" />
        </div>
      </div>
      <div className="mt-auto">
        <h1 className="lg:text-9xl md:text-8xl text-3xl font-extrabold mb-8 tracking-wider text-center bg-gradient-radial from-white to-gray-600 bg-clip-text text-transparent [@media(max-width:380px)]:mb-2">
          WEB DEVELOPER
        </h1>
      </div>
      <img
        className="absolute -z-20 bg-cover min-h-screen min-w-full top-0 left-0"
        src="src\assets\background.png"
        alt="back-img"
      />
    </main>
  );
}
