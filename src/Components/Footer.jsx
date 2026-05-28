// import React from "react";
// import { Globe, Github, Twitter, Linkedin, Youtube } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="mt-24 border-t border-border pt-12 pb-6 bg-background text-muted-foreground">
//       <div className="flex flex-col items-center gap-8">
//         <h2 className="text-3xl font-medium text-card-foreground">Follow me</h2>
//         <div className="flex gap-6">
//           <a
//             href="https://mubashir-portfolio-website.netlify.app/"
//             className="bg-primary/5 p-4 rounded-lg hover:bg-primary/20 transition-all duration-200 hover:rotate-6 hover:scale-110"
//             aria-label="Website"
//           >
//             <Globe size={28} className="text-muted-foreground" />
//           </a>
//           <a
//             href="https://github.com/CodeCrafter-MMB"
//             target="_blank"
//             className="bg-primary/5 p-4 rounded-lg hover:bg-primary/20 transition-all duration-200 hover:rotate-6 hover:scale-110"
//             aria-label="Github"
//           >
//             <Github size={28} className="text-muted-foreground" />
//           </a>
          
//           <a
//             href="https://www.linkedin.com/in/muhammad-mubashir-60a90430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
//             className="bg-primary/5 p-4 rounded-lg hover:bg-primary/20 transition-all duration-200 hover:rotate-6 hover:scale-110"
//             aria-label="LinkedIn"
//           >
//             <Linkedin size={28} className="text-muted-foreground" />
//           </a>
          
//         </div>
//         <p className="text-center text-muted-foreground mt-8 text-base">
//           © 2025 React & Tailwind CSS Portfolio. Mubashir
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground border-t border-border/40 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fadeIn">
          
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p className="text-muted-foreground">
              Building amazing digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", text: "Home" },
                { href: "/projects", text: "Projects" },
                { href: "/about", text: "About" },
                { href: "/contact", text: "Contact" },
              ].map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-5">
              
              <a
                href="https://github.com/CodeCrafter-MMB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={26} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-mubashir-60a90430a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={26} />
              </a>

              <a
                href="mailto:mubashirbehlum606@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={26} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div cclassName="border-t border-border/40 mt-10 pt-6 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} {" "}
            Muhammad Mubashir. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}
