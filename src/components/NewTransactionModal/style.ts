import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`

    h2 { 
        color: var(--text-title);
        font-size: 2.4rem;
        margin-bottom: 3.2rem;
    }

    input { 
        width: 100%;
        padding: 0 1.5rem;
        height: 6.4rem;
        border-radius: 0.4rem;
        
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1.6rem;

 
        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1.6rem;
        }

    }

    button[type="submit"] {
        width: 100%;
        padding: 0 2.4rem;
        height: 6.4rem;
        background: var(--green);
        color: #fff;
        border-radius: .4rem;
        border: 0;
        font-size: 1.6rem;
        margin-top: 2.4rem;
    }

`

export const TransactionTypeContainer = styled.div`

    margin: 1.6rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .8rem;
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
        
        height: 6.4rem;
        border: 1px solid #d7d7d7;
        border-radius: .4rem;

        background: ${({isActive, activeColor}) => isActive === true 
        ? transparentize(.9, colors[activeColor] )
        : 'transparent'};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color .2s ease-out;

        &:hover {
            border-color: ${darken(.1, '#d7d7d7')};
        }

        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1.6rem;
            font-size: 1.6rem;
        }
`