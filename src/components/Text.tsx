import styled, { css } from 'styled-components'

type TextProps = {
    className?: string
    children: React.ReactNode
    color?: string
    numberOfLines?: number
}

const TextComponent = ({ className, children }: TextProps) => {
    return <p className={className}>{children}</p>
}

export const Text = styled(TextComponent)`
    color: ${({ color }) => color || 'black'};
    ${(props) =>
        props.numberOfLines &&
        css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${props.numberOfLines};
            overflow: hidden;
        `}

    font-size: 1rem;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
`
