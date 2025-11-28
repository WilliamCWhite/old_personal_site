import "../styles/About.css"
import Skill from "./Skill"


function AboutSlide() {

  return (
    <div className="about-container">
      <div className="section-1">
        <p>
          Hi, I'm <span className="yellow">William</span>, a <span className="cyan">Software Engineer</span> studying <span className="blue">Computer Science</span> and <span className="purple">Philosophy</span> at <span className="red">Colgate University</span>.
          I love <span className="green">problem solving</span> and <span className="cyan">getting lost</span> in the <span className="yellow">experience</span> of <span className="blue">making things</span>.
          This website and some of my <span className="purple">projects</span> are hosted on an <span className="red">EC2 instance</span> running an <span className="green">NGINX web server</span>, a <span className="blue">PostgreSQL database</span>, and <span className="blue">Docker containers</span> for the <span className="cyan">backend</span>.
          It shows off <span className="yellow">the projects</span> I've <span className="purple">(finished)</span> working on, but there's <span className="red">always</span> <span className="green">more to come</span><span className="yellow">!</span>
        </p>
      </div>
      <div className="divider"></div>
      <div className="section-2">
        <p>
          Here's all the <span className="purple">skills</span> I've <span className="green">developed</span> throughout my <span className="blue">programming experience</span> so far:
        </p>
        <div className="skills-list">
          <Skill skillName="react"/>
          <Skill skillName="golang"/>
          <Skill skillName="postgres"/>
          <Skill skillName="typescript"/>
          <Skill skillName="python"/>
          <Skill skillName="docker"/>
          <Skill skillName="tailwind"/>
          <Skill skillName="nodejs"/>
          <Skill skillName="java"/>
          <Skill skillName="nginx"/>
          <Skill skillName="aws"/>
          <Skill skillName="cSharp"/>
          <Skill skillName="c"/>
          <Skill skillName="git"/>
        </div>
        <p>
          And here's what I'm <span className="yellow">learning right now:</span>
        </p>
        <div className="skills-list">
          <Skill skillName="flutter"/>
          <Skill skillName="django"/>
        </div>
      </div>
    </div>

    
  )

}

export default AboutSlide
