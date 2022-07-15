import { useState, useContext } from 'react'

import { ToggleContext } from '../../context/toggle'

import { Container, Frame, Title, Item, Inner, Header, Body } from './style' 

export default function Accordion ({children, ...restProps}: IChildren) {
    return (
        <Container {...restProps} > 
            <Inner> {children} </Inner>
        </Container>
    )
}

/**GENERIC*/
Accordion.Inner = function AccordionInner({children, ...restProps}: IChildren) {
    return <Inner {...restProps} > {children} </Inner>
}

Accordion.Title = function AccordionTitle({children, ...restProps}: IChildren) {
    return <Title {...restProps} > {children} </Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}: IChildren) {
    return <Frame {...restProps} > {children} </Frame>
}

/**MAP*/

Accordion.Item = function AccordionItem({children, ...restProps}: IChildren) {

    const [toggleShow, setToggleShow] = useState<boolean>(false)
    
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}> 
            <Item {...restProps} > {children} </Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}: IChildren) {

    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return (        
        <Header 
            {...restProps} 
            onClick={() => setToggleShow(!toggleShow)}
        > 
            {children}

            {toggleShow ?  (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (      
                <img src="/images/icons/add.png" alt="Open" />
            )}

        </Header>
    )
}

Accordion.Body = function AccordionFrame({children, ...restProps}: IChildren) {

    const { toggleShow } = useContext(ToggleContext)

    return toggleShow ? <Body {...restProps} > {children} </Body> : null

}