import React from "react";
import "./CardFullImageTitle.css";
import styled from "styled-components";

export default function CardFullImageTitle({
  rowsItem = 3,
  rowsGap = "10px",
  cardPadding = "10px",
  title = "Please Import some title",
  image = "",
  button = function () {},
}) {
  const Button = styled.div`
    transition-duration: 0.3s;
    transform: translateY(50px);
    opacity: 0;
    button {
      background-color: #22a8ba;
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1rem;
      padding: 1rem;
      border: none;
      border-radius: 10px;
      /* identical to box height */

      color: #ffffff;
    }
  `;
  const Title = styled.div`
    transition-duration: 0.3s;
    transform: translateY(50px);
    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 32px;

      color: #ffffff;
    }
  `;
  const Wrapper = styled.div`
    transition-duration: 0.3s;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    padding: ${cardPadding};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: calc((90vw / ${rowsItem}));
    overflow: hidden;
  `;
  const Outer = styled.div`
    width: calc(((100% / ${rowsItem}) - ${rowsGap}));
    @media screen and (max-width: 450px) {
      width: calc(((100% / ${rowsItem - 1}) - ${rowsGap}));
    }

    border-radius: 20px;
    &:hover ${Wrapper} {
      transition-duration: 0.3s;

      box-shadow: 0px -176px 77px -58px #102b3f inset;
      -webkit-box-shadow: 0px -176px 77px -58px #102b3f inset;
      -moz-box-shadow: 0px -176px 77px -58px #102b3f inset;
    }
    &:hover ${Button} {
      transition-duration: 0.3s;
      transform: translateY(0px);
      opacity: 1;
    }
    &:hover ${Title} {
      transition-duration: 0.3s;
      transform: translateY(0px);
    }
  `;

  return (
    <>
      <Outer className="card-full-image-title">
        <Wrapper
          className="card-full-image-title__wrapper"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <Title className="card-full-image-title__title">
            <h2>{title}</h2>
          </Title>
          {button ? (
            <Button className="card-full-image-title__button">
              <button onClick={button}>Detail</button>
            </Button>
          ) : (
            ""
          )}
        </Wrapper>
      </Outer>
    </>
  );
}
