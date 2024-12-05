import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLaptopCode  } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
export default function Why() {
  return (
    <section
      id="why-choose-us"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#6A82FB]">
          Why Choose Us
        </h2>
        
        <div className="flex flex-wrap justify-between  p-6">
    
          <div className="w-full sm:w-1/3 p-2 text-center ">
          <Card className="">
            <CardHeader>
              <CardTitle className="flex items-center text-[#6A82FB]">
                <FaLaptopCode className="mr-2 h-6 w-6 text-[#6A82FB]" />
                Ease of Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                No technical skills? No problem! SwiftDev simplifies the entire process with an intuitive interface and guided workflows
              </p>
            </CardContent>
          </Card>
          </div>
          <div className="w-full sm:w-1/3 p-2 text-center">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-[#6A82FB] ">
                <GrMoney className="mr-2 h-6 w-6 text-[#6A82FB]" />
                Save Time and Money
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Skip the long development cycles and costly developer fees. Build your app in hours, 
                not months, at a fraction of the cost.
              </p>
            </CardContent>
          </Card>
          </div>
          <div className="w-full sm:w-1/3 p-2 text-center">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-[#6A82FB]">
                <LuWorkflow className="mr-2 h-6 w-6 text-[#6A82FB]" />
                Scalable and Customizable
              </CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                Whether you&apos;re starting with an MVP or scaling to thousands of users, SwiftDev grows with you. Add features and adjust designs as your needs evolve.
                </p>
            </CardContent>
          </Card>
          </div>
        </div>

  <div className="flex flex-wrap justify-center gap-4 p-6">
    
    <div className="w-full sm:w-1/3 p-2 text-center">
    <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-[#6A82FB]">
                <IoCheckmarkDoneCircle className="mr-2 h-6 w-6 text-[#6A82FB]" />
                One Stop Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                From front-end design to backend logic and deployment, SwiftDev takes care of it all—so you can focus on your business.
                </p>
            </CardContent>
          </Card>
    </div>
    <div className="w-full sm:w-1/3 p-2 text-center">
    <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-[#6A82FB]">
                <RiRobot2Line className="mr-2 h-6 w-6 text-[#6A82FB]" />
                AI Assistance
              </CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                Leverage AI to suggest layouts, generate content, and automate repetitive tasks, making app development even faster.                
                </p>
            </CardContent>
          </Card>
    </div>
  </div>
      </div>
      
    </section>
  );
}
