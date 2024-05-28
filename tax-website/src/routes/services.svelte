<script>
    import Accordion from 'daisyui/dist/components/accordion/index.js';
    import AccordionItem from 'daisyui/dist/components/accordion/accordion-item.js';
</script>

<main>
    <section class="container mx-auto p-6">
        <h2 class="text-3xl font-bold mb-4">Our Services</h2>
        <Accordion>
            <AccordionItem title="Individual Tax Preparation">
                <p>Comprehensive tax filing for individuals, covering all income sources and deductions.</p>
            </AccordionItem>
            <AccordionItem title="Business Tax Services">
                <p>Tax planning, return preparation, and compliance for businesses of all sizes.</p>
            </AccordionItem>
            <AccordionItem title="Tax Audit Representation"> 
                <p>Expert support and guidance in the event of an IRS audit.</p>
            </AccordionItem>
        </Accordion>
    </section>
</main>
