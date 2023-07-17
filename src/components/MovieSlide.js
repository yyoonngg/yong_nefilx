import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Carousel from "react-bootstrap/Carousel";

const MovieSlide = ({ movies }) => {
  let size = window.innerWidth;
  let itemNum = 0;
  // console.log(size);
  if(size > 1250){
    itemNum = 5;
  }else if(size > 770){
    itemNum = 3;
  }else if(size > 500){
    itemNum = 2;
  }else{
    itemNum = 1;
  }
  const[item, setItem] = useState(itemNum);
  window.addEventListener('resize', (e)=>{
    //console.log("target",e.target.innerWidth, "x", e.target.innerHeight );
    let width = e.target.innerWidth;
    if(width >= 1250){
      //console.log("width: 1250이상");
      itemNum = 5;
    }else if(width >= 770){
      //console.log("width: 700이상");
      itemNum = 3;
    }else if(width >= 500){
      //console.log("width: 500이상");
      itemNum = 2;
    }else{
      //console.log("width: 500이하 ㅜㅜ")
      itemNum = 1;
    }
    setItem(itemNum);
  })
  //큰사이즈 일때 5개씩
  //중간사이즈 일때 3개씩 
  //중간 작은 사이즈일 때 2개씩
  //작은 사이즈 일때 1개씩
  return (
    <Carousel>
      {(() => {
        console.log("itemNum",item);
        const array = [];
        for (let i = 0; i < movies.results.length/item; i++) {
          array.push(
            <Carousel.Item>
              <Row>
                {(()=>{
                  const colArray = [];
                  for(let j=0; j < item; j++){
                    if(i*item+j > 19){
                      break;
                    }
                    colArray.push(
                      <Col>
                        <MovieCard item={movies.results[(i*item)+j]} />
                      </Col>
                    )
                  }
                  return colArray;
                })()}
              </Row>
            </Carousel.Item>
          );
        }
        return array;
      })()}
    </Carousel>
  );
};

export default MovieSlide;
