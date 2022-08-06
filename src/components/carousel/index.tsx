import { Container, Inner, Gallery, ArrowContainer, Arrow } from './style'


export default function Carousel({children}: IChildren) {

    const slideLeft = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const gallery = (e.target as any).closest('.gallery__container')
        gallery.scrollLeft = gallery.scrollLeft - 500
    }

    const slideRight = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const gallery = (e.target as any).closest('.gallery__container')
        gallery.scrollLeft = gallery.scrollLeft + 500
    }

    return (
        <Container className="carousel">
            <Inner className="gallery__container">
                <Carousel.LeftArrow onClick={(e) => slideLeft(e)} />
                    {children}
                <Carousel.RightArrow onClick={(e) => slideRight(e)} />
            </Inner>
        </Container>
    )
}

Carousel.Gallery = function CarouselGallery ({children}: IChildren) {
    return (
        <Gallery className="carousel__gallery">
            {children}
        </Gallery>
    )
}

Carousel.RightArrow = function CarouselRightArrow ({onClick}: ICarouselArrow) {
    return (
        <ArrowContainer
            className="carousel__right-arrow" 
            onClick={onClick}
        >
            <Arrow
                src="/images/icons/chevron-right-circle.png" 
                alt="previous-arrow"
            />
        </ArrowContainer>
    )
}

Carousel.LeftArrow = function CarouselLeftArrow ({onClick}: ICarouselArrow) {
    return (
        <ArrowContainer 
            className="carousel__left-arrow" 
            onClick={onClick}
            isLeft={true}
        >
            <Arrow  
                src="/images/icons/chevron-right-circle.png" 
                alt="previous-arrow"
            />
        </ArrowContainer>
    )
}

