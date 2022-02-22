import { useEffect } from 'react';
import { Container } from './styles'

export function TransactionsTable() {

    useEffect(() => {
        fetch('https://localhost:3000/api/transactions')
            .then( response => response.json() )
            .then( data => console.log(data) );
    }, []);

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
                        <tr>
                            <td>Website development</td>
                            <td className="deposit">$5,000</td>
                            <td>Development</td>
                            <td>20/02/2022</td>
                        </tr>

                        <tr>
                            <td>Rent</td>
                            <td className="withdraw">- $1,100</td>
                            <td>House</td>
                            <td>17/02/2022</td>
                        </tr>

                    </tbody>
                </table>
            </Container>
        </>
    );
}