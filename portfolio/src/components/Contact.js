import Container from "./Container";
import styles from "./Contact.module.css"
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
function Contact(){
    useEffect(() => {
        emailjs.init()
    }, [])

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [message, setMessage] = useState()
    const [ckeck, setCkeck] = useState(false)

    const emailchange = (e) =>{
        setEmail(e.target.value)
        setCkeck(true)
    }
    console.log(email);
    const namechange = (e) =>{
        setName(e.target.value)
    }
    const messagechange = (e) =>{
        setMessage(e.target.value)
        setCkeck(true)
    }
  
    
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    emailjs.sendForm('service_0dpv9vl', 'template_qyug0qe', form.current, 'E1aULCiLWko3BMO7e')
    .then(() => {
        console.log('성공');
        window.alert("이메일이 성공적으로 보내졌습니다.")
    }, (error) => {
        window.alert("이메일을 보내는데 실패하였습니다.")
        console.log(error.text);
    })
}
    return(
        <>
         <Container>
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h4>CONTACT</h4>
                        <div className={styles.email}>
                            <h2>Contact With Me</h2>
                            <span>전준희에게 Email보내기</span>
                        </div>
                    </div>
                    <div className={styles.contact_me}>
                        <div className={styles.left}>
                            <div className={styles.card}>
                                <div className={styles.icon1}>
                                        <i className={styles.fa_solid1}>중요!</i>
                                </div>
                                    <div className={styles.info_text1}>
                                        <p>이름을 적어주세요!</p>
                                        <p>이메일을 적어주세요!</p>
                                        <p>보낼 내용을 적어주세요!</p>
                                    </div>
                                    </div>
                            <div className={styles.card}>
                                <div className={styles.icon}>
                                        <i className={styles.fa_solid}>이미지</i>
                                </div>
                                    <div className={styles.info_text}>
                                        <h3>phone</h3>
                                        <p>010-1234-5678</p>
                                    </div>
                                    </div>

                                <div className={styles.card}>
                                    <div className={styles.icon}>
                                        <i className={styles.fa_solid}>이미지</i>
                                    </div>
                                    <div className={styles.info_text}>
                                        <h3>email</h3>
                                        <p>wwg0328@naver.com</p>
                                    </div>
                                </div>

                                <div className={styles.card}>
                                    <div className={styles.icon}>
                                        <i className={styles.fa_solid}>이미지</i>
                                    </div>
                                    <div className={styles.info_text}>
                                        <h3>address</h3>
                                        <p>대전광역시 동구 가오동</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.right}>
                                <form ref={form} onSubmit={sendEmail} className={styles.card2}>
                                    <div className={styles.form_group}>
                                        <label for="name">name</label>
                                        <input onChange={namechange} name="from_name" type="text" id="name" value={ name} placeholder="작성자의 이름이나 회사명을 적어주세요" />
                                    </div>
                                    <div className={styles.form_group}>
                                        <label for="email">email</label>
                                        <input onChange={emailchange} name="from_email" type="email" id="email" value={email} autocomplete="off" placeholder="작성자의 이메일을 작성해주세요"/>
                                    </div>
                                    <div className={styles.form_group}>
                                        <label for="msg">contents</label>
                                        <textarea onChange={messagechange} name="message" id="msg" value={message} placeholder="전준희에게 보낼 내용을 작성해주시면 됩니다."></textarea>
                                    </div>
                                    <button type="submit" className={styles.send}>send</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
            </section>
         </Container>
        </>
    )
}

export default Contact;