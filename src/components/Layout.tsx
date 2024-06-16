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
