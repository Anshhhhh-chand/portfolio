import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Blogging & Social Automation Platform",
    category: "AI / Automation",
    description:
      "An intelligent content platform that generates, schedules, and auto-posts blogs across multiple social media channels. Features AI-assisted drafting, hashtag/SEO suggestions, post scheduling, and unified analytics for engagement tracking.",
    techStack: [
      "NodeJS",
      "ExpressJS",
      "EJS",
      "MongoDB",
      "Render",
      "OAuth",
      
    ],
    githubLink: "https://github.com/Anshhhhh-chand/blogifynew", // TODO: replace with specific repo URL
    liveLink: "https://blogifynew.onrender.com/",
    image: "/images/image.png",
  },
  {
    title: "URL Shortener Service",
    category: "Backend",
    description:
      "A full-stack URL shortening service with analytics, custom aliases, and user dashboard for managing shortened links.",
    techStack: ["NodeJS", "ExpressJS", "MongoDB", "ReactJS", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/anshpratap/url-shortener",
    liveLink: "https://url-shortener-six-fawn.vercel.app/",
    image: "/images/image2.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-4">Featured Projects</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-light">
            A showcase of my recent work and technical expertise across different domains
          </p>
        </div>

        <div className="space-y-20 group">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-card border border-border/10 rounded-2xl p-7 md:p-11 hover:border-border/20 transform-gpu will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] scale-[0.9] hover:scale-[0.956] md:hover:scale-[0.97] hover:shadow-xl hover:z-10 group-hover:opacity-80 hover:opacity-100"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {project.category}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-normal text-foreground">{project.title}</h3>

                    <p className="text-foreground/70 text-lg leading-relaxed font-light">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="default"
                        asChild
                        className="bg-foreground text-background hover:bg-foreground/90 px-6 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-200"
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-foreground/5 border border-border/10 rounded-lg hover:scale-105 transition-all duration-200"
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl border border-border/10 bg-card shadow-sm">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            asChild
            className="px-8 py-3 rounded-lg border-border/20 hover:bg-foreground/5 hover:border-border/30 transition-all duration-200 bg-transparent hover:scale-105"
          >
            <a href="https://github.com/Anshhhhh-chand" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
