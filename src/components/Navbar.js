//rfc react function base component
import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(Props) {


  return (

    // <nav className=={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}>
    //   <div className=="container-fluid">
    //     <a className=="navbar-brand" href="/">{Props.title}</a>

    //     <div className=={`form-check form-switch text-${Props.enableMode}`}>
    //       <input className=="form-check-input" type="checkbox" onClick={Props.toggle} id="toggleButton" />
    //       <label className=="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {Props.enableMode} mode</label>
    //     </div>
    //   </div>

    // </nav>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{Props.title}</a>
      </div>
    </nav>
  )
}


