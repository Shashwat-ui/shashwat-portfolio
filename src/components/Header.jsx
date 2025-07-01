import "boxicons/css/boxicons.min.css";

export default function Header() {
  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      className="z-10 flex justify-between mb-24 pt-10 items-center"
    >
      <div className="lg:text-5xl font-extrabold text-2xl bg-gradient-radial from-white to-gray-600 bg-clip-text text-transparent">
        Shashwat Shukla
      </div>

      <div className="flex gap-5">
        <a
          className="text-2xl hover:text-gray-500 duration-300"
          href="https://x.com/sh49138_shukla?s=21"
        >
          <i class="bx bxl-twitter"></i>
        </a>

        <a
          className="text-2xl hover:text-gray-500 duration-300"
          href="www.linkedin.com/in/shaswat-shukla-7b2229191"
        >
          <i class="bx bxl-linkedin"></i>
        </a>

        <a
          className="text-2xl hover:text-gray-500 duration-300"
          href="https://github.com/Shashwat-ui"
        >
          <i class="bx bxl-github"></i>
        </a>
      </div>
    </header>
  );
}
