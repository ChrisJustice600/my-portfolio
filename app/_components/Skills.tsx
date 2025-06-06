"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Section from "./Section";
import ExpressLogo from "./icons/ExpressLogo";
import NextLogo from "./icons/NextLogo";
import ReactLogo from "./icons/ReactLogo";
import TailwindLogo from "./icons/TailwindLogo";

const skills = [
  {
    icon: ReactLogo,
    title: "React",
    description:
      "Expertise approfondie en développement d'interfaces utilisateur modernes et réactives avec React. Maîtrise des hooks, du state management et des patterns avancés.",
    technologies: ["React Hooks", "Redux", "Context API", "React Query"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: NextLogo,
    title: "Next.js",
    description:
      "Développement d'applications full-stack performantes avec Next.js. Expertise en SSR, SSG et API Routes pour des applications web modernes.",
    technologies: ["SSR/SSG", "API Routes", "Middleware", "App Router"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TailwindLogo,
    title: "Tailwind CSS",
    description:
      "Création d'interfaces utilisateur élégantes et responsives avec Tailwind CSS. Maîtrise des composants personnalisés et des animations.",
    technologies: [
      "Responsive Design",
      "Custom Components",
      "Animations",
      "Dark Mode",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: ExpressLogo,
    title: "Express.js",
    description:
      "Développement d'APIs RESTful robustes et scalables avec Express.js. Expertise en architecture backend et sécurité.",
    technologies: ["REST APIs", "Middleware", "Authentication", "MongoDB"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ExpressLogo,
    title: "NestJS",
    description:
      "Architecture backend évolutive et maintenable avec NestJS. Expertise en développement d'applications modulaires et testables.",
    technologies: [
      "TypeScript",
      "Dependency Injection",
      "Microservices",
      "OpenAPI",
    ],
    color: "from-red-500 to-pink-500",
  },
  {
    icon: ReactLogo,
    title: "Remix",
    description:
      "Développement d'applications web modernes avec Remix. Maîtrise du rendu côté serveur et de la gestion d'état.",
    technologies: ["SSR", "Data Loading", "Form Handling", "Error Boundaries"],
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Skills() {
  return (
    <Section className="relative py-16">
      {/* Fond décoratif */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Badge variant={"outline"} className="mb-4">
          Compétences
        </Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Technologies & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-border/80 transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${skill.color})`,
                }}
              />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-background to-background/80 border border-border/50">
                  <skill.icon
                    size={32}
                    className="text-foreground/80 group-hover:text-foreground transition-colors"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold tracking-tight mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs py-1 px-2 bg-background/50 hover:bg-background/80 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
