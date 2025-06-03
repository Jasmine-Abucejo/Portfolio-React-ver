const About = () => {
  return (
    <div>
      <div className="bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% w-screen sticky top-0 p-4 lg:w-auto lg:text-center">
        <p className="text-2xl">Jasmine N. Abucejo </p>
        <div className="flex justify-between">
          <span>abucejojasmine@gmail.com </span>
          <span>09265365371</span>
        </div>
      </div>
      <div className="lg:border-blue-800 lg:w-auto lg:h-auto  lg:flex lg:flex-row lg:m-4">
        <div className="lg:border-black lg:min-w-1/3 lg:p-4">
          <div className="m-8 rounded-xl lg:h-2/3 w-2/3 lg:flex justify-center  lg:m-0">
            <img
              src="../profile_pic.jpg"
              alt=""
              className="rounded-xl lg:w-fit lg:h-fit object-cover"
            />
          </div>
        </div>
        <div className="lg:border-white lg:min-w-2/3 lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-4">
          <div className="m-8 rounded-xl bg-blue-300 p-4 justify-center text-justify lg:m-0 border-black border-2 ">
            <p>
              I am Jasmine N. Abucejo, youngest of the five siblings. Born and
              raised in Cavite, I graduated class valedictorian on my elementary
              years. I have a degree in Bachelor of Science in Computer Science
              at Cavite State University.
            </p>
          </div>
          <div className="m-8 rounded-xl bg-blue-300 p-4 justify-center text-justify lg:m-0 border-black border-2">
            <p>
              I had an experience in frontend development from my internship at
              Pixels8 Web Solutions and Consultancy Inc. using Vue.js and CSS
              for designing. I also gained bit of QA experience as I was
              assigned to test other team's project based on the standard set by
              the company.
            </p>
          </div>
          <div className="m-8 rounded-xl bg-blue-300 p-4 justify-center text-center lg:col-span-2 lg:m-0 border-black border-2">
            <p>
              Currently, I have the following in my arsenal: <br />
              -PHP <br />
              -Vue.js <br />
              -React <br />
              -HTML <br />
              -CSS <br />
              -Tailwind CSS <br />
              -SQL Queries <br />
              -MERN Stack
            </p>
          </div>
        </div>
      </div>
      {/* <div className="lg:flex lg:flex-row lg:gap-2">
        <div className="m-8 rounded-xl lg:h-1/2 w-1/2 lg:flex justify-center lg:border-blue-500">
          <img
            src="../profile_pic.jpg"
            alt=""
            className="rounded-xl lg:w-fit lg:h-fit object-cover"
          />
        </div>
        <div className="lg:flex lg:flex-row lg:rounded-xl">
          <div className="m-8 rounded-xl bg-blue-300 p-4 justify-center text-justify lg:w-1/2 lg:-ml-5  ">
            <p>
              I am Jasmine N. Abucejo, youngest of the five siblings. Born and
              raised in Cavite, I graduated class valedictorian on my elementary
              years. I have a degree in Bachelor of Science in Computer Science
              at Cavite State University.
            </p>
          </div>
          <div className="m-8 rounded-xl bg-blue-300 p-4 justify-center text-justify lg:w-1/2 lg:-mt-40 lg:mr-4 ">
            <p>
              I had an experience in frontend development from my internship at
              Pixels8 Web Solutions and Consultancy Inc. using Vue.js and CSS
              for designing. I also gained bit of QA experience as I was
              assigned to test other team's project based on the standard set by
              the company.
            </p>
          </div>
          <div className="m-8 rounded-xl bg-blue-300 p-4 justify-center text-justify lg:row-span-1">
            <p>
              Currently, I have the following in my arsenal: <br />
              -PHP <br />
              -Vue.js <br />
              -React <br />
              -HTML <br />
              -CSS <br />
              -Tailwind CSS <br />
              -SQL Queries <br />
              -MERN Stack
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
