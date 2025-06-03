import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className=" shadow-2xl text-center fixed bottom-0 w-screen z-50  flex  gap-x-4  bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% p-2 lg:sticky lg:left-0 lg:h-screen lg:w-1/18 lg:flex-col lg:shadow-xl">
      <div className="flex-1 flex ">
        <Link to="/" className="flex flex-col items-center justify-center">
          <CgProfile className="lg:size-8 inline  " />
          <span className="block lg:inline"> About Me</span>
        </Link>
      </div>
      <div className="flex-1 flex ">
        <Link
          to="/projects"
          className="flex flex-col items-center justify-center"
        >
          <GrProjects className="lg:size-8 inline" />
          <span className="block lg:inline"> Projects</span>
        </Link>
      </div>
      <div className=" flex ">
        <Link to="/" className="flex flex-col items-center justify-center">
          <ImProfile className="lg:size-8 inline" />
          <span className="block lg:inline"> Resume</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
