import styled from 'styled-components';
import Background from '../../images/background.png';

export const Wrapper = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Background}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  border: 8px solid #ebd8ff;
  border-radius: 35px;
  background-repeat: no-repeat;
  background-position: left 50% top 50%, left 0 top 0;
  background-size: contain;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Btn = styled.button`
  font-family: 'Montserrat';
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

export const Text = styled.p`
  margin-top: 26px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 400px;
`;
