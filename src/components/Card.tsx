import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex } from './Flex'
import { Text } from './Text'
import { HeartFilledIcon, HeartOutlineIcon } from '@/icons'
import { useEffect, useState } from 'react'
import { isProductFavorited, updateFavorites } from '@/utils'

const Wrapper = styled.article`
    border-radius: 0.5rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 1rem;
    max-width: 20;
    width: 30rem;
    max-height: 30rem;
    height: 30rem;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: translateY(-0.2rem);
    }
    padding: 1rem;
`

const Header = styled.header`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    color: #ae8fde;
    font-size: 0.8rem;
    font-weight: bold;
    background-color: #f5f5f5;
    text-decoration: none;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    cursor: pointer;
`

const Body = styled.div<{ src: string }>`
    height: 15rem;
    background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0)
        ),
        url(${(props) => props.src});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: white;
    padding: 0.5rem 1rem;
`

const Footer = styled.footer`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: white;
`

const AvatarImage = styled(Image)`
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

type CardProps = {
    product: Product
    onUnfavorite?: (product: Product) => void
}

const Card = ({ product, onUnfavorite }: CardProps) => {
    const {
        seller,
        img,
        title,
        price,
        numberOfFavorites,
        description,
        tags,
        numberOfComments,
        id,
    } = product
    const [isFavorited, setIsFavorited] = useState(false)

    useEffect(() => {
        setIsFavorited(isProductFavorited(product.id))
    }, [product.id])

    const handleFavorite = () => {
        setIsFavorited(true)
        updateFavorites(product, 'add')
    }

    const handleUnfavorite = () => {
        setIsFavorited(false)
        updateFavorites(product, 'remove')
        onUnfavorite?.(product)
    }

    return (
        <Wrapper>
            <Header>
                <AvatarImage
                    src={seller.img}
                    alt={`${seller.username} profile picture`}
                    width={32}
                    height={32}
                />
                <Link href={`/users/${seller.username}`}>
                    {seller.username}
                </Link>
            </Header>
            <Body src={img}>
                <Flex justify="space-between" isCentered>
                    <Flex direction="column" gap="0.5rem">
                        <h3>{title}</h3>
                        <span>AED {price.toFixed(0)}</span>
                    </Flex>
                    {isFavorited ? (
                        <HeartFilledIcon
                            width="24px"
                            height="24px"
                            fill="white"
                            onClick={handleUnfavorite}
                        />
                    ) : (
                        <HeartOutlineIcon
                            width="24px"
                            height="24px"
                            onClick={handleFavorite}
                        />
                    )}
                </Flex>
            </Body>
            <Footer>
                <Flex gap="0.5rem" isCentered>
                    <HeartFilledIcon
                        width="16px"
                        height="16px"
                        fill="#4d5bcb"
                    />
                    <Text color="#4d5bcb">
                        {numberOfFavorites + (isFavorited ? 1 : 0)} likes
                    </Text>
                </Flex>
                <Flex direction="column" gap="0.25rem">
                    <Text numberOfLines={3}>{description}</Text>
                    <Flex gap="0.25rem">
                        {tags.map((tag, idx) => (
                            <Link
                                href={`/search?tag=${tag}`}
                                key={`${tag}-${idx}`}
                            >
                                <Text color="#4d5bcb">#{tag}</Text>
                            </Link>
                        ))}
                    </Flex>
                </Flex>
                <span>View {numberOfComments} comments</span>
            </Footer>
        </Wrapper>
    )
}

export { Card }
