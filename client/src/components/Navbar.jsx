import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <div className="navBar"> 
      <Link to='/'>Home</Link>
      <Link to='/register'>register</Link>
      <Link to='/login'>login</Link>
    </div>
  )
}

