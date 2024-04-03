import styled from "styled-components";
import computer from "../assets/컴퓨터2.jpg"
import mouse from "../assets/마우스.png"
import styles from "./Body1.module.css"
function Body1({onClick}){
    const ImgWraper = styled.div`
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    `
    const ImgWraper2 = styled.div`
        width: 100%;
        height: 100%;
        object-fit: cover;
        padding-top: 16px;
    `
    return(
        <>
            <div className={styles.body_container}>
            <ImgWraper> 
                <img className={styles.img} src={computer}/>
            </ImgWraper>
            <div onClick={onClick} className={styles.pos}>
                <h1 className={styles.main}>신입 프론트개발자를 희망하는 전준희 입니다.
                    <div className={styles.content}>잘 부탁드립니다.</div>
                </h1>
                <div onClick={onClick} className={styles.main1}>
                    <ImgWraper2>
                        <img  className={styles.mouse} src={mouse} />
                    </ImgWraper2>

                </div>
                {/* 클릭하는 부분 만들어주고 애니메이션 효과도 만들어준다. */}
                
                <div className={styles.click}>클릭해보세요!!</div>
            </div>
            </div>
        </>
    )
}

export default Body1;