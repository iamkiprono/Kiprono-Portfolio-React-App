import React from 'react'
import "../Skills/Skills.css"
import one from "../../assets/html.svg"
import two from "../../assets/css.svg"
import three from "../../assets/js.svg"
import four from "../../assets/react.svg"

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