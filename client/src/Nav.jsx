import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
        <NavLink
            to="/shop"
            className={({isActive, isPending}) => 
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Shop
        </NavLink>
    </>
  )
}

export default Nav