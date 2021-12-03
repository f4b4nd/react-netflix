import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion' 
import { useState, useContext, createContext } from 'react'

export default function Accordion ({children, ...restProps}) {
    return (
        <Container {...restProps} > 
            <Inner> {children} </Inner>
        </Container>
    )
}

/**GENERIC*/
Accordion.Inner = function AccordionInner({children, ...restProps}) {
    return <Inner {...restProps} > {children} </Inner>
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps} > {children} </Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps} > {children} </Frame>
}

/**MAP*/
const ToggleContext = createContext()

Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false)
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}> 
            <Item {...restProps} > {children} </Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return (        
        <Header 
            {...restProps} 
            onClick={() => setToggleShow(toggleShow => !toggleShow)}
        > 
            {children} 
        </Header>
    )
}

Accordion.Body = function AccordionFrame({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    if (toggleShow) {    
        return <Body {...restProps} > {children} </Body>
    } else {
        return null
    }
}