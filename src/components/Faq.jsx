import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import faqs from '../content/faq';
import "./Faq.scss";
const Faq = () => {
    const [flag, setFlag] = useState(false);
    
    const toggleFlag = () => {
        setFlag(current => !current);
    }
    
    const renderFaqs = (faqs) => {
        return faqs.map((faq, index) => {
            return (
                <div className='accordion-content'>
                    <input type="radio"  name="example_accordion" id={`section${index}`} className="accordion__input" onClick = {toggleFlag}></input>
                    <label for={`section${index}`} className="accordion__label">{faq.question}</label>
                    {flag && (
                    <div className="accordion__content">
                        <p>
                            {faq.answer}
                        </p>
                    </div>
                    )}
                </div>
            );
        });
    }
    return (
        <div className="faq-wrapper">
            <Container>
                {/* div centered inside container */}
                <div className="faq">
                    <h1 className='faq-heading'>Faq<span className="dot_color">.</span></h1>
                    {/* center accordion div */}
                    <div className="row accordion">
                        {renderFaqs(faqs)}
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Faq;