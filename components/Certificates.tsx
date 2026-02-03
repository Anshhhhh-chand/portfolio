import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford University",
    instructor: "Andrew Ng",
    date: "December 2024",
    duration: "3 months",
    description:
      "Comprehensive course covering supervised learning, unsupervised learning, and neural networks with hands-on projects.",
    skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks", "Deep Learning"],
    link: "https://coursera.org/share/cfc3d1f5e30e00387d57854033ce94c5",
    credentialId: "ML-STANFORD-2024-001",
    status: "Completed",
  },
]

export default function Certificates() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-4">Certificates & Learning</h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto font-light">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        {/* Certificate Card - Centered */}
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="minimal-card hover-lift border border-border/20 overflow-hidden relative">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                      <Award className="w-5 h-5 text-foreground/70" />
                    </div>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                      {certificates[0].status}
                    </span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-foreground/70" />
                </div>

                <CardTitle className="text-xl text-foreground leading-tight">{certificates[0].title}</CardTitle>

                <div className="space-y-2 text-sm">
                  <p className="text-foreground/80 font-medium">{certificates[0].issuer}</p>
                  <p className="text-foreground/60">Instructor: {certificates[0].instructor}</p>
                  <div className="flex items-center justify-between text-foreground/60">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {certificates[0].date}
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                      {certificates[0].duration}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 relative z-10">
                <p className="text-foreground/70 text-sm leading-relaxed">{certificates[0].description}</p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificates[0].skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-foreground/50 font-mono bg-accent/20 p-2 rounded border border-border/30">
                  ID: {certificates[0].credentialId}
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full border-border/50 hover:bg-accent/50 bg-transparent mt-4 hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
                >
                  <a href={certificates[0].link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        
      </div>
    </section>
  )
}
