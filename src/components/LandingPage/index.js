import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tedx from '../../images/TedX.png'
import style from './style.module.scss'
import Container from '../Container/index'

const LandingPage =()=>
(
  

<div className={style.container}>
<Container>
    <div className={style.herocontent}>
        <p className={style.herotitle}><span className={style.red}>TEDx</span> SCEM 2019</p>
        <p className={style.heroslogan}>"How unpredictable are you"</p>
        <Link className={style.HeroButton}>Get Tickets</Link>
    </div>
</Container>
</div>


)


export default LandingPage;
