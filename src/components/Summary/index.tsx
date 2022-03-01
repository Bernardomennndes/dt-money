import totalImg from '../../assets/total.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

import { Container } from "./styles"

export function Summary() {

    const { transactions } = useTransactions();

    const summaryBalance = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })


    return (
        <>
            <Container>
                <div>
                    <header>
                        <p>Entries</p>
                        <img src={incomeImg} alt="Income"/>
                    </header>
                    <strong>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(summaryBalance.deposit)}</strong>
                </div>

                <div>
                    <header>
                        <p>Withdrawals</p>
                        <img src={outcomeImg} alt="Outcome"/>
                    </header>
                    <strong>-{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(summaryBalance.withdraw)}</strong>
                </div>

                <div className="highlight-background">
                    <header>
                        <p>Summary</p>
                        <img src={totalImg} alt="Entries"/>
                    </header>
                    <strong>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(summaryBalance.total)}</strong>
                </div>
            </Container>
        </>
    );
}