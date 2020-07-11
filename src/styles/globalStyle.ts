import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  margin: 0 10%;
  padding-top: 75px;
  position: absolute;
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
