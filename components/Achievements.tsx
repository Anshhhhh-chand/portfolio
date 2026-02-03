import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Code2, Award } from "lucide-react"

const achievements = [
  {
    icon: Code2,
    title: "600+ DSA Problems",
    description: "Solved 600+ data structures and algorithms problems across platforms",
  },
  {
    icon: Award,
    title: "Machine Learning Certification",
    description: "Completed Stanford's Machine Learning Specialization on Coursera",
  },
]

export default function Achievements() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-center text-foreground mb-4">Achievements</h2>
        <p className="text-foreground/70 text-center text-lg mb-12 max-w-2xl mx-auto font-light">
          Milestones and accomplishments that showcase my dedication and growth in technology
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="minimal-card hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-foreground">
                  <achievement.icon className="w-6 h-6 mr-3 text-foreground/70" />
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 font-light">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
