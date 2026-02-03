import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-4">About Me</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-light">
            Passionate about creating innovative solutions and building the future of technology
          </p>
        </div>

        <Card className="minimal-card">
          <CardHeader>
            <CardTitle className="text-2xl font-normal text-foreground">Vision & Passion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Innovation</h3>
                <p className="text-foreground/70 leading-relaxed font-light">
                  I'm driven by the desire to create cutting-edge solutions that solve real-world problems. From
                  AI-powered applications to scalable web platforms, I focus on building technology that makes a
                  meaningful impact.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Technical Excellence</h3>
                <p className="text-foreground/70 leading-relaxed font-light">
                  Currently pursuing B.Tech in Computer Science at IIITM Gwalior, I combine academic knowledge with
                  practical experience. My expertise spans Full-Stack development, Machine Learning, and Data Structures with 600+ LeetCode problems solved.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Future Vision</h3>
                <p className="text-foreground/70 leading-relaxed font-light">
                  My goal is to bridge the gap between innovative technology and practical applications. I'm
                  interested in creating scalable systems, and products that enhance human
                  capabilities and solve complex challenges.
                </p>
              </div>
            </div>

            <div className="border-t border-border/20 pt-8">
              <p className="text-foreground/70 leading-relaxed text-lg font-light">
                I focus on building reliable, user-centric software with clean architecture and measurable impact.
                Recently, my work has centered on modern full-stack development and scalable system design across web
                applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="text-2xl font-medium text-foreground mb-2">600+</div>
                <p className="text-foreground/60 text-sm font-light">DSA Problems</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-foreground mb-2">4+</div>
                <p className="text-foreground/60 text-sm font-light">Major Projects</p>
              </div>
              
              
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
