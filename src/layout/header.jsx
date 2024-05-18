import { Link } from "react-router-dom"

function Header() {
   return (
      <nav className="page-header #64b5f6 blue lighten-2">
         <div className="container">
            <div className="nav-wrapper">
               <Link to="/" className="brand-logo">
               SimplyRecipes
               </Link>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                     <Link to="/about">About</Link>
                  </li>
                  <li>
                     <Link to="/contact">Contact</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );  
}
export {Header};
