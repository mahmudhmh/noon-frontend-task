import { NAVBAR_HEIGHT } from '@/constants'
import { useMediaQuery } from '@react-hook/media-query'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Text } from './Text'
import { useEffect, useState } from 'react'

const NavBar = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #ae8fde;
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: ${NAVBAR_HEIGHT};
    @media (min-width: 768px) {
        position: sticky;
        top: 0;
        justify-content: end;
    }

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
`

const StyledLink = styled(Link)`
    padding: 1rem;
`

type NavBarLinkProps = {
    defaultIcon: React.FC<any>
    filledIcon: React.FC<any>
    label: string
} & LinkProps

const NavBarLink = ({
    defaultIcon: DefaultIcon,
    filledIcon: FilledIcon,
    label,
    href,
    ...linkProps
}: NavBarLinkProps) => {
    const { pathname } = useRouter()
    const [isDesktop, setIsDesktop] = useState(false)
    const match = useMediaQuery('only screen and (min-width: 768px)')

    useEffect(() => {
        setIsDesktop(match)
    }, [match])

    return (
        <StyledLink href={href} {...linkProps}>
            {isDesktop ? (
                <Text color="white">{label}</Text>
            ) : href === pathname ? (
                <FilledIcon width="32px" height="32px" fill="white" />
            ) : (
                <DefaultIcon width="32px" height="32px" />
            )}
        </StyledLink>
    )
}

export { NavBar, NavBarLink }
