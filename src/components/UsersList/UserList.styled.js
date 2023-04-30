import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Btn = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  width: 196px;
  margin-top: 26px;
  margin-bottom: 36px;
  padding: 14px 28px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  transition: transform 500ms ease-out 100ms;

  &:hover {
    transform: scale(1.05);
    background-color: #5cd3a8;
  }
`;
