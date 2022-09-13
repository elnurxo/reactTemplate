import React from 'react'
import Project from './Project'
import About from './About'
import Contact from './Contact'

function Content() {
  return (
    <>
      {/* Page content */}
      <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
            <Project/>
            <About/>
            <Contact/>
      </div>
    </>
  )
}

export default Content