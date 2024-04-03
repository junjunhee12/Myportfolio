import styled from "styled-components";
import computer from "../assets/컴퓨터2.jpg"
import mouse from "../assets/마우스.png"
import styles from "./Body.module.css"
import Body1 from "./Body1";
import Body2 from "./Body2";
import { useContext, useState } from "react";
import { PrContent } from "../contexts/prContent";
function Body(){
    const temp = useContext(PrContent)
    console.log(temp);
    const {nav, setNav, content2, setContent2 , handleClick2, cardFlipped } = temp;
  // const handleClick = () =>{
  //   setNav(true)
  //   setTimeout(()=>{
  //     setContent(true)
  //   },2500)
  // }
 
  const [content, setContent] = useState(false)

    const handleClick = () =>{
      setNav(true)
      setTimeout(()=>{
        setContent(true)
      },1200)
    }
  // 신입 개발자 밑에 클릭버튼 만들고 클릭하면 Nav -> Nav2로 바꿔준다.
  return (
    <>
       <div className={`${nav ? `${styles.height1} ${styles.transition}` : ` ${styles.transition}`}`}>
        {/* <div className={nav? styles.won : ""} > */}
          {nav ? <Body2 onClick={handleClick2} content={content} content2={content2} /> : <Body1 onClick={handleClick}/>}
          
        </div>
      {/* </div> */}
    </>
  );
}

export default Body;