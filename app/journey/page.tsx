"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react"

const journeyData = [
  {
    type: "experience",
    title: "Full Stack Developer Intern",
    organization: "Optiqo",
    organizationUrl: "", // TODO: add official Optiqo site URL
    location: "Remote",
    period: "Your start date – Your end date",
    description:
      "Contributed to fintech product features across the stack. Implemented performant, accessible UI and secure APIs; optimized DB queries and CI/CD workflows.",
    achievements: [
      "TypeScript",
      "Next.js",
      "FastAPI (Python)",
      "AWS",
      "PostgreSQL",
      "GitHub",
      "MongoDB",
      "Prisma",
      "REST / GraphQL",
      "CI/CD",
    ],
    icon: Briefcase,
    color: "",
  },
  {
    type: "education",
    title: "B.Tech Computer Science & Engineering",
    organization: "IIITM Gwalior",
    location: "Gwalior, Madhya Pradesh",
    period: "2023 - 2027",
    description:
      "Currently pursuing Bachelor of Technology in Computer Science and Engineering with focus on Full Stack Development and Machine Learning.",
    achievements: ["Current CGPA: 8.5/10", "Dean's List for Academic Excellence", "Active member of Coding Club"],
    icon: GraduationCap,
    color: "",
  },
]

export default function Journey() {
  return (
    <main className="min-h-screen bg-background pt-20 relative overflow-hidden">
      {/* Professional ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(139,92,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/3 to-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/3 to-violet-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/2 to-cyan-500/2 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Professional Journey</h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My professional experiences, achievements, and educational background that have shaped my career in
            technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-500 opacity-30"></div>

          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start opacity-0 translate-y-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
              >
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-background bg-foreground/5 text-foreground/70 border-border/20 shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <Card className="card-gradient backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/20 group relative overflow-hidden">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardHeader className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <Badge variant="outline" className={`w-fit bg-foreground/5 text-foreground/70 border-border/20`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                        <div className="flex items-center text-sm text-foreground/60">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.period}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center text-foreground/70 mb-2">
                        {"organizationUrl" in item && item.organizationUrl ? (
                          <a
                            href={item.organizationUrl as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium underline decoration-dotted underline-offset-4 hover:text-foreground"
                          >
                            {item.organization}
                          </a>
                        ) : (
                          <span className="font-medium">{item.organization}</span>
                        )}
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-foreground/70 mb-4 leading-relaxed">{item.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Key Skills & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <span
                              key={achievementIndex}
                              className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-sm rounded-md"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </main>
  )
}
