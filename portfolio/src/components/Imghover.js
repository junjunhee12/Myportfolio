import buddiz1 from "../assets/로그인1 (1).jpg"
import buddiz2 from "../assets/로그인2.jpg"
import buddiz3 from "../assets/로그인3.jpg"
import styles from "./Imghover.module.css"

export function Img1({del1}){
    return(
        <>
            <div className={styles.click_container}>
                            <div>
                                <img src={buddiz1}/>
                            </div>
                            <div>
                                <img src={buddiz2}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                        <div>
                    <button className={styles.click_button} onClick={del1}>나가기</button>
                </div>
            </div>
        </>
    )
}
export function Img2({del1}){
    return(
        <>
            <div className={styles.click_container}>
                            <div>
                                <img src={buddiz1}/>
                            </div>
                            <div>
                                <img src={buddiz2}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                        <div>
                    <button className={styles.click_button} onClick={del1}>나가기</button>
                </div>
            </div>
        </>
    )
}
export function Img3({del1}){
    return(
        <>
            <div className={styles.click_container}>
                            <div>
                                <img src={buddiz1}/>
                            </div>
                            <div>
                                <img src={buddiz2}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                            <div>
                                <img src={buddiz3}/>
                            </div>
                        <div>
                    <button className={styles.click_button} onClick={del1}>나가기</button>
                </div>
            </div>
        </>
    )
}