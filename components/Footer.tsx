import { FaXTwitter ,FaInstagram  , FaLinkedinIn  } from "react-icons/fa6";
export default function Footer(){
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
    return(
      <footer className="w-full py-6 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-cols-1 justify-between">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-[#6A82FB]">SwiftDev</h3>
            <p className="text-sm text-muted-foreground">© 2024 Verdev. All rights reserved.</p>
            <div className="flex space-x-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram size={20} />
                <span className="sr-only">Verdev on Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaXTwitter size={20} />
                <span className="sr-only">Verdev on Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedinIn size={20} />
                <span className="sr-only">Verdev on LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="space-y-3">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-1 ">
              <li>
                <a href="#intro" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'intro')}>About</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'why-choose-us')}>Why Choose Us</a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
              </li>
            </ul>
            </div>
            <div className="space-y-3">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-1 ">
              <li>
                <a href="#intro" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
              </li>
            </ul>
          </div>
          </div>
          
          
        </div>
      </div>
    </footer>
    )
}