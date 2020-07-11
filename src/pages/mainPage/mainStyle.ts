import styled from 'styled-components';

// Intefaces properties
type PropType = {
  isOpened?: boolean;
};

export const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
  margin: 30px;
  background-image: linear-gradient(0.25turn, #ef727a, #ee68a6);
`;

export const PopUpAvaliar = styled.div<PropType>`
  align-items: center;
  overflow: hidden;
  width: 300px;
  height: 300px;
  background-color: #fff;
  display: ${(p) => (p.isOpened ? 'flex' : 'none')};
`;
