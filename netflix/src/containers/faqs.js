import { Accordion }  from "../components"
import faqsData from '../fixtures/faqs.json'

export default function FaqsContainer () {
  return (
    <Accordion>

        <Accordion.Title> Frequently Asked Questions </Accordion.Title>

        <Accordion.Frame>
          {
            faqsData.map(v => 
              <Accordion.Item key={v.id}>
                  <Accordion.Header>{v.header}</Accordion.Header>
                  <Accordion.Body> {v.body} </Accordion.Body>              
              </Accordion.Item>
            )
          }        
        </Accordion.Frame>

    </Accordion>
  )
}
