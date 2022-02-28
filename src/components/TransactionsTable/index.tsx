import { Container } from './styles'
import { TransactionsContext } from '../../TransactionsContext';
import { useContext } from 'react';

export function TransactionsTable() {

    const transactions = useContext(TransactionsContext);

    return (
        <>
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Value</th>
                            <th>Category</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>

                        {transactions.map(transaction =>
                        (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                {new Intl.DateTimeFormat('en-US').format(new Date(transaction.createdAt))}    
                                </td>
                            </tr>
                        )
                        )}

                    </tbody>
                </table>
            </Container>
        </>
    );
}