import styled from "styled-components";
import styles from "./Body.module.css";
import styles1 from "./Body2.module.css";
import { useContext, useEffect, useState } from "react";
import { PrContent } from "../contexts/prContent";
import mouse1 from "../assets/마우스.png"
import nature from "../assets/자연.jpg"
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

function Body2({ content, content2 }) {
  const ImgWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    color: white;
  `;

const ImgWraper2 = styled.div`
        width: 15px;
        height: 20px;
        object-fit: cover;
        margin: 16px 0 8px 0;
        color: white;
    `
  const temp = useContext(PrContent)
  const {cardFlipped, onClick} = temp;

  const [time, setTime] = useState(false);
  const [time2, setTime2] = useState(false);
  const [time3, setTime3] = useState(false);
  const [time4, setTime4] = useState(false);

  useEffect(() => {
    const timer4 = setTimeout(() => {
      setTime4(true);
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    return () => clearTimeout(timer4);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(true);
    }, 2000);

    // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setTime2(true);
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    return () => clearTimeout(timer2);
  }, []);
  useEffect(() => {
    const timer3 = setTimeout(() => {
      setTime3(true);
    }, 3500);

    // 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
    return () => clearTimeout(timer3);
  }, []);
  return (
    <>
    {/* 맨처음 화면에서 이동했을때 한번만 보여지는 화면 */}
      {(content && !content2) && (
        <div className={styles.card_container}>
          <div className={styles.wrap} >
            <div className={`${cardFlipped ? styles.card1 : ""}`}>
              {cardFlipped ? (<div className={styles.back_wrap2}>
                    <h2>Name : 전준희</h2>
                    <h3>Gender : 남자</h3>
                    <h3>Date of Birth : 1999.03.28 / (만) 24세</h3>
                    <h3>Education : 배재대학교 컴퓨터공학과 졸업</h3>
              </div>) : (<div className={styles.back_wrap1}>
                    <h2>이름 : 전준희</h2>
                    <p>성별 : 남</p>
                    <p>나이 : 만(24세)</p>
                    <p>학력 : 배재대학교 컴퓨터공학과 졸업</p>
              </div>)}
              
            </div>
            <div className={`${cardFlipped ? styles.card2 : ""}`}>
              {cardFlipped && (
                <div className={styles1.skill}>
                  <h1 className={styles1.skill_h1}>
                    <img className={styles1.skill_img} src={skill}/>
                    MY Skill
                    </h1>
                  <div className={styles1.skill_item}>
                    <div className={styles1.item}>
                      <img src={html}/>
                      <div className={styles1.bar_wrap}>
                        <div className={styles1.bar}></div>
                        <div className={styles1.bar_html}>90%</div>
                      </div>
                    </div>
                    <div className={styles1.item}>
                      <img src={css}/>
                      <div className={styles1.bar_wrap}>
                        <div className={styles1.bar}></div>
                        <div className={styles1.bar_html}>90%</div>
                      </div>
                      </div> 
                    <div className={styles1.item}>
                      <img src={react}/>
                      <div className={styles1.bar_wrap}>
                        <div className={styles1.bar}></div>
                        <div className={styles1.bar_react}>80%</div>
                      </div>
                      </div>
                    <div className={styles1.item}>
                      <img src={js}/>
                      <div className={styles1.bar_wrap}>
                        <div className={styles1.bar}></div>
                        <div className={styles1.bar_js}>70%</div>
                      </div>
                      </div>
                    <div className={styles1.item}>
                    <img src={figma}/>
                      <div className={styles1.bar_wrap}>
                      <div className={styles1.bar}></div>
                      <div className={styles1.bar_figma}>60%</div>
                      </div>
                      </div>
                    <div className={styles1.item}>
                    <img src={firebase}/>
                      <div className={styles1.bar_wrap}>
                      <div className={styles1.bar}></div>
                      <div className={styles1.bar_firebase}>40%</div>
                      </div>
                      </div>
                    <div className={styles1.item}>
                    <img src={git}/>
                      <div className={styles1.bar_wrap}>
                      <div className={styles1.bar}></div>
                      <div className={styles1.bar_git}>30%</div>
                      </div>
                    </div>
                </div>
              </div>)}
              
            </div>
            {!cardFlipped && (
            <div className={`${styles.introduce}`}>
              간략한 소개 입니다. 카드를 클릭해 보세요!!
            </div>)}
            
            <div onClick={onClick} className={`${styles.card} ${cardFlipped ? styles.flipped : ""}`}>
              
              <div className={styles.card_front}>
                <div className={styles.front_wrap}>
                  {/* <img className={styles.nature_img} src={nature}/>
                <div className={styles.mouse1_wrap}>
                  <img  className={styles.mouse1} src={mouse1} />
                </div> */}
                
                <h2>MY Portfolio</h2>
                <div>

                    <p>React로 만든 Portfolio 입니다.</p>
                    <p style={{textAlign:"center"}}>감사합니다!!</p>
                </div>
                    <ImgWraper2>
                    <img  className={styles.mouse} src={mouse1} />
                  </ImgWraper2>
                </div>
              </div>
              <div className={styles.card_back}>
                <div className={styles.back_wrap}>
                <img className={styles.nature_img} src={nature}/>
                <div className={styles.mouse1_wrap}>
                  {/* <img  className={styles.mouse1} src={mouse1} /> */}
                  <div className={styles.mouse1}>My Profile</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* nav바로 JN을 클릭했을때 계속해서 보여지는 화면 */}
      {content2 && (
        <>
          <div className={styles1.main2_wrap}>
            <div className={styles1.main2_content}>
              <div className={styles1.bulbwrap}>
                <img className={styles1.bulbBe} src={bulbBe}/>
                <img className={styles1.bulbAf} src={bulbAf}/>
              </div>
              <span className={styles1.hag}>항상</span>
              <span className={`${time4 && styles1.main2_content_item2}`}>생</span><span className={`${time && styles1.main2_content_item2}`}>각</span>하고 <span className={`${time2 && styles1.main2_content_item3}`}>고</span><span className={`${time3 && styles1.main2_content_item3}`}>민</span>하는<span className={styles1.item4}> 개발자 <span style={{fontSize:"32px"}}>전준희</span>입니다.</span>
              </div>
          </div>
        </>
      )}
    </>
  );
}

export default Body2;
