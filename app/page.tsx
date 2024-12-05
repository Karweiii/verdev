"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Faq from "@/components/Faq";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/Pricing";
import Contact from "@/components/Contact";
import Why from "@/components/Why";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted"
        >
          {/* Foam Background Image */}
          <div
            className="absolute inset-0 bg-[url('/Foambg.svg')] bg-no-repeat bg-center bg-[length:150%] z-0"
            aria-hidden="true"
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-2xl font-bold text-black tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none ">
                  YOUR ALL IN ONE
                </h1>
                <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
                  WEBSITE BUILDER
                </h1>
                <p className="mx-auto font-medium text-black italic max-w-[650px] md:text-xl">
                  Drag, Drop, Develop - Your Website, You Way!
                </p>
                <Button size="lg" onClick={(e) => handleNavClick(e, "intro")}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section id="intro" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About <span className="text-[#6A82FB]">SwiftDev</span>
            </h2>
            <div className="flex flex-col-reverse md:flex-row justify-between">
              <p className="mt-4 md:w-[70%] text-muted-foreground md:text-xl">
              Welcome to SwiftDev – Your Gateway to Effortless Web App Creation!
              At SwiftDev, we make building full-stack web applications as easy as a few clicks. 
              Whether you&apos;re a startup founder, small business owner, or an aspiring entrepreneur, 
              SwiftDev empowers you to create stunning, fully functional web apps—no coding skills required.
              Our intuitive platform combines pre-built templates, drag-and-drop tools, and AI-powered automation to 
              help you go from idea to deployment faster than ever before.
              </p>
            </div>
          </div>
        </section>

        {/* why choose us section */}
        <Why />

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <Faq />

        {/* Contact Form */}
        <Contact />
        {/* <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Contact Us</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Your Message"
              ></textarea>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
