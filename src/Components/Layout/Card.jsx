import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
  <div className="container !w-[300px]">
        <div className="skill-box ">
          <div className="flex justify-between">
            <span className="title">Food and Drinks</span>{" "}
            <span className="tooltip text-xs font-Poppins">872.400</span>
          </div>

          <div className="skill-bar">
            <span className="skill-per html"></span>
          </div>
        </div>

        <div className="skill-box ">
          <div className="flex justify-between">
            <span className="title">Shopping</span>{" "}
            <span className="tooltip text-xs font-Poppins">1.378.200</span>
          </div>

          <div className="skill-bar">
            <span className="skill-per Shopping"></span>
          </div>
        </div>


        <div className="skill-box ">
          <div className="flex justify-between">
            <span className="title">Housing</span>{" "}
            <span className="tooltip text-xs font-Poppins">928.500</span>
          </div>

          <div className="skill-bar">
            <span className="skill-per Housing"></span>
          </div>
        </div>


        <div className="skill-box ">
          <div className="flex justify-between">
            <span className="title">Transportation</span>{" "}
            <span className="tooltip text-xs font-Poppins">420.700</span>
          </div>

          <div className="skill-bar">
            <span className="skill-per Transportation"></span>
          </div>
        </div>


        <div className="skill-box ">
          <div className="flex justify-between">
            <span className="title">Vehicle</span>{" "}
            <span className="tooltip text-xs font-Poppins">520.000</span>
          </div>

          <div className="skill-bar">
            <span className="skill-per Vehicle"></span>
          </div>
        </div>



       
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: relative;
    max-width: 500px ;
    width: 100%;
    background: transparent;
 
    border-radius: 7px;
  }

  .container .skill-box {
    width: 100%;
    margin: 25px 0;
  }

  .skill-box .title {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #273240;
  }

  .skill-box .skill-bar {
    height: 8px;
    width: 100%;
    border-radius: 6px;
    margin-top: 6px;
    background: #ECEFF5;
  }

  .skill-bar .skill-per {
    position: relative;
    display: block;
    height: 100%;
    width: 70%;
    border-radius: 6px;
    background: #31ba96;
    animation: progress 0.4s ease-in-out forwards;
    opacity: 0;
  }

  .skill-per.html {
    /*progreso de las diferentes lenguajes*/
    width: 30%;
    animation-delay: 0.1s;
  }

  .skill-per.Shopping {
    /*progreso de las diferentes lenguajes*/
    width: 50%;
    animation-delay: 0.1s;
  }

  .skill-per.Housing {
    /*progreso de las diferentes lenguajes*/
    width: 40%;
    animation-delay: 0.2s;
  }

      .skill-per.Transportation {
    /*progreso de las diferentes lenguajes*/
    width: 20%;
    animation-delay: 0.2s;
  }

    .skill-per.Vehicle {
    /*progreso de las diferentes lenguajes*/
    width: 40%;
    animation-delay: 0.2s;
  }

  @keyframes progress {
    0% {
      width: 0;
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  .skill-per .tooltip {
    position: absolute;
    right: -14px;
    top: -28px;
    font-size: 12px;
    font-weight: 500;
    color: rgb(0, 0, 0);
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 3px;
    background: rgb(226, 226, 226);
    z-index: 1;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background-color: rgb(226, 226, 226);
    transform: translateX(-50%) rotate(45deg);
  }
`;

export default Card;
