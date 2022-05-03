import React from 'react'
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata'
import { createSearchParams, useNavigate } from 'react-router-dom';

const Question = () => {

  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    {id:"EI", score:0},
    {id:"SN", score:0},
    {id:"TF", score:0},
    {id:"JP", score:0},
  ]);

  // console.log(totalScore);

  const navigate = useNavigate();

  const handleClickAnswer = (add, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + add } : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  // const handleClickButton = (type, no) =>{
    
  //   if(type === "EI"){
  //     // 기존 스코어에 더할 값을 계산
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id:"EI", score: addScore};
      
  //     // splice로 새로운 객체를 해당 객체 대체
  //     totalScore.splice(0, 1, newObject);
      
  //   }else if(type === "SN"){
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id:"SN", score: addScore};
  //     totalScore.splice(1, 1, newObject);
      
  //   }else if(type === "TF"){
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id:"TF", score: addScore};
  //     totalScore.splice(2, 1, newObject);
      
  //   }else if(type === "JP"){
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id:"JP", score: addScore};
  //     totalScore.splice(3, 1, newObject);
  //   }


  //   setQuestionNo(questionNo + 1);
  // }

  // const handleClickButtonB = (type, no) =>{
  //   if(type === "EI"){
  //     // 기존 스코어에 더할 값을 계산
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id:"EI", score: addScore};
      
  //     // splice로 새로운 객체를 해당 객체 대체
  //     totalScore.splice(0, 1, newObject);
      
  //   }else if(type === "SN"){
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id:"SN", score: addScore};
  //     totalScore.splice(1, 1, newObject);
      
  //   }else if(type === "TF"){
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id:"TF", score: addScore};
  //     totalScore.splice(2, 1, newObject);
      
  //   }else if(type === "JP"){
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id:"JP", score: addScore};
  //     totalScore.splice(3, 1, newObject);
  //   }    
  //   setQuestionNo(questionNo + 1);
  // }

  return(
    <Wrapper>
      <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100} style={{ marginTop: '20px'}} />
      <Title> {QuestionData[questionNo].title} </Title>
      <ButtonGroup>
        <Button style={{ width: '40%', minHeight:"200px", fontSize:"15pt"}} onClick={()=>handleClickAnswer(1,QuestionData[questionNo].type)} >{QuestionData[questionNo].answera}</Button>
        <Button style={{ width: '40%', minHeight:"200px", fontSize:"15pt", marginLeft:"20px"}} onClick={()=>handleClickAnswer(0,QuestionData[questionNo].type)}>{QuestionData[questionNo].answerb}</Button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Question ;

const Wrapper = styled.div`
  // background-color : pink;
  height : 100vh;
  width : 100%;
`

const Title = styled.div`
  font-size :  30pt;
  text-align: center;
  margin-top : 40px;
  font-family: "Happiness-Sans-Regular";
  `
const ButtonGroup = styled.div`
  display:flex;
  flex-direction : row;
  align-items : center;
  justify-content: center;
  font-family: "Happiness-Sans-Regular";
`  