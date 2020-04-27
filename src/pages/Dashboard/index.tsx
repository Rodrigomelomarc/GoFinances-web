import React, { useEffect, useState } from 'react';
import {
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiDollarSign,
} from 'react-icons/fi';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';
import formatValue from '../../utils/formatValue';

import {
  BalanceInfo,
  BalanceCard,
  TotalCard,
  TransactionsTable,
  BalanceCardsWrapper,
  Value,
} from './styles';
import Header from '../../components/Header';

interface Transaction {
  id: string;
  title: string;
  value: string;
  created_at: string;
  type: 'income' | 'outcome';
  category: {
    title: string;
  };
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance | null>(null);

  useEffect(() => {
    api.get('transactions').then((response) => {
      const { transactions, balance } = response.data;

      console.log(response.data);

      setTransactions(transactions);
      setBalance(balance);
    });
  }, []);

  return (
    <>
      <Header />
      <BalanceInfo>
        <BalanceCardsWrapper>
          <BalanceCard>
            <header>
              <p>Entradas</p>
              <FiArrowUpCircle size={27} color="#12A454" />
            </header>
            <span>R$ {balance?.income},00</span>
          </BalanceCard>

          <BalanceCard txtHeaderColor="#969CB3">
            <header>
              <p>Saídas</p>
              <FiArrowDownCircle size={27} color="#E83F5B" />
            </header>
            <span>R$ {balance?.outcome},00</span>
          </BalanceCard>

          <TotalCard>
            <header>
              <p>Total</p>
              <FiDollarSign size={27} color="#fff" />
            </header>
            <span>R$ {balance?.total},00</span>
          </TotalCard>
        </BalanceCardsWrapper>
      </BalanceInfo>

      <TransactionsTable>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>
                <Value type={transaction.type}>
                  {formatValue(transaction.value, transaction.type)}
                </Value>
              </td>
              <td>{transaction.category.title}</td>
              <td>{formatDate(transaction.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </>
  );
};

export default Dashboard;
