import  Modal  from 'react-modal';
import { Container, TransactionTypeContainer } from './style';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button 
                    type="button" 
                    onClick={onRequestClose} 
                    className="react-modal-close"    
                >
                    <img src={closeImg} alt="Close Modal" />
                </button>

                <Container>
                    <h2>Registrer transaction</h2>

                    <input
                        type="text"
                        placeholder="Title"
                    />

                    <input 
                        type="number"
                        placeholder="Value"
                    />

                    <TransactionTypeContainer>
                        <button type="button">
                            <img src={incomeImg} alt="Income" />
                            <span>Income</span>
                        </button>

                        <button type="button">
                            <img src={outcomeImg} alt="Outcome" />
                            <span>Outcome</span>
                        </button>
                    </TransactionTypeContainer>


                    <input 
                        type="text"
                        placeholder="Category"
                    />

                    <button type="submit">
                        Register
                    </button>

                </Container>
            </Modal>
        </>
    );
}