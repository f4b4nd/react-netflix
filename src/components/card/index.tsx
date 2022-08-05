import { useState, useContext } from 'react'

import { FeatureContext } from '../../context/feature'
import { getImgURL } from '../../lib/themoviedb.prod';

import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image,
    Actions,
    LikeButton,
} from './style'


export default function Card({ children, ...restProps }: IChildren) {

    const [showFeature, setShowFeature] = useState<boolean>(false)
    const [itemFeature, setItemFeature] = useState<TMovieAPI>({} as TMovieAPI)

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restProps }: IChildren) {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }: IChildren) {
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }: IChildren) {
    return <SubTitle className="card__title" {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }: IChildren) {
    return <Text className="card__text" {...restProps}>{children}</Text>
}

Card.Entities = function CardEntities({ children, ...restProps }: IChildren) {
    return <Entities {...restProps}>{children}</Entities>
}

Card.Meta = function CardMeta({ children, ...restProps }: IChildren) {
    return <Meta className="card__meta" {...restProps}>{children}</Meta>
}

Card.Actions = function CardActions({ children, ...restProps }: IChildren) {
    return <Actions className="card__actions" {...restProps}>{children}</Actions>
}

Card.LikeButton = function CardLikeButton({ src, isActive, ...restProps }: ICardLikeButton) {
    return (
        <LikeButton isActive={isActive} {...restProps}>
            <img src={src} alt="like" draggable="false"/>
        </LikeButton>
    )
}

Card.Item = function CardItem({ item, children, ...restProps }: ICardItem) {

    const { setShowFeature, setItemFeature } = useContext(FeatureContext)

    return (
        <Item className="card__item"
            onClick={() => { setItemFeature(item) ; setShowFeature(true) }}
            {...restProps}
        >
            {children}
        </Item>
    )
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image className="card__image" {...restProps} />
}

Card.Feature = function CardFeature({ category, children, ...restProps }: ICardFeature) {
    
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)

    return (
        <>
        {showFeature && 

        <Feature 
            {...restProps}
            src={getImgURL(itemFeature.backdrop_path, 'w500')}
        >
            <Content>

                <FeatureTitle>{itemFeature.name}</FeatureTitle>

                <FeatureText>{itemFeature.overview}</FeatureText>

                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group 
                    margin="30px 0" 
                    flexDirection="row"
                    alignItems="center"
                >
                    <Maturity rating={itemFeature.adult}>
                        {itemFeature?.adult ? 'PG' : itemFeature.adult}
                    </Maturity>

                    <FeatureText fontWeight="bold">
                        {itemFeature?.genre_ids}
                    </FeatureText>

                </Group>

                {children}

            </Content>

        </Feature>
        
        }
        </>
    )
}