const ProjectCard = ({ title, image, link, Glink }) => {
  return (
    <div className="flex flex-col rounded-xl border-2 w-auto min-h-4/5 items-center p-4 m-4 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
      <p className="p-2 bg-white border-2">{title}</p>
      <img src={image} alt="" className="object-cover w-auto h-auto border-2" />
      <div className="bg-white border-2 text-center p-4 underline decoration-solid">
        <p className="">
          <a href={link}>Watch Video Demo/ View Live Page</a>
        </p>
        <p>
          <a href={Glink}>GitHub Repo Link</a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
