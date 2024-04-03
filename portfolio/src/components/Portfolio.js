import styles from "./Portfolio.module.css"
import buddiz from "../assets/버디.jpg"
import FTT from "../assets/FTT.jpg"
import 사이트 from "../assets/사이트.jpg"
import { useState } from "react"
import Portfoliohover from "./Portfoliohover"
// import Portfoliohover from "./Portfoliohover"

function Portfolio(){
    const [buddizClick, setBuddizClick] = useState("")
    console.log(buddizClick);
    const handlebuddizclick = (data)=>{
        setBuddizClick(data)
        console.log(data);
    }
    

    return(
        <>
            <div className={styles.container}>
                <div className={styles.Portfolio}>
                <h1 className={styles.h1}>MY Portfolio</h1>
                    <div className={styles.Portfolio_wrap1}>
                        <div onClick={() => handlebuddizclick("0")} className={styles.wid} >
                            <div className={styles.buddiz_container}>
                                <img  className={styles.buddiz} src={buddiz} alt=""/>
                            </div>
                        </div>
                            <p>이미지를 클릭해보세요</p>
                        <div onClick={() => handlebuddizclick("1")} className={styles.wid2} >
                            <div className={styles.buddiz_container1}>
                                    <img className={styles.FTT} src={FTT} alt=""/>  
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.Portfolio_wrap2}>
                        <div onClick={() => handlebuddizclick("2")}  className={styles.wid3}>
                            <div className={styles.buddiz_container2}>
                                <img className={styles.site} src={사이트} alt=""/>
                            </div>
                            
                        </div>
                        
                    </div>
                    {
                        buddizClick === "0" ? <Portfoliohover buddizClick={buddizClick}  setBuddizClick={setBuddizClick} /> : buddizClick === "1" ? <Portfoliohover buddizClick={buddizClick} setBuddizClick={setBuddizClick} /> : buddizClick === "2" ?<Portfoliohover buddizClick={buddizClick} setBuddizClick={setBuddizClick} />: ""
                        // buddizClick? <Portfoliohover setBuddizClick={setBuddizClick} /> : ""
                    }
                </div>
            </div>
        </>
    )
}

export default Portfolio;