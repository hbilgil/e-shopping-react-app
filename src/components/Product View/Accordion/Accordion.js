import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import './Accordion.css';

export const AccordionDemo = () => {
    
    return (
        <>
            <Accordion multiple>
                <AccordionTab header="Description">
                    <p>Description</p>
                </AccordionTab>
                <AccordionTab header="Tech Details">
                    <p>Tech Details</p>
                </AccordionTab>
                <AccordionTab header="Care Instructions">
                    <p>Care Instructions</p>
                </AccordionTab>
            </Accordion>
        </>
    )
}