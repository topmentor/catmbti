import React from 'react'

import styled from 'styled-components';
import PangImage from '../assets/goimg.jpeg';
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResultData } from '../assets/data/resultdata'

const Result = () => {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');

  const [resultData, setResultData] = React.useState({});

  React.useEffect(()=>{
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti])


console.log(mbti);

  const handle = () =>{
    // 
    navigate('/question');
  }

  return(
    <Wrapper>
      <Header>예비집사 판별결과</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImage>
          <img src={resultData.image} className="rounded-circle"  width={350} height={350}  ></img>
        </LogoImage>
        <Desc>
          예비집사님과 맞는 고양이는 {resultData.name}입니다. 
        </Desc>
        <Button style={{fontFamily: "Happiness-Sans-Regular"}} onClick={()=>navigate('/question')} >테스트 다시하기 </Button>
      </Contents>
    </Wrapper>
  )
}


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


export default Result ;