import styels from "./Features.module.css"
import img1 from "../../assets/학원.jpg"
import img2 from "../../assets/학원2.jpg"
import img3 from "../../assets/학원3.jpg"
import { useState } from "react"
import Img1 from "./Img1"
import Img2 from "./Img2"
import Img3 from "./Img3"
import Education from "../../assets/교육.jpg"
function Features(){
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    // 1 ---------------------------------
    const handlehover1 = () =>{
        setHover1(true)
        setHover2(false)
        setHover3(false)
    }
    // const handlehoverout1 = () =>{
    //     setHover1(false)
    // }
    // 2-----------------------------------
    const handlehover2 = () =>{
        setHover2(true)
        setHover1(false)
        setHover3(false)
    }
    // const handlehover2out = () =>{
    //     setHover2(false)
    // }
    // 3----------------------------------
    const handlehover3 = () =>{
        setHover3(true)
        setHover1(false)
        setHover2(false)
    }
    // const handlehover3out = () =>{
    //     setHover3(false)
    // }
    return(
        <div className={styels.container}>
            <div className={styels.left}>
                <div className={styels.name_wrap}>
                    <div className={styels.name}>DW아카데미 학원수료증</div>
                </div>
            
                <div className={styels.left_wrap}>
                    <div className={styels.left_wrap_left}>
                        <div onMouseEnter={handlehover1}  className={styels.img_wrap}>
                            <img src={img1} alt="수료증1"/>
                        </div>
                        <div onMouseEnter={handlehover2}  className={styels.img_wrap}> 
                            <img src={img2} alt="수료증1"/>
                        </div>
                        <div onMouseEnter={handlehover3}  className={styels.img_wrap}>
                            <img src={img3} alt="수료증1"/>
                        </div>
                    </div>
                    <div className={styels.left_wrap_right}>
                        <div className={styels.name1}> &#8592; 이미지에 마우스를 올려 자세히 보기</div>
                        <div className={styels.hover }>
                            {hover1 ? <Img1 /> : hover2 ? <Img2 />: hover3 ? <Img3 /> : <Img1 /> }
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styels.right}>
                    <img src={Education}/>
            </div>

        </div>
    )
}


export default Features;