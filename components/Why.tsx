import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { FaLaptopCode,FaTools  } from "react-icons/fa";
  import { LuWorkflow } from "react-icons/lu";
export default function Why(){
    return(
        <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#6A82FB]">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaLaptopCode className="mr-2 h-6 w-6 text-primary" />
                    Empowering Sustainable Coding Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Verdev help you write efficient, resource-friendly code that reduces your digital carbon footprint. By using our platform, 
                    you&rsquo;re directly contributing to a more sustainable tech industry, one line of code at a time.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FaTools className="mr-2 h-6 w-6 text-primary" />
                    Cutting-Edge Tools and Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Gain access to advanced tools that analyze your code&rsquo;s energy consumption and provide actionable insights to optimize performance. 
                    Our platform empowers you to make smarter, greener decisions without compromising on quality.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LuWorkflow className="mr-2 h-6 w-6 text-primary" />
                    Seamless Integration into Your Workflow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our platform integrates effortlessly into your existing development process, offering real-time feedback and easy-to-implement 
                    recommendations, so you can stay productive while building eco-conscious code.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    )
}