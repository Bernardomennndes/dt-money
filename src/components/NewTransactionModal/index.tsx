import { FormEvent, useState } from 'react';
import  Modal  from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './style';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
    
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState(0);
    const [type, setType] = useState('deposit');

    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();

        const data = {
            title,
            value, 
            category,
            type,
        };

        api.post('/transactions', data);
    }


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

                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Registrer transaction</h2>

                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={ event => setTitle(event.target.value) }
                    />

                    <input 
                        type="number"
                        placeholder="Value"
                        value={value}
                        onChange={ event => setValue(Number(event.target.value)) }
                    />

                    <TransactionTypeContainer>

                        <RadioBox 
                            onClick={() => {setType('deposit')}}
                            type="button"
                            isActive={type === 'deposit'}
                            activeColor="green"
                        >
                            <img src={incomeImg} alt="Income" />
                            <span>Income</span>
                        </RadioBox>

                        <RadioBox 
                            onClick={() => {setType('withdraw')}}    
                            type="button"
                            isActive={type === 'withdraw'}
                            activeColor="red"
                        >
                            <img src={outcomeImg} alt="Outcome" />
                            <span>Outcome</span>
                        </RadioBox>

                    </TransactionTypeContainer>


                    <input 
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={ event => setCategory(Number(event.target.value)) }
                    />

                    <button type="submit">
                        Register
                    </button>

                </Container>
            </Modal>
        </>
    );
}