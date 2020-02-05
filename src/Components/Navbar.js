import React from 'react'
class Navbar extends React.Component{
  render() {
      return (
      <>
        <nav className="navbar navbar-light" style={{background:"#563D7C"}}>
          <a className="navbar-brand ml-2" href="#" style={{color:"#f0ad4e"}}>
              Mobile Shop
          </a>
        </nav>
      </>  
      )
  }
}
export default Navbar