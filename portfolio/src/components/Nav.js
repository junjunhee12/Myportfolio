
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css"
import { useContext, useState } from "react";
import { PrContent } from "../contexts/prContent";
function Nav({nav}){
    const temp = useContext(PrContent)
    const {content2, handleClick2,onClickAbout,about,jn,onClickContact, contact,onClickPortfolio,portfolio,onClickFeatures,features} = temp;
    // const onClick = () =>{
    //     setContent2(false)
    // }
    console.log(content2);
    

    return(
        <>
            <div className={`${features && styles.header_container_features } ${portfolio && styles.header_container_portfolio } ${contact && styles.header_container_contact } ${about && styles.header_container_about } ${jn && styles.header_container_jn}  ${nav ? `${styles.header_container} ${styles.transition}` : `${styles.header_container} ${styles.transition}`}`}>
            {/* <div className={nav? styles.won : styles.won1} > */}
                <h1>
                    <Link to={"/"}>
                        <button onClick={handleClick2} className={nav ? styles.navbtn1 : styles.navbtn1}>JN</button>
                    </Link>
                </h1>
                <nav>
                    <ul className={styles.nav_container}>
                        <li >
                            {/* {nav ? (<NavLink to={"about"}>
                                <button onClick={onClick2} className={ nav ? styles.navbtn :styles.navbtn}>About Me</button>
                            </NavLink>):( <button className={ nav ? styles.navbtn :styles.navbtn}>About Me</button>)} */}
                            <Link to={"about"}>
                                {/* <button onClick={onClickAbout} className={ nav ? styles.navbtn :styles.navbtn}>About Me</button> */}
                                <button onClick={onClickAbout} className={` ${  about ? styles.header_container_about: styles.navbtn}`}>About Me</button>
                            </Link>
                        </li>
                        <li>
                            {/* {nav ? (<NavLink to={"features"}>
                                <button onClick={onClick2} className={nav ? styles.navbtn :styles.navbtn}>Features</button>
                            </NavLink>) : (<button className={nav ? styles.navbtn :styles.navbtn}>Features</button>)} */}
                            <Link to={"features"}>
                                <button onClick={onClickFeatures} className={` ${  features ? styles.header_container_features: styles.navbtn}`}>Education</button>
                            </Link>
                        </li>
                        <li>
                            {/* {nav ? (<NavLink to={"portfolio"}>
                                <button onClick={onClick2} className={nav ? styles.navbtn :styles.navbtn}>Portfolio</button>
                            </NavLink>) : (<button className={nav ? styles.navbtn :styles.navbtn}>Portfolio</button>)}  */}
                            <Link to={"portfolio"}>
                                <button onClick={onClickPortfolio} className={` ${  portfolio ? styles.header_container_portfolio: styles.navbtn}`}>Portfolio</button>
                            </Link>
                        </li>
                        <li>
                            {/* {nav ? (<NavLink to={"contact"}>
                                <button onClick={onClick2} className={nav ? styles.navbtn :styles.navbtn}>Contact</button>
                            </NavLink>) : (<button className={nav ? styles.navbtn :styles.navbtn}>Contact</button>)} */}
                            <Link to={"contact"}>
                                {/* <button onClick={onClickContact} className={ (nav && contact ) ? styles.header_container_contact :styles.navbtn}>Contact</button> */}
                                <button onClick={onClickContact} className={` ${contact ? styles.header_container_contact : styles.navbtn}`}>Contact</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            {/* </div> */}
            </div>
        </>
    )
}

export default Nav;