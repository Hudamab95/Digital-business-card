import React from "react"


export default function Nav(){
    return (
            <nav className="nav">
              <img src={"./images/main-img.jpg"} className="nav--img" />
              <h2 className="nav--title">Huda Mabkhoot</h2>
              <p className="nav--role">Frontend Developer</p>
              <p className="nav--website">HudaMabkhoot.website</p>
              <div className="nav--btns">
                <a className="nav--email" href="mailto:hudamabkhoot@gmail.com"><i className="fa-solid fa-envelope"></i>Email</a>
                <a className="nav--linkedin" href="https://www.linkedin.com/in/huda-mabkhoot/"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                </div>
            </nav>
    )
}
