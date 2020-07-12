import styled, { keyframes } from 'styled-components';
import { MenuIcon } from '../../partials/headerGeralStyle';
import { Div } from '../../styles/globalStyle';

// Intefaces properties
type PropType = {
  isOpened?: boolean;
};

// Elements styled components
export const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 510px) {
    padding: 5px;
  }
`;

export const RowName = styled(Div.row)`
  justify-content: center;
  margin: 30px 0;
`;

// Replace the styled.div to styled.img after
export const PhotoUser = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const NameUser = styled.h2`
  padding: 10px 12px;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  background-image: linear-gradient(0.25turn, #ef727a, #ee68a6);
`;

const slugPop = keyframes`
  0% {
    transform: scale(0.1);
  }

  25% {
    transform: scale(1.05);
  }

  50% {
    transform: scale(1.0);
  }

  75% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1.0);
  }
`;

export const PopUpAvaliar = styled.div<PropType>`
  border-radius: 4px;
  padding: 20px;
  align-items: center;
  overflow: hidden;
  width: 400px;
  background-color: #fff;
  display: ${(p) => (p.isOpened ? 'flex' : 'none')};
  animation: ${slugPop} 0.3s linear;
  flex-direction: column;
  margin: 30px;
`;

export const MenuIconAvaliation = styled(MenuIcon)<PropType>`
  font-size: ${(p) => (p.isOpened ? '30px' : '20px')};
  color: ${(p) => (p.isOpened ? '#f5e949' : '#fff')};
  transition: font-size 0.3s, color 0.3s;
  margin: 15px;
`;

export const LinearStars = styled(Div.row)`
  align-items: center;
`;

export const StarAvaliation = styled.div`
  color: #999;
  font-size: 21px;
  margin: 5px;
  cursor: pointer;
`;

export const LabelQuantStar = styled.span`
  color: #999;
  margin: 0 15px;
  font-weight: 700;
`;

export const StarContext = styled(Div.row)`
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

type Prop = {
  isOpened?: boolean;
};

export const ObservationAv = styled(Div.column)<Prop>`
  margin: 30px 30px 0px 30px;
  width: 100%;
  background-color: #fff;
  display: ${(p) => (p.isOpened ? 'flex' : 'none')};
  animation: ${slugPop} 0.3s linear;
`;

/* Mensagem sobre mim */

export const AboutMe = styled(Div.column)`
  width: 100%;
  margin: 30px;
  color: #fff;
`;

export const ParagraphAboutMe = styled.p`
  font-size: 20px;
`;
