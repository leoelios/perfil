import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  margin: 0 10%;
  padding-top: 75px;
  position: absolute;

  @media (max-width: 510px) {
    width: 100%;
    margin: 0px;
  }
`;

export const Div = {
  row: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  column: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export const SubTitle = styled.h3`
  color: #777;
`;

export const LabelInput = styled.label`
  color: #777;
  font-weight: 600;
`;

export const TextArea = styled.textarea`
  background-color: #dedede;
  max-height: 200px;
  height: 200px;
  margin: 10px 5px;
  max-width: 100%;
  border: none;
  font-size: 19px;
  padding: 10px;
  color: #777;
`;

export const ButtonStandard = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #777;
  font-weight: 700;
  background-color: #dedede;

  :hover {
    background-color: #d1d1d1;
  }
`;
