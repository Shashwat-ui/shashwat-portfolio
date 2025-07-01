import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <main className="flex flex-col h-screen w-full relative overflow-hidden">
      {/* ✅ Background image full screen */}
      <img
        className="absolute top-0 left-0 -z-20 w-full h-full object-cover"
        src="src/assets/background.png"
        alt="back-img"
      />

      {/* ✅ Spline 3D model (stays fixed behind) */}
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="absolute lg:w-[85%] lg:h-[85%] -z-10 lg:top-[12%] md:right-[-15%] md:top-[20%] md:h-[60%] h-[50%] top-[10%] right-[14%]"
      >
        <Spline scene="https://prod.spline.design/XqJw9LxeeTa5MDZQ/scene.splinecode" />
      </div>

      {/* ✅ Container for content (relative flow) */}
      <div className="flex flex-col flex-1 justify-between px-4 md:px-12 py-10 relative">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex flex-col md:gap-10 lg:top-12 lg:left-4 md:top-36 md:left-1 top-72 left-12 relative [@media(max-width:380px)]:top-28 [@media(max-width:380px)]:left-8"
        >
          {/* 🔹 Header Line */}
          <div className="introducing-container w-[230px] md:w-[300px] h-[33px] flex items-center justify-center mb-2 relative">
            <div>
              <i className="bx bxs-star-half"> Frontend Developer Portfolio </i>
            </div>
          </div>

          {/* 🔹 Title and Paragraph */}
          <div className="lg:max-w-[700px] sm:max-w-[400px] max-w-[250px] leading-relaxed">
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

          {/* 🔹 Contact Me Button */}
          <div className="mt-1">
            <a
              href="shaswatshukla75@gmail.com"
              className="w-[208px] h-[33px] inline-flex items-center justify-center border border-gray-400 rounded-full text-sm tracking-wider contact-button"
            >
              <i className="bx bx-send"></i> contact me
            </a>
          </div>

          {/* 🔹 WEB DEVELOPER Text (now visible and properly placed) */}
          <div className="mt-8">
            <h1 className="lg:text-9xl md:text-8xl text-3xl font-extrabold tracking-wider text-center bg-gradient-radial from-white to-gray-600 bg-clip-text text-transparent [@media(max-width:380px)]:mb-2">
              WEB DEVELOPER
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
