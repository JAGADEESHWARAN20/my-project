import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 
import { FaArrowRight } from "react-icons/fa";

import LoadingScreen from "./Loadingscreen";
import { BiDownload } from "react-icons/bi";




const Portfolio: React.FC = () => {

const handleDownload = () => {
  const pdfPath = '/resume.pdf'; // Adjust the path as per your project structure

  // Create a link element
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'resume.pdf'; // Set the desired file name for download
  document.body.appendChild(link);

  // Trigger the click event to start download
  link.click();

  // Clean up
  document.body.removeChild(link);
};

 useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
   const cursor = document.getElementById("customCursor");
   if (cursor) {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
   }
  };

  document.addEventListener("mousemove", handleMouseMove);

  return () => {
   document.removeEventListener("mousemove", handleMouseMove);
  };
 }, []);

 const [isLoading, setIsLoading] = useState(true);
 const roles = [
  "Frontend Developer",
  "Web Developer",
  "UI  Designer",
 ];
 const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

 useEffect(() => {
  const timeoutId = setTimeout(() => {
   setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
  }, 3000);

  return () => clearTimeout(timeoutId);
 }, [currentRoleIndex, roles.length]);

 useEffect(() => {
  const logoElement = document.getElementById("page-logo");
  if (logoElement) {
   setTimeout(() => {
    logoElement.style.opacity = "0.2";
    logoElement.style.transition = "2s";
    logoElement.style.scale = "1.2";

    setTimeout(() => {
     logoElement.style.transition = "2s";

     logoElement.style.opacity = "1";
    }, 1000); 
   }, 200); 
  }
 }, [currentRoleIndex]);

 const [logoPosition, setLogoPosition] = useState("0px"); 
 useEffect(() => {
  const logoElement = document.getElementById("page-logo");

  if (currentRoleIndex === 0) {
   setLogoPosition("0px");
  } else if (currentRoleIndex === 1) {
   setLogoPosition("10px");
  } else {
   setLogoPosition("20px");

   if (logoElement) {
    logoElement.classList.add("fade-in");
   }
  }
 }, [currentRoleIndex, logoPosition]);

 useEffect(() => {
  const logoElement = document.getElementById("page-logo");
  if (logoElement) {
   logoElement.classList.add("show");
  }
 }, [currentRoleIndex]);

 const [isClicked, setIsClicked] = useState(false);
 const [activeItem, setActiveItem] = useState("about");

 const handleItemClick = (item: string) => {
  setActiveItem((prevItem) => (prevItem === item ? "" : item));
 };

 const mouseItemEnter =(item:string)=>{
  setActiveItem((prevItem) => (prevItem === item ? "" : item));
 } 

 useEffect(() => {
 
  if (typeof window !== "undefined") {
   const darkModeStored = localStorage.getItem("darkMode");
   setIsClicked(darkModeStored === "true");
  }
 }, []);

 const handleClick = () => {
  setIsClicked(!isClicked);

  if (typeof window !== "undefined") {
   localStorage.setItem("darkMode", (!isClicked).toString());
  }
 };
 const [isOpen, setIsOpen] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null); 

 const handleDrag = (e: DragEvent) => {
  if (e.clientX > 50) {
   setIsOpen(true);
  }
 };

 const handleClickOutside = (e: MouseEvent) => {
  if (
   containerRef.current &&
   !containerRef.current.contains(e.target as Node)
  ) {
   setIsOpen(false);
  }
 };

 useEffect(() => {
  document.addEventListener("drag", handleDrag);
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("drag", handleDrag);
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, []);

 useEffect(() => {
  if (isClicked) {
   document.body.classList.remove("bg-[#948979]");
   document.body.classList.add("bg-[#00224D]");
  } else {
   document.body.classList.remove("bg-[#00224D]");
   document.body.classList.add("bg-[#948979]");
  }
 }, [isClicked]);

 const [isHovered, setIsHovered] = useState(false);

 const handleMouseEnter = () => {
  setIsHovered(true);
 };

 const handleMouseLeave = () => {
  setIsHovered(false);
 };

 const [showPopup, setShowPopup] = useState(false);

 const setFullScreen = () => {
  if (document.documentElement.requestFullscreen) {
   document.documentElement.requestFullscreen();
  }
 };

 const exitFullScreen = () => {
  if (document.exitFullscreen) {
   document.exitFullscreen();
  }
 };

 const handleToggleFullScreen = () => {
  if (showPopup) {
   setFullScreen();
  } else {
   exitFullScreen();
  }
  setShowPopup(!showPopup);
 };

 const handleClosePopup = () => {
  setShowPopup(!showPopup);
 };

 const about = [
  "Throughout  my   tenure at  Fileago,  I embarked on an exhilarating journey into the  realm  of React.js,  fine-tuning   my               expertise   in         crafting vibrant        and              interactive user     interfaces. My      repertoire also  spans      across      MongoDB, where I            mastered the     art   of    orchestrating resilient and streamlined data        management  solutions. Moreover, I    possess   a     flair for      fashioning captivating landing pages  and     WordPress websites, seamlessly blending creativity with  functionality to          deliver immersive online       experiences.My passion for   web   development is    fueled by   an          insatiable  curiosity, always   propelling me        towards discovering new      technologies and      pioneering methodologies. I       take immense pride    in      my        ability to         harmoniously fuse design aesthetics with technical finesse, ensuring that every digital creation resonates profoundly with its users and leaves an indelible mark. Beyond the digital realm, you'll often find me immersed in outdoor escapades, lost in the pages of a captivating book, or indulging in culinary experiments in my kitchen. I firmly believe in the transformative power of continuous learning, relentlessly seeking avenues for personal and professional growth.",
 ];
 const experiencetitle = [
  "Web Developer",
  "Web developer Intern",
  "Graphic  designer",
 ];
 const experiencecompany = ["Fileago", "Exposys Data Labs","Internshala",];
 const experienceLinks = ["https://fileago.com","https://exposysdatalabs", "https://internshala"];
 const experienceData = [
  [
   "Developed   time management         app                   and     interactive      dashboards                     with           React.js,    showcasing     modern              frontend        skills.",
   "Used      Tailwind  CSS     for     visually  appealing   and     responsive      UI, proficient in CSS frameworks. ",
   "Implemented      real-time data    updates and    interactive charts, demonstrating   problem-solving  abilities.",
   "Collaborated     with      teams,  translating    designsinto functional     code     anddeliveringhigh-quality   solutions.",
  
  ],
  [
  
  ],
  [
"As a graphic designer, I've mastered typography, font selection, branding guidelines, design principles, color management (both RGB and CMYK), UX design, and photo editing, while also developing strong soft skills in collaboration, emotional intelligence, communication, time management, creativity, and storytelling."
  ],
 ];
 const Keyskills = {
  Workone:
   "javascript, react js,  mongo  db, Sqlite, Gitlab,Oauth,Tailwind css  ",
   Worktwo:
   "mongodb, Html, Tailwind css, js, webapi , vercel ",
   Workthree:
   "Photoshop, Figma , poster Design, visual design, Image correction, Typography,canva  "
 };
 const experienceRef = useRef<HTMLDivElement>(null);

 

const sociallinks = ["https://facebook.com/jagadeeshwaran","https://twitter.com/jagadeeshodayar","https://instagram.com/jagadeeshwaran.insta"]



const projects = [
  { title: "Portfolio v1", type: "Individual", skills: "Javascript, reactjs, tailwindcss, timeline js", Link:'https://github.com/JAGADEESHWARAN20/Personal-Portfolio-Using-React-Js' },
  { title: "Shop With Dashboard", type: "Individual", skills: "Typescript, React js, Next js, mongodb, shadcnUI, toast , Rest API, Prisma DB",Link:'https://github.com/JAGADEESHWARAN20/Shopwithdashboard' },
  { title: "Movie-App", type: "Internship", skills: "Javascript, SCSS, React JS, TMDB Api, Routing", Link:'https://movie-r-app.vercel.app/'},
  { title: "3JS - Portfolio", type: "Individual", skills: " React js, Three js, TimeLine JS, Email JS",Link:'https://github.com/JAGADEESHWARAN20/3D-Portfolio' },
  { title: "Resume-Builder", type: "University", skills: "Python , TTkbootstrap, Tkinter, Mongodb, Sqlite, Pydocs, ATS ",Link:'https://github.com/JAGADEESHWARAN20/Resume-Generator' },
];

 const projectRef = useRef<HTMLDivElement>(null);

 const [styleskills, setStyleSkills] = useState(
  "px-5  py-1  bg-slate-800    text-cyan-200      capitalize     rounded-full    cursor-pointer",
 );

 useEffect(() => {
  if (!isClicked) {
   setStyleSkills(
    "px-5  py-1    bg-slate-200  text-black   capitalize  rounded-full cursor-pointer",
   );
  } else {
   setStyleSkills(
    "px-5      py-1       bg-slate-800    text-cyan-200   capitalize                         rounded-full       cursor-pointer",
   );
  }
 }, [isClicked]);

 const fontabout = "font-['poppins'] xsm:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] xxl:text-[17px]   tracking-wide           lg:text-opacity-60 lg:hover:text-opacity-100 duration-300     sm:text-white    font-thin"
 const font = "xsm:text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] xxl:text-[70px]"
 const buttonstyles = {ResumeButton:"px-5 text-opacity-30 w-[250px] py-2 flex hover:gap-4 items-center duration-100 gap-2 text-slate-300 capitalize hover:text-slate-200 cursor-pointer duration-50 ",Button:"px-5 text-opacity-30 w-[250px] py-2 flex hover:gap-4 items-center duration-100 gap-2 text-slate-300 capitalize hover:text-slate-200 cursor-pointer duration-50 "}


 const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };
  const styles = {
  container: 'sm:w-[400px] lg:w-[700px] sm:mx-[3%] lg:mx-[0%] bg-blue-200 bg-opacity-20 text-white rounded-lg',
  header: 'flex justify-between items-center p-4 cursor-pointer',
  headerText: 'text-lg font-semibold',
  icon: 'transform transition-transform duration-300',
  list: 'max-h-0 overflow-hidden transition-all duration-500 ease-in-out',
  listItem: 'p-4 border-t border-white cursor-pointer hover:bg-white hover:px-[43px] duration-300 hover:text-black',
  expanded: 'max-h-[500px]',
  textColor: 'text-white',
  bgColor: 'bg-blue-300',
  hoverBgColor: 'hover:bg-blue-300 hover:bg-opacity-25',
  borderColor: 'border-white',
  transition: 'transition-all duration-500 ease-in-out',
  cubicBezier: 'transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)',
};


 return (
  <div
   className={`w-[100vw ] xsm:w-full h-[100vh]  lg:fixed xsm:relative text-white    py-9 fixed  `}
  >
     {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

   {showPopup ? (
     <div
     className={`fixed inset-0  flex justify-center items-center  z-[999999999] bg-black  bg-opacity-50  ${showPopup ? "animate-fade-down backdrop-blur-lg" : "animate-fade-up" }`}
    >
     <div className="bg-white    bg-opacity-20  backdrop-blur-md  p-8  rounded-lg   shadow-lg  animate-fade-down">
      <p className="mb-4  font-[poppins]">
       Requested to view portfolio in full screen.
      </p>
      <div className="flex justify-start">
       <button
        onClick={handleToggleFullScreen}
        className="px-4  py-2  bg-red-700   text-white  rounded  hover:bg-white  hover:text-black duration-300                   mr-2"
       >
        Full Screen
       </button>
       <button
        onClick={handleClosePopup}
        className="px-4  py-2   border-1  border   order-white-800      text-white      rounded          focus:outline-none"
       >
        It's Fine
       </button>
      </div>
     </div>
    </div>
   ) : null}

   <div className="  relative   flex lg:flex-row flex-col   h-[100%]  xsm:flex-col xxl:flex-row xl:flex-row items-center    justify-between   ">
    <div className="   xl:w-3/4    xsm:w-full  lg:w-1/2   h-[100%] lg:h-[100%] xsm:h-auto      xxl:px-[200px] xl:pl-[20px] sm:px-[30px] flex  flex-col     items-start    relative justify-between   ">
     <div className="w-[310px]   relative">
      <div className="group">
      <h1 className={`font-['poppins']  ${font}   cursor-pointer  `}>
       Jagadeeshwaran
      </h1>
      <span className="absolute   w-[100px]   group-hover:w-[100%]   bg-slate-300   h-[1px]  transition-all        duration-300"></span>
      </div>


      <div className="flex   relative flex-row items-center   gap-4">
      <div
       className="  relative   linelayer    pt-[20px]    flex    justify-start   group   cursor-pointer"
       onClick={handleClick}
       >
       <div
        className={`w-[40px]  h-[20px]    rounded-full  flex items-center ${isClicked ? "border-white" : "border-slate-200"
      }            border-[2px]`}
      >
        <div         className={`w-[10px]   h-[10px]   absolute  rounded-full  duration-150 ${isClicked ? "right-[60%]     bg-lime-500" : "right-[15%] bg-slate-200"}`}
        ></div>
       </div>
      </div>
      <div
       className={`logo-container  lg:cursor-lg  inline-flex
       px-[32px] duration-150  relative ${isHovered ? "text-slate-100    z-[2000]" : "" }`}
       style={{ transform: `translateX(${logoPosition})` }}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       >
       <h1
        id="page-logo"
        className={`ml-2 ${font} text-nowrap`}
        >
        {roles[currentRoleIndex]}
       </h1>

       <div
        className={`lineanime   ${isClicked ? "bg-white" : "bg-white" }`}
        ></div>
      </div>
     </div>
     <div className="w-screen  pl-[10px] py-[30px]   font-['poppins']">
      <p>I Build websites and UI designs</p>
     </div>

     <div className="w-auto   opacity-100    xsm:hidden  lg:block   font-['poppins']">
      <div
       onClick={() => handleItemClick("about")}
       className={`flex    flex-row   group    items-center    gap-4    justify-start                  cursor-pointer`}
       >
       <span
        className={`${
          activeItem === "about" ? "w-[100px]" : "w-[30px]" }     duration-300     group-hover:w-[100px] bg-white h-[1px]`}
          ></span>
       <Link href="#about">About me</Link>
      </div>
      <div
       onClick={() => handleItemClick("experience")}
       className={`flex  flex-row group items-center gap-4 justify-start cursor-pointer`}
      >
       <span
        className={`${
          activeItem === "experience" ? "w-[100px]" : "w-[30px]"
        }     duration-300     group-hover:w-[100px]          bg-white       h-[1px]`}
        ></span>
       <Link href="#experience">Experience</Link>
      </div>
      <div
       onClick={() => handleItemClick("project")}
       className={`flex   flex-row   group  items-center    gap-4  justify-start  cursor-pointer`}
       >
       <span
        className={`${ activeItem === "project" ? "w-[100px]" : "w-[30px]"}     duration-300  group-hover:w-[100px]  bg-white h-[1px]`}
        ></span>
       <Link href="#project">Projects</Link>
      </div>
     </div>


     </div>

   
     <div
      ref={containerRef}
      draggable={true}
      className={`fixed    top-1/2 right-0  z-[999999999]   transform   cursor-move  -translate-y-1/2 flex    flex-col       gap-2        rounded-[40px] py-4                px-2            transition-all duration-300 bg-white   bg-opacity-30 backdrop-blur-md ease-in-out ${
        isOpen ? "right-[150px] sm:right-[30px]" : "right-[-17px]"
      }`}
     >
      <div className="social-icon cursor-pointer" style={{ backgroundColor: "transparent" }}>
       <Link  href={sociallinks[0]}>
       <FaFacebook
        style={{
          color:
          "rgba(255, 255, 255, 0.7)",
          width: "20px",
        }}
        />
       </Link>
      </div>
      <div className="social-icon cursor-pointer" style={{ backgroundColor: "transparent" }}>
      <Link href={sociallinks[1]}>
       <FaTwitter
        style={{
          color:
          "rgba(255, 255, 255, 0.7)",
          width: "20px",
        }}
        />
        </Link>
      </div>
      <div  className="social-icon cursor-pointer" style={{ backgroundColor: "transparent" }}>
       <Link href={sociallinks[2]}>
       <FaInstagram
        style={{
          color:
          "rgba(255, 255, 255, 0.7)",
          width: "20px",
        }}
        />
        </Link>
      </div>
     </div>
    
     
     <div className=" mt-5 group w-[150px] text-[15px] justify-between flex cursor-pointer">
       <div className="">
        <Link href={'mailto:jagadeeshwaransp5@gmail.com'}>Let's Discuss</Link>
        
        <div className="w-0 duration-300 group-hover:w-[100px] bg-white h-[2px]"></div>
     </div>
        <FaArrowRight className="opacity-0 duration-200 group-hover:opacity-100"/>
     </div>
    </div>
    <div
     id="RightSIde"
     className="  w-1/2  xsm:w-full  lg:overflow-scroll xsm:overflow-visible   overflow-scroll xsm:px-5   h-screen px-5 flex-col flex items-start xsm:items-start justify-start"
     >
     <div
      onMouseEnter={()=>mouseItemEnter("about")}
      id="about"
      className=" items-start flex lg:pt-[65px] sm:pb-[85px] sm:text-start xsm:pl-3 sm:pt-[20px] sm:py-[20px] lg:w-3/4 xsm:w-full     text-left    text-wrap      relative"
      >
      <div className={`${fontabout} `}>
       {about}
      </div>
     </div>

          
   <div className={`${styles.container}`}>
      <div className={`${styles.header}`} onClick={toggleDropdown}>
        <span className={`${styles.headerText}`}>Skills</span>
        <span className={`${styles.icon} ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>
      <div className={`${styles.list} ${isExpanded ? styles.expanded : ''}`}>
        <div className={`${styles.listItem}`}>HTML</div>
        <div className={`${styles.listItem}`}>CSS</div>
        <div className={`${styles.listItem}`}>JavaScript</div>
        <div className={`${styles.listItem}`}>React</div>
        <div className={`${styles.listItem}`}>Communication</div>
        <div className={`${styles.listItem}`}>Teamwork</div>
        <div className={`${styles.listItem}`}>Problem Solving</div>
        <div className={`${styles.listItem}`}>Leadership</div>
      </div>
    </div>


     <div
     onMouseEnter={()=>mouseItemEnter("experience")}
      ref={experienceRef}
      id="experience"
      className="items-start     flex px-3       py-[10px]     sm:py-[20px]    lg:w-3/4 relative"
      >
      <div className="">
       <div className="font-poppins      group       pb-[20px] ">
            <div className="  xsm:bg-white xsm:bg-opacity-5 xsm:px-[20px]     duration-100 py-5   lg:bg-transparent    lg:group-hover:bg-opacity-10 lg:group-hover:bg-white">
            <div className="flex lg:w-auto   gap-2  items-start ml-3 cursor-pointer group relative py-4  text-[40px]  transition  duration-150">
            {experiencetitle[0]} &bull; {experiencecompany[0]}
          <Link href={experienceLinks[0]}>
          <svg
           width="12"
           height="12"
           className="absolute lg:right-1 sm:right-2 top-5  group-hover:top-2   duration-150"
           viewBox="0 0  29 29"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           >
           <path
            d="M1 28L28     1M28      1L28        21M28    1H7"
            stroke="white"
            strokeWidth="2"
            />
          </svg>
          </Link>
         </div>
         <div
          className={`px-3 ${isClicked ? "text-slate-400" : "text-white"  } group-hover:text-white xsm:text-opacity-95  group-hover:text-opacity-65  `}
          >
          {experienceData[0]}
         </div>

         <div className="w-full  flex  flex-wrap  gap-2 ml-3 mt-3 mb-6  text-[12px]"> {Keyskills.Workone.split(",").map(
           (skill, index) => (
             <span key={index} className={styleskills}>
             {skill}
            </span>
           ),
          )}
         </div>
        </div>
       </div>
       <div className="font-poppins      group    pb-3">
        <div className="lg:bg-transparent    lg:group-hover:bg-opacity-10 lg:group-hover:bg-white xsm:bg-white xsm:bg-opacity-5 xsm:px-[20px]    py-5        group-hover:bg-opacity-10">
         <div className="flex lg:w-auto   gap-2  items-start cursor-pointer     ml-3    group     text-[40px]       relative          py-4           transition   duration-150">
          {experiencetitle[1]} &bull; {experiencecompany[1]}
          <Link href={experienceLinks[1]}>
          <svg
          href=""
          width="12"
          height="12"
          className="absolute  lg:right-1 sm:right-2 top-5  group-hover:top-2 duration-150"
          viewBox="0      0     29     29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
           <path
            d="M1 28L28 1M28 1L28  21M28 1H7"
            stroke="white"
            strokeWidth="2"
            />
          </svg>
            </Link>
         </div>
         <div
          className={`px-3 ${
            isClicked ? "text-slate-400" : "text-white"
          } group-hover:text-white  group-hover:text-opacity-65  `}
          >
          {experienceData[1]}
         </div>
         <div className="w-full  flex  flex-wrap  gap-2  ml-3 mt-3  mb-6  text-[12px]">
          {Keyskills.Worktwo.split(",").map(
            (skill, index) => (
              <span key={index} className={styleskills}>
             {skill}
            </span>
           ),
          )}
         </div>
        </div>
       </div>
       <div className="font-poppins group pb-3 ">
        <div className="lg:bg-transparent    lg:group-hover:bg-opacity-10 lg:group-hover:bg-white    xsm:bg-white xsm:bg-opacity-5 xsm:px-[20px] py-5  px-3 group-hover:bg-opacity-10">
         <div className="flex lg:w-auto  gap-2 items-start ml-3   cursor-pointer group  relative   text-[40px] py-4 transition   duration-150">
          {experiencetitle[2]} &bull; {experiencecompany[2]}
          <Link href={experienceLinks[2]}>
          <svg
           width="12"
           height="12"
           className="absolute  lg:right-1 sm:right-2  top-5   group-hover:top-2   duration-150"
           viewBox="0  0  29 29"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           >
           <path
            d="M1 28L28 1M28   1L28  21M28  1H7"
            stroke="white"
            strokeWidth="2"
            />
          </svg>
          </Link>
         </div>
         <div
          className={`px-3  ${isClicked ? "text-slate-400" : "text-white"
        } group-hover:text-white  group-hover:text-opacity-65 `}
        >
          {experienceData[2]}
         </div>
         <div className="w-full  flex flex-wrap   gap-2       ml-3   mt-3   mb-6    text-[12px]">
          {Keyskills.Workthree.split(",").map(
           (skill, index) => (
             <span key={index} className={styleskills}>
             {skill}
            </span>
           ),
          )}
         </div>
        </div>
             </div>
              <a href="#" onClick={handleDownload} className="w-[200px] bg-opacity-15 px-4 pl-[30px] py-2 rounded-[6px] items-center gap-3 duration-100 mt-5 backdrop-blur-md flex text-white text-opacity-25 hover:gap-5 hover:text-slate-200 cursor-pointer">
      <BiDownload /> Resume <FaArrowRight />
    </a>
      </div>
     </div>
     <div   onMouseEnter={()=>mouseItemEnter("project")} id='project' className=" sm:w-[92%] lg:w-3/4 items-start flex relative flex-col ml-[20px]  ">
            {projects.map((project, projectIndex) => {
                const skills = project.skills.split(',').map(skill => skill.trim());

                return (
                    <div key={projectIndex} style={{ marginBottom: '20px' }} className="bg-white relative flex flex-col bg-opacity-5 px-[50px] w-full py-[40px]  ">
                        <div className="w-full flex justify-between pb-[12px]">
                        <h3 className="text-[50px] font-['poppins']">{project.title}</h3>
                        <Link href={project.Link}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" className="hover:fill-white duration-150 cursor-pointer" viewBox="0 0 72 72">
                              <path d="M 36 12 C 22.745 12 12 22.745 12 36 C 12 49.255 22.745 60 36 60 C 49.255 60 60 49.255 60 36 C 60 22.745 49.255 12 36 12 z M 36 20 C 44.837 20 52 27.163 52 36 C 52 43.284178 47.128298 49.420174 40.46875 51.355469 C 40.198559 51.103128 39.941627 50.74363 39.953125 50.285156 C 39.980125 49.233156 39.953125 46.778953 39.953125 45.876953 C 39.953125 44.328953 38.972656 43.230469 38.972656 43.230469 C 38.972656 43.230469 46.654297 43.316141 46.654297 35.119141 C 46.654297 31.957141 45.003906 30.310547 45.003906 30.310547 C 45.003906 30.310547 45.872125 26.933953 44.703125 25.501953 C 43.393125 25.359953 41.046922 26.753297 40.044922 27.404297 C 40.044922 27.404297 38.457406 26.753906 35.816406 26.753906 C 33.175406 26.753906 31.587891 27.404297 31.587891 27.404297 C 30.586891 26.753297 28.239687 25.360953 26.929688 25.501953 C 25.760688 26.933953 26.628906 30.310547 26.628906 30.310547 C 26.628906 30.310547 24.974609 31.956141 24.974609 35.119141 C 24.974609 43.316141 32.65625 43.230469 32.65625 43.230469 C 32.65625 43.230469 31.782197 44.226723 31.693359 45.652344 C 31.180078 45.833418 30.48023 46.048828 29.8125 46.048828 C 28.2025 46.048828 26.978297 44.483766 26.529297 43.759766 C 26.086297 43.045766 25.178031 42.447266 24.332031 42.447266 C 23.775031 42.447266 23.503906 42.726922 23.503906 43.044922 C 23.503906 43.362922 24.285781 43.585781 24.800781 44.175781 C 25.887781 45.420781 25.866281 48.21875 29.738281 48.21875 C 30.196553 48.21875 31.021102 48.11542 31.677734 48.025391 C 31.674106 48.90409 31.663893 49.74536 31.677734 50.285156 C 31.688158 50.700354 31.476914 51.032045 31.236328 51.279297 C 24.726159 49.25177 20 43.177886 20 36 C 20 27.163 27.163 20 36 20 z"></path>
                              </svg>
                        </Link>
                        </div>
                        <p className=" p-[8px] py-[5px] mb-5 lg:rounded-full xsm:rounded-md xsm:w-1/3 bg-green-600 lg:w-1/6 items-center flex justify-center">{project.type}</p>
                        <div className="flex gap-4 flex-wrap">
                            {skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    style={{
                                      display:"flex",
                                    }}
                                    className="bg-slate-800 px-[20px] py-[10px] rounded-full"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}

    

      <div className={`${buttonstyles.Button} `}><Link href={'https://github.com/JAGADEESHWARAN20'} >view Other projects </Link> <FaArrowRight/></div>
      </div>
     </div>
    

   <div
    id="customCursor"
    className={`custom-cursor custom-cursorbar ${
      isClicked
      ? "bg-[#b0a8d0] duration-150  blur-[200px]  z-30 h-[500px] w-[500px]"
      : "bg-[#b0a8d0]  blur-[2px]   z-30  h-[10px]            w-[10px]"
    }`}
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      opacity: 0.4,
      transform: "translate(-50%,-50%)",
      pointerEvents: "none",
      borderRadius: "50%",
      transition: "all  0.1s ease-out",
    }}
    ></div>
    
    </div>
  </div>
 );
};

export default Portfolio;

