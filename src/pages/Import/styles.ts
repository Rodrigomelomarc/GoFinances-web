import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  max-width: 736px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    font-weight: normal;
    color: #363f5f;
    margin: 64px auto 40px auto;
    text-align: center;
  }
`;

export const ImportContainer = styled.section`
  background: #fff;
  padding: 64px;
  border-radius: 5px;

  footer {
    width: 100%;
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      svg {
        margin-right: 13px;
      }
    }

    button {
      padding: 15px 82px;
      background: #ff872c;
      border-radius: 5px;
      color: #fff;
      transition: background-color 400ms;

      &:hover {
        background: ${shade(0.1, '#ff872c')};
      }
    }
  }
`;

export const DropzoneStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  border: 1.5px dashed #969cb3;
  border-radius: 5px;
  color: #5636d3;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;
