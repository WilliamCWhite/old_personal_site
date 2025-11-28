import projectData from "../assets/project_data.json"

import tallykeeperImg from "../assets/images/best_tallykeeper_img.png"

import playIcon from "../assets/icons/play.png"
import githubIcon from "../assets/icons/icons8-github-144.png"

import Skill from "./Skill"

import "../styles/Project.css"

export interface ProjectLink {
  type: 'primary' | 'secondary' | string;
  url: string;
  iconName: LinkIconName | string;
  label: string;
}

export interface ProjectObj {
  title: string;
  description: string;
  links: ProjectLink[];
  technologies: string[];
}

const linkIconMap = {
  play: playIcon,
  github: githubIcon
}
export type LinkIconName = keyof typeof linkIconMap;

const skillNameMap = {
  aws: "AWS",
  c: "C",
  cSharp: "C#",
  django: "Django",
  docker: "Docker",
  flutter: "Flutter",
  git: "Git",
  golang: "Golang",
  java: "Java",
  javascript: "JavaScript",
  nginx: "Nginx",
  nodejs: "Node.js",
  postgres: "PostgreSQL",
  python: "Python",
  react: "React", 
  tailwind: "Tailwind",
  typescript: "TypeScript",
}
export type ProjectSkillName = keyof typeof skillNameMap;

function isLinkIconName(name: string): name is LinkIconName {
  return name in linkIconMap; 
}

function isProjectSkillName(name: string): name is ProjectSkillName {
  return name in skillNameMap;
}

const projects: ProjectObj[] = projectData.project_pages;

const images = [tallykeeperImg]

export interface ProjectProps {
  pageIndex: number;
}

function Project( props: ProjectProps ) {

  const pIdx = props.pageIndex - 1;

  const links = projects[pIdx].links.map((link: ProjectLink) => {
    
    if (!isLinkIconName(link.iconName)) {
      console.error("INVALID LINK ICON NAME");
      return ( <p>ERROR</p>)
    }

    if (link.type == "primary") {
      return (
        <a href={link.url}>
          <div className="link-pill primary-link">
            <img src={linkIconMap[link.iconName]} />
            <p>{link.label}</p>
          </div>
        </a>
      )
    }
    
    return (
      <a href={link.url}>
        <div className="link-pill" >
          <img src={linkIconMap[link.iconName]} />
          <p>{link.label}</p>
        </div>
      </a>
    )
  })

  const skills = projects[pIdx].technologies.map((skillName: string) => {
    if (!isProjectSkillName(skillName)) {
      console.error(`Invalid skill name: ${skillName}`)
      return (<p>ERROR</p>)
    }

    return (
      <Skill skillName={skillName}/>
    )
  })

  return (
    <div className="project-container">
      <div className="section-1">
        <h2>{projects[pIdx].title}</h2>
        <img src={images[pIdx]} />
        <nav className="link-list">
          {...links}
        </nav>
      </div>
      <div className="divider"></div>
      <div className="section-2">
        <p>
          {projects[pIdx].description}
        </p>
        <p>Technologies:</p>
        <div className="skill-list">
          {...skills}
        </div>
        
      </div>

    </div>

  )

}

export default Project;
