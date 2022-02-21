import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles"

export function Summary() {
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
                        <p>Entries</p>
                        <img src={outcomeImg} alt="Outcome"/>
                    </header>
                    <strong>- $500.00</strong>
                </div>

                <div>
                    <header>
                        <p>Entries</p>
                        <img src={totalImg} alt="Entries"/>
                    </header>
                    <strong>$500.00</strong>
                </div>
            </Container>
        </>
    );
}