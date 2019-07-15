import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tedx from '../../images/TedX.png'
import style from './style.module.css'
import tedlogo from '../../images/TEDxSCEM5.png'


const Navbar =()=>
(
    <div className={style.container}>
        <img src={tedlogo} width="200px" />
        <div className={style.pages}>
            <Link className={style.links}>Home </Link>
            <Link className={style.links}>Speakers</Link>
            <Link className={style.links}>Team</Link>
            <Link className={style.links}>Contact</Link>

        </div>

    </div>

    
)


export default Navbar;