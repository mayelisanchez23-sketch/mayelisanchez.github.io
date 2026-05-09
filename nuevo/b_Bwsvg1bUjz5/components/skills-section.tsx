"use client"

import { Code, Shield, Database, Terminal, GitBranch, Globe, Lock, Server } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    category: "Desarrollo Web",
    icon: Code,
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    category: "Control de Versiones",
    icon: GitBranch,
    items: ["Git", "GitHub", "Commits estructurados"],
  },
  {
    category: "Seguridad",
    icon: Shield,
    items: ["Análisis de vulnerabilidades", "Defensa en red", "HTTPS/SSL"],
  },
  {
    category: "Infraestructura",
    icon: Server,
    items: ["GitHub Pages", "Soporte técnico", "Redes"],
  },
]

const techStack = [
  { name: "HTML5", icon: Globe },
  { name: "CSS3", icon: Code },
  { name: "JavaScript", icon: Terminal },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Database },
  { name: "Security", icon: Lock },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <h2 className="text-3xl font-bold">
            <span className="text-primary font-mono">03.</span> Información Técnica
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card
              key={skill.category}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-all group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-primary/40 text-xs">0{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-3">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <Card className="bg-card/30 border-border">
          <CardContent className="p-8">
            <p className="text-center text-sm text-muted-foreground font-mono mb-6 uppercase tracking-wider">
              Stack Tecnológico
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 group cursor-default"
                >
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                    <tech.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Terminal Style Info */}
        <Card className="mt-8 bg-background border-border overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 text-xs text-muted-foreground font-mono">info.sh</span>
          </div>
          <CardContent className="p-6 font-mono text-sm">
            <div className="space-y-2">
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">cat</span> stack.txt
              </p>
              <p className="text-muted-foreground pl-4">
                → HTML5, CSS3, JavaScript, Bootstrap
              </p>
              <p className="mt-4">
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">echo</span> $ENFOQUE
              </p>
              <p className="text-muted-foreground pl-4">
                → Estructura organizada, enlaces relativos seguros, navegación consistente
              </p>
              <p className="mt-4">
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">whoami</span>
              </p>
              <p className="text-foreground pl-4">
                → Mayeli Sánchez · MayAth
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
