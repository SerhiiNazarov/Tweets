import styled from "styled-components";
import { Link } from "react-router-dom";

export const FilterWrapper = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-top: 26px;
  color: #ebd8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Select = styled.select`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
  margin-left: 10px;

  width: 140px;
  box-shadow: inset 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  transition: transform 500ms ease-out 100ms;

  &:hover {
    background-color: #5cd3a8;
  }
`;

export const LinkTo = styled(Link)`
  position: absolute;
  top: 30px;
  right: 50px;
`;

export const Btn = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  width: 196px;
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
