import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { CartContext } from "../context"
import { MenuItem, StyledHeader } from "../styles/components"

const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="https://i.postimg.cc/6q3pg48v/Logo.png"
          alt="Logo Platzi Swag"
        />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Productos</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="http://www.platzi.cpm">Platzi</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="cart icon"
                />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
