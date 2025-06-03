import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:grid-flow-row">
      <ProjectCard
        title={"Book Borrowind System (PHP ver)"}
        image={"./BBS.png"}
        link={
          "https://drive.google.com/file/d/1nVVYF21-ATRNzDOk1bAmVMxEv0u8aKyQ/view?fbclid=IwZXh0bgNhZW0CMTEAAR0tEvuRO_sx3LmyAZjrnK12hi7fU3KhIa66EWAD9ZqDaqov17XYCz7POqI_aem_U03d2wuFcPglSBC7TEviog"
        }
        Glink={"https://github.com/Jasmine-Abucejo/librarian-system"}
      />
      <ProjectCard
        title={"GUARDIAN: A Google Chrome Extension for X Word Censoring"}
        image={"./Guardian.png"}
        link={
          "https://drive.google.com/drive/folders/1PMYcBOHcoukFlqEWxJ43uHIiG4JcUECV?fbclid=IwZXh0bgNhZW0CMTEAAR3CySH7GuqNmzbLwJG-U-2mCW7z00yyasGmkmI0XQcLs0G2pAWD11k-NEs_aem_6htj01JNYzLzamPglvR0mg"
        }
        Glink={"https://github.com/Jasmine-Abucejo/GUARDIAN-vite-ver"}
      />
      <ProjectCard
        title={"ReactJS Beginner Challenges"}
        image={"./ReactChallenges.png"}
        link={"https://react-simple-challenges.netlify.app/"}
        Glink={"https://github.com/Jasmine-Abucejo/React-Practices"}
      />
    </div>
  );
};

export default Projects;
