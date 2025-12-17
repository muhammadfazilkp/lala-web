import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


const faqs = [
  {
    question: "What is Lala Stories?",
    answer: "Lala Stories is India's first bedtime audio storytelling app designed specifically for children. It offers over 2000+ engaging stories across 6+ languages to help kids develop their imagination while reducing screen time.",
  },
  {
    question: "Can I collaborate with others on a story?",
    answer: "Yes! Our platform allows parents and caregivers to participate in the storytelling experience with their children, creating memorable bonding moments.",
  },
  {
    question: "How do I discover new stories on Lala Stories?",
    answer: "Our app features curated collections, personalized recommendations based on your child's preferences, and new stories added regularly. You can browse by age group, language, or theme.",
  },
  {
    question: "Is Lala Stories free to use?",
    answer: "Lala Stories offers both free and premium content. You can access a selection of stories for free, with a premium subscription unlocking our full library of 2000+ stories.",
  },
  {
    question: "How do I provide feedback on a story?",
    answer: "You can rate stories and leave feedback directly in the app. We value parent and child feedback to continuously improve our content.",
  },
  {
    question: "How do I report issues or bugs on the platform?",
    answer: "You can report issues through our in-app support feature or contact us directly at support@lalastories.com. Our team typically responds within 24 hours.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-card relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 inline-block border-b-4 border-primary pb-2">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground mt-4">
            You can find some commonly asked questions.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border/50 rounded-2xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-display font-medium hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
