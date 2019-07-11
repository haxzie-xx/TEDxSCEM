import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TedLogo from '../images/TEDxSCEM5.png';

import styled from 'styled-components';

const NavBar = styled.div`
  padding: 10px;
  background-color: #000000;
  color: white;

  img {
    width: 200px;
  }
`;

const Header = ({ siteTitle }) => (
  <NavBar>
    <img src={TedLogo} alt="tedxscem" />
  </NavBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
