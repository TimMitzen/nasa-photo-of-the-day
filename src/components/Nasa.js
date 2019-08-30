
import React from "react";
import "../App.css";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 4rem;
  display: flex;
  justify-content: center;

  `;

const Paragraph = styled.p`
   display: flex;
   justify-content: center;
   margin-right: 300px;
   margin-left: 300px;
   border: 1px solid black;
   padding: 15px;
   border-radius: 5%;
   background-color: black;
   color: white;
`;

const H3 = styled.h3`
font-size: .8rem;
display:flex;
justify-content: center;

`;
const PhotoCard = (props) => {

 return(
  <div>
   
 <div className="Heading">
      
      <Title>
      Tim's Nasa Picture Page
      </Title>
     
    </div>
    <Title>
   {props.title}
   </Title>
   
   <img src ={props.picture} alt="Nasa" title ="picture"></img>
   
   <Paragraph>
     {props.description}
   </Paragraph>
   <H3>Click Button for another picture</H3>
</div>
);
}

 export default PhotoCard; 