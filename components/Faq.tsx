import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
export default function Faq(){
    return(
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#6A82FB]">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-white p-4 px-12 rounded-2xl shadow-lg ">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">What is the purpose of Verdev?</AccordionTrigger>
                <AccordionContent className="text-md text-[#6A82FB] font-bold">
                  Verdev empowers developers to write efficient, eco-friendly code by providing tools and insights to reduce digital carbon footprints. 
                  We aim to promote sustainable coding practices that minimize energy consumption and environmental impact.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">Why is reducing digital carbon footprint important?</AccordionTrigger>
                <AccordionContent className="text-md text-[#6A82FB] font-bold">
                The tech industry significantly contributes to global carbon emissions due to high energy consumption. By optimizing code and adopting green development practices, 
                we can help lower energy usage and reduce the environmental impact of software applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">How does the platform help developers code smarter?</AccordionTrigger>
                <AccordionContent className="text-md text-[#6A82FB] font-bold">
                We offer tools that analyze your code&rsquo;s efficiency, identify areas of high resource usage, 
                and provide actionable recommendations. Our insights guide you toward writing optimized, energy-efficient code without compromising functionality or performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">Does using efficient code really make a difference?</AccordionTrigger>
                <AccordionContent className="text-md text-[#6A82FB] font-bold">
                Yes! Small improvements in code efficiency can significantly reduce energy usage, especially when scaled across millions of users or devices. 
                By adopting greener practices, developers collectively contribute to reducing the tech industry&rsquo;s environmental impact.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl">Who can use this platform?</AccordionTrigger>
                <AccordionContent className="text-md text-[#6A82FB] font-bold">
                The platform is designed for developers of all levels, from beginners to  professionals who want to adopt eco-conscious coding practices. Organizations 
                focused on sustainability can also benefit from our tools to promote green tech initiatives.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg">How can I start using the platform?</AccordionTrigger>
                <AccordionContent className="text-md text-[#6A82FB] font-bold">
                Joining is simple! Select a pricing plan that suits your needs and join our waitlist to get early access. 
                Be among the first to revolutionize your coding practices and make an impact on the environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg">How much does Verdev cost?</AccordionTrigger>
                <AccordionContent className="text-md text-[#6A82FB] font-bold">
                  Verdev offers various pricing tiers to suit different needs. Please check our Pricing section for detailed information on our Basic, Pro, and Enterprise plans.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
    )
}