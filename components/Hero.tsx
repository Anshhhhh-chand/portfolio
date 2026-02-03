"use client"

import { Download, Github, Linkedin, Code2, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-background">
      <div className="text-center max-w-4xl mx-auto pt-20">
        {/* Profile Section with Subtle Circles */}
        <div className="relative mb-12 animate-fade-in-up">
          {/* Subtle concentric circles */}
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-border/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-border/15 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-border/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Profile Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border border-border/20 shadow-sm bg-foreground">
            <Image
              src="/images/me.jpeg"
              alt="Ansh Pratap Chand"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name with Clean Typography */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-2xl md:text-3xl font-normal text-foreground tracking-[0.3em] mb-4">ANSH PRATAP CHAND</h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light">Full Stack Developer | Machine Learning Enthusiast </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://github.com/Anshhhhh-chand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh88/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/u/chand_ansh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/ansh_4sure_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className="flex flex-col items-center text-foreground/50 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-sm mb-3 font-light">Scroll to explore</p>
          <div className="w-6 h-10 border border-foreground/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </div>

      {/* Clean Resume Button */}
      <Button
        className="fixed bottom-8 right-8 z-50 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200 rounded-full px-6 py-3 shadow-sm border border-border/10"
        asChild
      >
        <a href="/api/resume">
          <Download className="w-4 h-4 mr-2" />
          Resume
        </a>
      </Button>
    </section>
  )
}
