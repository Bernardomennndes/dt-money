import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    
    margin: 0 auto;
    padding: 3.2rem 1.6rem 19.2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button { 
        font-size: 1.6rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 3.2rem;
        border-radius: .4rem;
        height: 4.8rem;

        transition: filter 0.2s ease-out;
        
        &:hover {
            filter: brightness(.95);
        }

    }
`