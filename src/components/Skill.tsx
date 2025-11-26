import "../styles/Skill.css"

import awsIcon from '../assets/icons/icons8-amazon-web-services-144.png'
import cIcon from '../assets/icons/icons8-c-programming-144.png'
import cSharpIcon from '../assets/icons/icons8-c-sharp-logo-144.png'
import djangoIcon from '../assets/icons/icons8-django-144.png'
import dockerIcon from '../assets/icons/icons8-docker-144.png'
import flutterIcon from '../assets/icons/icons8-flutter-144.png'
import gitIcon from '../assets/icons/icons8-git-144.png'
import golangIcon from '../assets/icons/icons8-golang-144.png'
import javaIcon from '../assets/icons/icons8-java-144.png'
import jsIcon from '../assets/icons/icons8-javascript-144.png'
import nginxIcon from '../assets/icons/icons8-nginx-144.png'
import nodejsIcon from '../assets/icons/icons8-nodejs-144.png'
import postgresIcon from '../assets/icons/icons8-postgresql-144.png'
import pythonIcon from '../assets/icons/icons8-python-144.png'
import reactIcon from '../assets/icons/icons8-react-native-144.png'
import tailwindIcon from '../assets/icons/icons8-tailwindcss-144.png'
import tsIcon from '../assets/icons/icons8-typescript-144.png'


const iconMap = {
  aws: awsIcon,
  c: cIcon,
  cSharp: cSharpIcon,
  django: djangoIcon,
  docker: dockerIcon,
  flutter: flutterIcon,
  git: gitIcon,
  golang: golangIcon,
  java: javaIcon,
  javascript: jsIcon,
  nginx: nginxIcon,
  nodejs: nodejsIcon,
  postgres: postgresIcon,
  python: pythonIcon,
  react: reactIcon,
  tailwind: tailwindIcon,
  typescript: tsIcon
}

export type SkillName = keyof typeof iconMap;

const textMap: Record<SkillName, string> = {
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

const colorMap: Record<SkillName, string> = {
  aws: "yellow-box",
  c: "blue-box",
  cSharp: "purple-box",
  django: "green-box",
  docker: "blue-box",
  flutter: "blue-box",
  git: "red-box",
  golang: "cyan-box",
  java: "red-box",
  javascript: "yellow-box",
  nginx: "green-box",
  nodejs: "green-box",
  postgres: "blue-box",
  python: "yellow-box",
  react: "cyan-box",
  tailwind: "cyan-box",
  typescript: "blue-box"
}


interface SkillProps {
  skillName: SkillName,
}

function Skill(props: SkillProps) {

  return (
    <div className={`skill-pill ${colorMap[props.skillName]}`}>
      <img src={iconMap[props.skillName]}/>
      <p>{textMap[props.skillName]}</p>
    </div>
  )
}

export default Skill
