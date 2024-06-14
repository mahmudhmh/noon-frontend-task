import {
    HeartFilledIcon,
    HeartOutlineIcon,
    HomeFilledIcon,
    HomeOutlineIcon,
} from '@/icons'
import { NavBar, NavBarLink } from './NavBar'
import { styled } from 'styled-components'

type LayoutProps = {
    children: React.ReactNode
}

const Wrapper = styled.main`
    padding-bottom: 5rem;

    @media (min-width: 768px) {
        padding-bottom: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f5f5f5;
    color: #333;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    transition: background-color 0.2s ease-in-out;
`

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar>
                <NavBarLink
                    defaultIcon={HomeOutlineIcon}
                    filledIcon={HomeFilledIcon}
                    label="Home"
                    href="/"
                />
                <NavBarLink
                    defaultIcon={HeartOutlineIcon}
                    filledIcon={HeartFilledIcon}
                    label="Favorites"
                    href="/favorites"
                />
            </NavBar>
            <Wrapper>{children}</Wrapper>
        </>
    )
}

export { Layout }
