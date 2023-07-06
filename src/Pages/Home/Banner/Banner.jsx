import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import bannerAnimation from '../../../../public/banner.json'
const Banner = () => {
  return (
    <div className="my-5">
      <div className="md:flex md:flex-row-reverse lg:gap-2 lg:m-2 items-center justify-center gap-10">
        <Lottie className="w-9/12" animationData={bannerAnimation}></Lottie>
        <div>
          <div className=" ">
            <p className="">Hey, I am </p>
            <h1 className="text-5xl font-bold">Sakib Hosen</h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "MERN Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Tech Enthusiast",
                1000,
                "Web Designer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
            <p className="py-6">
              As a MERN stack Developer, I specialize in building full-stack web
              applications using MongoDB, React and Node.js. With a passion for
              coding and a dedication to clean, efficient, and well-organized
              code, I strive to create application that deliver exceptional user
              experience.
            </p>
            <Link
              to="https://drive.google.com/file/d/1FnVBSPG0b9cQTe3rRLSNv_Cm7oAN0YIO/view?usp=sharing"
              className="btn btn-outline text-black bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
            >
              My Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
