import styled from 'styled-components';
import { Div } from '../../styles/globalStyle';

export const BoxProjects = styled(Div.column)`
  width: 100%;
  color: #fff;
`;

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Project = styled(Div.column)`
  width: 90%;
  margin: 20px;
  height: 300px;
  padding: 20px;
  border-radius: 0px 0px 20px 20px;
  color: #000;
  background-color: #fff;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 12px;
  border-image-source: linear-gradient(to left, #ef727a, #ee69a5);
  border-left: none;
  border-right: none;
  border-bottom: none;
`;

export const ButtonSlider = styled.button`
  border: none;
  cursor: pointer;
  font-size: 30px;
  background-color: transparent;
  border-radius: 50%;
  padding: 10px 15px;
  color: #222;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
