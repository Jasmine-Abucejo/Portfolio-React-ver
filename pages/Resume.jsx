import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div>
      <div className="bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% w-screen sticky top-0 p-4 lg:w-auto lg:text-center">
        <p className="text-2xl">Jasmine Abucejo's CV </p>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row lg:w-auto lg:h-auto">
        <div className="lg:min-w-2/3  lg:m-4 lg:border-2">
          <img
            src="../public/Jasmine(Updated Resume).jpg"
            alt=""
            className="lg:h-auto"
          />
        </div>
        <div className="  text-4xl text-center lg: flex justify-center m-4">
          <div className="flex flex-row border-green-600 border-4 p-4 rounded lg:h-20">
            <FaDownload />{" "}
            <a href="../src/assets/Jasmine(Updated Resume).pdf">Download</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
