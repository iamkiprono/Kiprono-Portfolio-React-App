import React from 'react'
import "../Skills/Skills.css"
import one from "../../assets/html.png"
import two from "../../assets/css.png"
import three from "../../assets/js.png"
import four from "../../assets/react.png"

const Skills = () => {
  return (
    <div className='skills'>
        <h1>Skills</h1>
        <div className="card-holder">

        
        <div className="card">
            <img src={one} alt="" />
            <p>HTML</p>
        </div>
        <div className="card">
            <img src={two} alt="" />
            <p>CSS</p>
        </div>
        <div className="card">
            <img src={three} alt="" />
            <p>JavaScript</p>
        </div>
        <div className="card">
            <img src={four} alt="" />
            <p>ReactJS</p>
        </div>
        </div>
    </div>
  )
}

export default Skills