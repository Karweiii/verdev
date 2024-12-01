import { FaXTwitter ,FaInstagram  , FaLinkedinIn  } from "react-icons/fa6";

export default function Contact(){
    return(
        <section id="contact" className=" w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#6A82FB]">Follow Us On</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground border-2 border-muted-foreground hover:border-white   p-2 rounded-full hover:bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:text-white transition-colors">
                <FaInstagram size={32} />
                <span className="sr-only">Follow us on Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground border-2 border-muted-foreground hover:border-white  p-2 rounded-full hover:bg-black hover:text-white transition-colors">
                <FaXTwitter size={32} />
                <span className="sr-only">Follow us on Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground border-2 border-muted-foreground hover:border-white   p-2 rounded-full hover:bg-[#0077B5] hover:text-white transition-colors">
                <FaLinkedinIn size={32} />
                <span className="sr-only">Follow us on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
    )
}