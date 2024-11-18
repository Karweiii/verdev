import { useState, useEffect } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a href="#" className="flex items-center space-x-2 ml-4 md:ml-0" onClick={(e) => handleNavClick(e, 'hero')}>
          <span className="font-bold text-xl">Verdev</span>
        </a>
        <nav className="ml-auto hidden md:flex gap-4">
          <a href="#intro" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'intro')}>
            About
          </a>
          <a href="#why-choose-us" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'why-choose-us')}>
            Why Choose Us
          </a>
          <a href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'pricing')}>
            Pricing
          </a>
          <a href="#faq" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'faq')}>
            FAQ
          </a>
          <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto md:hidden rounded-full">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4">
              <a href="#intro" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'intro')}>
                About
              </a>
              <a href="#why-choose-us" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'why-choose-us')}>
                Why Choose Us
              </a>
              <a href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'pricing')}>
                Pricing
              </a>
              <a href="#faq" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'faq')}>
                FAQ
              </a>
              <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4" onClick={(e) => handleNavClick(e, 'contact')}>
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
    )
}