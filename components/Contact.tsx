"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Try to surface detailed server error
        let serverError = "Failed to send message"
        try {
          const data = await response.json()
          if (data?.error) serverError = data.error
        } catch {}
        throw new Error(serverError)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again later or contact me directly."
      toast({
        title: "Error sending message",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-4">Get In Touch</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-light">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-foreground mb-4">Let's Connect</h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 minimal-card flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-foreground/60 text-sm font-light">Email</p>
                  <span className="text-foreground">chandansh82@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 minimal-card flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-foreground/60 text-sm font-light">Location</p>
                  <span className="text-foreground">Gwalior, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="minimal-card">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-background border border-foreground/20 dark:border-border/30 text-foreground placeholder:text-foreground/40 focus:border-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-background border border-foreground/20 dark:border-border/30 text-foreground placeholder:text-foreground/40 focus:border-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none bg-white dark:bg-background border border-foreground/20 dark:border-border/30 text-foreground placeholder:text-foreground/40 focus:border-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full minimal-button font-medium py-3 transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
