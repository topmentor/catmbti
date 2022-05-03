import React from 'react'
// css-in-js 
import styled from 'styled-components';
import PangImage from '../assets/goimg.jpeg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const handle = () =>{
    // 
    navigate('/question');
  }

  return(
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은</Title>
        <LogoImage>
          <img src={PangImage} className="rounded-circle"  width={350} height={350}  ></img>
        </LogoImage>
        <Desc>
          MBTI 기반 
        </Desc>
        <Button style={{fontFamily: "Happiness-Sans-Regular"}} onClick={handle} >테스트 시작하기 </Button>
      </Contents>
    </Wrapper>
  )
}

export default Home ;

const Wrapper = styled.div`
  // background-color : pink;
  height : 100vh;
  width : 100%;
`

const Header = styled.div`
  font-size :  40pt;
  display : flex;
  justify-content : center;
  align-items: center;
  font-family: "Happiness-Sans-Regular";
`
const Contents = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items: center;
`

const Title = styled.div`
  font-size :  30pt;
  margin-top : 40px;
  font-family: "Happiness-Sans-Regular";
  `
  
const LogoImage = styled.div`
  margin-top : 10px;
  `
  
  const Desc = styled.div`
  font-size :  20pt;
  margin-top : 10px;
  font-family: "Happiness-Sans-Regular";

`