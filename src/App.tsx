import { useState } from 'react';
import  Modal  from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";

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
    <>
      <Header onOpenNewTrasactionModal={handleOpenNewTrasactionModal}/>


      <Dashboard />

      <Modal
        isOpen={isNewTranactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Registrer transaction</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}