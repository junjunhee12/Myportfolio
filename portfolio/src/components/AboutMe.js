
import styles from "./About.module.css"
import css from "../assets/CSS3.jpg"
import figma from "../assets/Figma.jpg"
import firebase from "../assets/Firebase.jpg"
import html from "../assets/Html 5.jpg"
import react from "../assets/React Native.jpg"
import git from "../assets/git.jpg"
import js from "../assets/js.jpg"
import skill from "../assets/skill.jpg"
import bulbBe from "../assets/bulbBe.svg"
import bulbAf from "../assets/buldAf.svg"
function AboutMe(){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.h1}>AboutMe</h1>
                    <div></div>
                    <div className={styles.AboutMe_wrap}>
                        <div>
                            <p>이름 : 전준희</p>
                        </div>
                        <div>
                            <p>생년월일 : 99.03.28</p>
                        </div>
                        <div>
                            <p>주소지 : 대전광역시 동구</p>
                        </div>
                        <div>
                            <p>연락처 : 010-2387-7417</p>
                        </div>
                        <div>
                            <p>이메일 : wwg0328@naver.com</p>
                        </div>
                        <div>
                            <p>학력 : 배재대학교(컴퓨터공학)</p>
                        </div>  
                        
                        

                        
                        

                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.left}>
                    <h1 className={styles.h1}>MY Skill</h1>
                    <div className={styles.skill_wrap}>
                        <img src={html}/>
                        <div className={styles.skill_item}>
                            <div className={styles.bar}></div>
                            <div className={styles.bar_html}>90%</div>
                        </div>
                    </div>
                    <div className={styles.skill_wrap}>
                        <img src={css}/>
                        <div className={styles.skill_item}>
                            <div className={styles.bar}></div>
                            <div className={styles.bar_css}>90%</div>
                        </div>
                    </div>
                    <div className={styles.skill_wrap}>
                        <img src={react}/>
                        <div className={styles.skill_item}>
                            <div className={styles.bar}></div>
                            <div className={styles.bar_react}>80%</div>
                        </div>
                    </div>
                    <div className={styles.skill_wrap}>
                        <img src={js}/>
                        <div className={styles.skill_item}>
                            <div className={styles.bar}></div>
                            <div className={styles.bar_js}>70%</div>
                        </div>
                    </div>
                    <div className={styles.skill_wrap}>
                        <img src={figma}/>
                        <div className={styles.skill_item}>
                            <div className={styles.bar}></div>
                            <div className={styles.bar_figma}>60%</div>
                        </div>
                    </div>
                    <div className={styles.skill_wrap}>
                        <img src={firebase}/>
                        <div className={styles.skill_item}>
                            <div className={styles.bar}></div>
                            <div className={styles.bar_firebase}>40%</div>
                        </div>
                    </div>
                    <div className={styles.skill_wrap}>
                        <img src={git}/>
                        <div className={styles.skill_item}>
                            <div className={styles.bar}></div>
                            <div className={styles.bar_git}>30%</div>
                        </div>
                    </div>
                    </div>

                    <div className={styles.right}>  
                        <h1 className={styles.h1}>소개</h1>
                        <div>
                        저는 프론트엔드 웹 개발자로서 열정적으로 공부하고 있는 전준희입니다. React와 JavaScript를 주로 다루며, 웹 개발을 통해 사용자 경험을 개선하는 것을 즐기고 있습니다. 이전에는 [과거 경험 및 프로젝트]를 통해 [특정 역량 또는 경험]을 쌓았습니다. 이제는 [현재 목표 및 진행 중인 프로젝트]에 집중하며, 더 나은 소프트웨어를 만들기 위해 노력하고 있습니다. 앞으로도 항상 최선을 다하겠습니다. 감사합니다!!

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;