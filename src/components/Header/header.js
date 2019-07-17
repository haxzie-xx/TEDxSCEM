import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TedLogo from '../../images/TEDxSCEM5.png';
import NavBar from '../Navbar/index'
import style from './style.module.css';
const Header = ({ siteTitle }) => (
  <div className={style.sticky}>
  <NavBar />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
