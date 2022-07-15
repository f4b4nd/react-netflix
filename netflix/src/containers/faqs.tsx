import { Accordion, OptForm }  from "../components"
import faqsData from '../fixtures/faqs.json'

const FaqsContainer = () => (
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

        <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership.
            </OptForm.Text>
        </OptForm>

    </Accordion>
)

export default FaqsContainer