import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
    margin-top: -16rem;

    div { 
        background: var(--shape);
        padding: 2.4rem 3.2rem;
        border-radius: .4rem;
        color: var(--text-titles);

        header { 
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            margin-top: 1.6rem;
            font-size: 3.2rem;
        }
    }
`