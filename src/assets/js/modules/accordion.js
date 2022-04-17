import Accordion from 'accordion-js'
import 'accordion-js/dist/accordion.min.css';


export default function accordionsInit() {
    const accordions = [...document.querySelectorAll('.accordion-container')]
    new Accordion(accordions)
}