import styled from 'styled-components';

export const Container = styled.header`
  background: #5636d3;
  height: 92px;
  padding: 20px 0;
  min-width: 830px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;

    a {
      color: #fff;
      & + a {
        margin-left: 32px;
      }
    }
  }
`;
