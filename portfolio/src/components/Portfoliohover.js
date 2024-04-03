import styles from "./Portfoliohover.module.css"
import buddiz from "../assets/버디.jpg"
import buddiz1 from "../assets/로그인1 (1).jpg"
import buddiz2 from "../assets/로그인2.jpg"
import buddiz3 from "../assets/로그인3.jpg"
import FTT from "../assets/FTT.jpg"
import site from "../assets/사이트.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper와 SwiperSlide import
import 'swiper/css'; // Swiper의 CSS 파일 import
import { useState } from "react"
import { Img1, Img2, Img3 } from "./Imghover"

function Portfoliohover({setBuddizClick, buddizClick}) {
    console.log(buddizClick);
    console.log("setBuddiz", setBuddizClick);
    
    const del = () => {
        setBuddizClick(false);
    }
    const del1 = ()=>{
        setImg(false)
        setImg2(false)
        setImg3(false)
    }
    const [img, setImg] = useState(false)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)
    const imgClick = ()=>{
        setImg(true)
        setImg2(true)
        setImg3(true)
    }
        
   
    return (
        <>
            {
                buddizClick === "0" && (
                    <>
                        <div className={styles.container}>
                <div className={styles.left}>
                    <img onClick={imgClick} src={buddiz} alt=""/>
                    {
                        img && (
                            <Img1 del1={del1}/>
                        )
                    }
                </div>
                <div className={styles.right}>
                    <div className={styles.right_wrap}>
                        <h1>Buddiz</h1>
                        <p>fdgfdgfdgfd</p>
                    </div>
                    
                </div>
            </div>
            <button className={`${img ? styles.buttonDel : styles.button}`} onClick={del}>X</button>
                    </>
                )
            }
            {
                buddizClick === "1" && (
                    <>
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <img onClick={imgClick} src={FTT} alt="FTT" />
                                {
                        img2 && (
                            <Img2 del1={del1}/>
                        )
                    }
                            </div>
                            <div className={styles.right}>
                                <h1>FTT</h1>
                                <p>fdgfdgfdgfd</p>
                            </div>
                        </div>
                        <button className={`${img ? styles.buttonDel : styles.button}`} onClick={del}>X</button>
                    </>
                )
            }
            {
                buddizClick === "2" && (
                    <>
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <img onClick={imgClick} src={site} alt="Portfolio" />
                                {
                        img3 && (
                            <Img3 del1={del1}/>
                        )
                    }
                            </div>
                            <div className={styles.right}>
                                <h1>Portfolio</h1>
                                <p>fdgfdgfdgfd</p>
                            </div>
                        </div>
                        <button className={`${img ? styles.buttonDel : styles.button}`} onClick={del}>X</button>
                    </>
                )
            }
        </>
    )
}

export default Portfoliohover;
