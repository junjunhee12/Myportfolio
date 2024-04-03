import { useContext } from "react";
import styles from "./Footer.module.css"
import { PrContent } from "../contexts/prContent";
import Container from "./Container";
function Footer(){
    const temp = useContext(PrContent)
    const {cardFlipped, setContent2, footer, about,contact,portfolio,features} = temp;

    console.log(setContent2);
    return(
        <>
        {(!footer && cardFlipped) && (<div className={styles.box}></div>) }
        {/* <div className={styles.container_wrap}> */}
        <div className={`${styles.transition} ${about ? styles.about :styles.container_wrap} ${features ? styles.features :styles.container_wrap} ${portfolio ? styles.portfolio :styles.container_wrap} ${contact ? styles.contact :styles.container_wrap}  `}>

            {/* <Container className={`${about ? styles.about :styles.container} ${features ? styles.features :styles.container} ${portfolio ? styles.portfolio :styles.container} ${contact ? styles.contact :styles.container}`}> */}
                    <div className={styles.ani}>
                        포트폴리오를 사이트로 만들어준 이유?
                        <div>
                            교육기관에서 OTT와 Buddiz인 2개의 프로젝트를 만들었습니다. 
                            하지만 반응형으로 만들어주지는 못하였습니다. 특히 Buddiz는
                            리액트로 만들어보는 첫 프젝트였기 때문에 리액트와 친해지는 것이 더 중요했습니다.
                            이때문에 포트폴리오는 반응형이 될 수 있게 만들면서 React의 복습을 하기 위해 사이트로 만들어 보았습니다.
                        </div>
                        <div>
                            <div>전화번호 : 010-2387-7417</div>
                            <div>Email : wwg0328@naver.com</div>
                        </div>
                    </div>
            {/* </Container> */}
        </div>
        </>
    )
}

export default Footer;

