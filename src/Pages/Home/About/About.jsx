import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="md:px-8">
        <img
          src="https://i.ibb.co/VTTPyt2/IMG20201223171546-2-removebg-preview-1.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
        <div className="md:w-[50%]">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="py-6">
            Welcome to my portfolio! I am Moriam Akter Swarna, a junior MERN
            stack developer who is enthusiastic about creating dynamic web
            applications. I recently completed an intensive web development
            course at Programming Hero, where I honed my skills in the MERN
            stack. Equipped with a solid foundation in JavaScript, I thrive on
            crafting interactive and responsive user interfaces. With a
            Bachelors degree in Computer Science and Engineering from Daffodil
            International University, I have gained a comprehensive
            understanding of software development principles and practices. My
            educational background, combined with hands-on experience in
            building applications using MongoDB, Express.js, React, and Node.js,
            enables me to develop robust and scalable solutions. I am passionate
            about staying up-to-date with the latest industry trends and
            continuously expanding my knowledge to deliver cutting-edge
            projects.
          </p>
          <Link to="/contact" className="btn btn-outline text-black bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Contact With Me</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
