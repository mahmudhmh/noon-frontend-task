import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
