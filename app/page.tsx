'use client'

import { useState,useEffect, ChangeEvent,FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Faq from "@/components/Faq"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PricingSection from "@/components/Pricing"
import Contact from "@/components/Contact"
import Why from "@/components/Why"


export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const handleNavClick = (event: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/Foambg.svg')] bg-center bg-cover">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get to know <span className="text-[#15B392]">Verdev</span>
              </h1>
              <p className="mx-auto font-medium italic max-w-[650px] text-white-foreground md:text-xl">
              Code Greener, Build Smarter: Empowering Developers for a Sustainable Future
              </p>
              <Button size="lg" onClick={(e) => handleNavClick(e, 'intro')}>Get Started</Button>
              
              
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section id="intro" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About <span className="text-[#15B392]">Verdev</span></h2>
            <div className="flex flex-col-reverse md:flex-row justify-between">
              <p className="mt-4 md:w-[70%] text-muted-foreground md:text-xl">
                At Verdev, we believe that every line of code matters. As the digital world continues to grow, so does its environmental impact. The energy consumed by inefficient coding 
                practices contributes to the global carbon footprint. Our mission is simple: help developers write greener, more efficient code that uses fewer resources and reduces energy 
                consumption.We provide cutting-edge tools, real-time insights, and practical strategies to help you optimize your code for sustainability. By promoting energy-efficient 
                development practices, we aim to create a community of developers who care about the environment and are committed to building a greener, more sustainable future in tech.
                Join us on our journey to revolutionize coding practices and tackle the growing issue of digital carbon emissions. Together, we can make a difference, 
                one line of code at a time.
              </p>
              <img src="/logo.png" alt="Code" className="  mx-auto w-[250px] md:max-w-none h-[250px] " />
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
  )
}