import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#6A82FB]">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto bg-white p-4 px-12 rounded-2xl shadow-lg "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
            Do I need coding skills to use SwiftDev?
            </AccordionTrigger>
            <AccordionContent className="text-md text-[#6A82FB] font-bold">
            Not at all! SwiftDev is designed for everyone, from complete beginners to experienced users. You can build fully functional apps without writing a single line of code.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
            Can I customize my app?
            </AccordionTrigger>
            <AccordionContent className="text-md text-[#6A82FB] font-bold">
            Absolutely! SwiftDev offers a wide range of customization options, from design to functionality, so your app can reflect your unique brand and vision.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
            Is hosting included in the plans?
            </AccordionTrigger>
            <AccordionContent className="text-md text-[#6A82FB] font-bold">
            Yes! All plans include hosting. The Pro and Enterprise plans also support custom domains.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl">
            Can I export my app's code?
            </AccordionTrigger>
            <AccordionContent className="text-md text-[#6A82FB] font-bold">
            Yes, with the Pro and Enterprise plans, you can export your app's code if you wish to self-host or further customize it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl">
            What industries is SwiftDev suitable for?
            </AccordionTrigger>
            <AccordionContent className="text-md text-[#6A82FB] font-bold">
            SwiftDev is versatile and works for any industry. Whether you’re creating an e-commerce store, a blog, a portfolio site, or a SaaS product, SwiftDev has you covered.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
