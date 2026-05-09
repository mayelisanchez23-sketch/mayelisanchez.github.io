"use client"

import { FileText, ExternalLink, FolderOpen, BookOpen, Trophy, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    icon: BookOpen,
    title: "Presentación del Portafolio",
    description: "Este portafolio académico reúne las evidencias desarrolladas durante el curso de Seguridad Informática, documentando el proceso de aprendizaje y aplicación de conceptos técnicos.",
    tags: ["Documentación", "Académico"],
  },
  {
    icon: FileText,
    title: "Actividades por Parcial",
    description: "Estudios de caso, análisis comparativos, interpretación de marcos normativos y aplicación de metodologías orientadas a la protección de la información.",
    tags: ["Análisis", "Metodología"],
    link: "#",
    linkText: "Ver actividades",
  },
  {
    icon: Trophy,
    title: "Road to Hall of Fame",
    description: "Documentación del camino hacia el reconocimiento en programas de bug bounty, incluyendo análisis de SQL Injection y otras vulnerabilidades.",
    tags: ["Bug Bounty", "SQL Injection"],
    link: "#",
    linkText: "Explorar",
  },
  {
    icon: FolderOpen,
    title: "Proyectos",
    description: "Proyectos prácticos desarrollados durante el curso, aplicando técnicas de defensa en red y evaluación de vulnerabilidades.",
    tags: ["Práctico", "Seguridad"],
    link: "#",
    linkText: "Ver proyectos",
  },
]

export function PortfolioSection() {
  return (
    <section id="portafolio" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <h2 className="text-3xl font-bold">
            <span className="text-primary font-mono">02.</span> Portafolio Académico
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.title}
              className="bg-card/80 backdrop-blur border-border hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent" />
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-primary/40 text-sm">
                    0{index + 1}
                  </span>
                </div>
                <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.link && (
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <a href={item.link}>
                      {item.linkText}
                      <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Actividades", value: "15+", icon: Activity },
            { label: "Proyectos", value: "5", icon: FolderOpen },
            { label: "Parciales", value: "3", icon: BookOpen },
            { label: "Semestre", value: "9.º", icon: Trophy },
          ].map((stat) => (
            <Card key={stat.label} className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
