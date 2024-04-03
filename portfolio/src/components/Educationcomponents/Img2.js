import img1 from "../../assets/학원2.jpg"
import styles from "./Img1.module.css"
function Img2(){
    return(
        <div>
            <div className={styles.img_wrap}>
                <img src={img1} alt="학원"/>
            </div>
        </div>
    )
}

export default Img2