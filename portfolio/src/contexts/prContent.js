import React, { useEffect } from "react";
import { useState, createContext } from "react";

// context 객체 생성
const PrContent = createContext();

export function PrContentProvider({ defaultValue = "ko", children }) {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // 페이지를 닫을 때만 이벤트 처리
      if (event) {
        // 스토리지 값 삭제
        localStorage.removeItem('about');
        localStorage.removeItem('contact');
        localStorage.removeItem('portfolio');
        localStorage.removeItem('abfeaturesout');
      }
    };

    // beforeunload 이벤트 리스너 등록
    // window.addEventListener('beforeunload', handleBeforeUnload);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    const [nav, setNav] = useState(false)
    const [content2 , setContent2] = useState(false)
    
    const [jn, setJn] = useState(false);
    const handleClick2 = () =>{
      setJn(true)
      setAbout(false)
      setContact(false)
      setPortfolio(false)
      setFeatures(false)
      setTimeout(()=>{
        setContent2(true)
      },1200)
    }


    const [cardFlipped, setCardFlipped] = useState(false);
    const [card1Clicked, setCard1Clicked] = useState(false);
    const [footer, setFooter] = useState(false)
    // const [about, setAbout] = useState(false);
    const [about, setAbout] = useState(localStorage.getItem('about') === 'true');
    const [contact, setContact] = useState(localStorage.getItem('contact') === 'true');
    const [portfolio, setPortfolio] = useState(localStorage.getItem('portfolio') === 'true');
    const [features, setFeatures] = useState(localStorage.getItem('features') === 'true');

    useEffect(() => {
        // about 상태가 변경될 때마다 로컬 스토리지에 저장
        localStorage.setItem('about', about);
    }, [about]); // about 상태가 변경될 때만 실행
    useEffect(() => {
        localStorage.setItem('contact', contact);
    }, [contact]); 
    useEffect(() => {
        localStorage.setItem('portfolio', portfolio);
    }, [portfolio]); 
    useEffect(() => {
        localStorage.setItem('features', features);
    }, [features]); 
    // nav바 색깔 변환------------------------
    const onClickAbout = () =>{
      setAbout(true)
      setJn(false)
      setContact(false)
      setPortfolio(false)
      setContent2(false)
      setFeatures(false)
      setFooter(true)
  }
  // Contact 배경 변환
    const onClickContact = () =>{
      setContact(true)
      setAbout(false)
      setJn(false)
      setPortfolio(false)
      setContent2(false)
      setFeatures(false)
      setFooter(true)
      // localStorage.removeItem('about')
  }
    const onClickPortfolio = () =>{
      setPortfolio(true)
      setAbout(false)
      setJn(false)
      setContact(false)
      setContent2(false)
      setFeatures(false)
      setFooter(true)
      // localStorage.removeItem('about')
  }

  const onClickFeatures = () =>{
    setFeatures(true)
    setPortfolio(false)
      setAbout(false)
      setJn(false)
      setContact(false)
      setContent2(false)
      setFooter(true)
  }
  
  // 색깔 변환 끝 --------------------------
    const onClick = () => {
      if (!cardFlipped) {
        setCard1Clicked(true); 
        setCardFlipped(true); 
      } else {
        setCardFlipped(false); 
      }
    };
  return (
    <PrContent.Provider
      value={{
        nav,
        setNav,
        handleClick2,
        content2,
        setContent2,
        cardFlipped,
        setCardFlipped,
        card1Clicked,
        setCard1Clicked,
        onClick,
        onClickAbout,
        onClickContact,
        footer,
        about,
        setAbout,
        jn,
        contact,
        portfolio,
        onClickPortfolio,
        features,
        onClickFeatures
      }}
    >
      {children}
    </PrContent.Provider>
  );
}

export { PrContent };

// 커스텀 훅 제작 예정 구역?
