import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaHackerrank,
  FaCode
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/Shivraj97",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/ShivrajNag1997",
  },

  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/shivraj-n-5150a1b2/",
  },
  {
    id: 4,
    icon: <FaHackerrank className="social-icon"></FaHackerrank>,
    url: "https://www.hackerrank.com/ShivrajNag",
  },
  {
    id: 5,
    icon: <FaCode className="social-icon"></FaCode>,
    url: "https://repl.it/@ShivrajNag",
  },

]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
