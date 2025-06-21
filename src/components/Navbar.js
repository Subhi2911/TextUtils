import React from 'react'
import PropTypes from 'prop-types'
import{Link} from "react-router-dom"
import {useState} from 'react'

export default function Navbar(props) {
  const [active, setActive]=useState(null);

  const isActive=(name)=>{
    setActive(name);
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor: props.colour}}>
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${active==='home'?'active':''}`} aria-current='page' to="/" onClick={()=>isActive('home')}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active==='about'?'active':''}`} to="/about" onClick={()=>isActive('about')}>{props.aboutText}</Link>
        </li>
      </ul>
      <div className= 'd-flex'>
        <div className='bg-primary mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height:'25px', width:'25px', borderRadius: "50%" , cursor:'pointer', border:'1px solid black'}}></div>
        <div className='bg-danger mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:'25px', width:'25px', borderRadius: "50%" , cursor:'pointer', border:'1px solid black'}}></div>
        <div className='bg-success mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:'25px', width:'25px', borderRadius: "50%" , cursor:'pointer', border:'1px solid black'}}></div>
        <div className='bg-warning mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height:'25px', width:'25px', borderRadius: "50%" , cursor:'pointer', border:'1px solid black'}}></div>
        <div className='bg-dark mx-2' onClick={()=>{props.toggleMode('dark')}} style={{height:'25px', width:'25px', borderRadius: "50%" , cursor:'pointer', border:'1px solid white'}}></div>
        <div className='bg-white mx-2' onClick={()=>{props.toggleMode('light')}} style={{height:'25px', width:'25px', borderRadius: "50%" , cursor:'pointer', border:'1px solid black'}}></div>
      </div>

      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={()=>{props.toggleMode('null')}} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Toggle Mode</label>
      </div> */}
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

// Navbar.defaultProps ={
//   title: 'Set title here',
//   aboutText: 'Set About Text'
// }




