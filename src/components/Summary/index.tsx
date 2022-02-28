import {useContext} from 'react'
import totalImg from '../../assets/total.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container } from "./styles"

export function Summary() {

    const data = useContext(TransactionsContext);

    return (
        <>
            <Container>
                <div>
                    <header>
                        <p>Entries</p>
                        <img src={incomeImg} alt="Income"/>
                    </header>
                    <strong>$1000.00</strong>
                </div>

                <div>
                    <header>
                        <p>Withdrawals</p>
                        <img src={outcomeImg} alt="Outcome"/>
                    </header>
                    <strong>- $500.00</strong>
                </div>

                <div className="highlight-background">
                    <header>
                        <p>Summary</p>
                        <img src={totalImg} alt="Entries"/>
                    </header>
                    <strong>$500.00</strong>
                </div>
            </Container>
        </>
    );
}