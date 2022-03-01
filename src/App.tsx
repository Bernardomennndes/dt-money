import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { TransactionsProvider } from './hooks/useTransactions';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {

  const [isNewTranactionModalOpen, setIsNewTranactionModalOpen] = useState(false);

  const handleOpenNewTrasactionModal = () => {
    setIsNewTranactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTranactionModalOpen(false);
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTrasactionModal={handleOpenNewTrasactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTranactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}