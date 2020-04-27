import styled from 'styled-components';

interface BalanceCardProps {
  txtHeaderColor?: string;
}

export const BalanceInfo = styled.section`
  height: 144px;
  background: #5636d3;
  padding-top: 40px;
`;

export const BalanceCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 352px);
  grid-gap: 32px;
  max-width: 1120px;
  margin: 0 auto;
`;

export const BalanceCard = styled.div<BalanceCardProps>`
  margin: 0;
  width: 352px;
  height: 136px;
  background: #fff;
  border-radius: 5px;
  padding: 22px 20px 18px 32px;
  transition: transform 400ms;

  &:hover {
    transform: translateY(-5px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${(props) =>
        props.txtHeaderColor ? props.txtHeaderColor : '#363F5F'};
    }
  }

  span {
    display: block;
    margin-top: 14px;
    font-size: 36px;
    color: #363f5f;
  }
`;

export const TotalCard = styled.div`
  margin: 0;
  width: 352px;
  height: 136px;
  background: #ff872c;
  border-radius: 5px;
  padding: 22px 20px 18px 32px;
  transition: transform 400ms;

  &:hover {
    transform: translateY(-5px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: #fff;
    }
  }

  span {
    display: block;
    margin-top: 14px;
    font-size: 36px;
    color: #fff;
  }
`;

export const TransactionsTable = styled.table`
  margin: 141px auto;
  width: 1120px;
  border-spacing: 0 20px;
  border-collapse: separate;

  thead {
    th {
      color: #969cb3;
      font-weight: normal;
      text-align: initial;

      &:first-child {
        padding-left: 32px;
      }

      &:last-child {
        text-align: right;
        padding-right: 82px;
      }
    }
  }

  tbody {
    margin-top: 20px;
    td {
      background: #fff;
      padding: 20px 5px;
      color: #969cb3;

      &:first-child {
        padding-left: 32px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        color: #363f5f;
      }

      &:last-child {
        text-align: right;
        padding-right: 32px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
`;
