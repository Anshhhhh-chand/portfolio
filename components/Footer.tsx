"use client"
import { Github, Linkedin, Instagram, Code2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/Anshhhhh-chand", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ansh88/", label: "LinkedIn" },
    { icon: Code2, href: "https://leetcode.com/u/chand_ansh/", label: "LeetCode" },
    { icon: Instagram, href: "https://www.instagram.com/ansh_4sure_/", label: "Instagram" },
  ]

  return (
    <footer className="bg-background border-t border-border/10 text-foreground py-16 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-violet-500/5 to-blue-500/5 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-foreground font-medium mb-2">Email</h3>
            <p className="text-foreground/70 font-light">chandansh82@gmail.com</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-foreground font-medium mb-2">Location</h3>
            <p className="text-foreground/70 font-light">Gwalior, India</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-foreground font-medium mb-2">Follow</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div
              className="text-sm text-foreground/60 font-light animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="animate-pulse">{currentTime}</p>
              <p>Gwalior, IN</p>
            </div>

            <div className="flex space-x-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              {socialLinks.map((social, index) => (
                <a
                  key={`bottom-${social.label}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-right animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-foreground font-medium">chandansh82@gmail.com</p>
              <div className="flex items-center justify-end mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-foreground/60 font-light">Available for projects</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <div className="flex justify-center items-center space-x-2 text-sm text-foreground/50 font-light">
              <span className="hover:text-foreground/70 transition-colors duration-300">
                &lt; built with code /&gt;
              </span>
              <span className="animate-pulse">•</span>
              <span className="hover:text-foreground/70 transition-colors duration-300">2026</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}
