"use client";
/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Code, LucideIcon, Rss, StickyNote } from "lucide-react";
import Link from "next/link";
import Section from "./Section";

export default function Status() {
  return (
    <Section className="relative py-16">
      {/* Fond décoratif */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto px-4">
        {/* Expériences professionnelles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Calendar className="text-blue-400" />
                <span>Expériences Professionnelles</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {WORKS.map((work, index) => (
                  <Work key={index} {...work} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projets secondaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Code className="text-purple-400" />
                <span>Projets Personnels</span>
                <Badge
                  variant="secondary"
                  className="ml-auto bg-purple-900/30 text-purple-300"
                >
                  Fun & Passion
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {SIDE_PROJECTS.map((project, index) => (
                  <SideProject
                    key={index}
                    Logo={project.Logo}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    progress={project.progress}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

const SIDE_PROJECTS: sideProjectProps[] = [
  {
    Logo: Code,
    title: "ImpactPositif",
    description: "Plateforme de crowdfunding pour projets sociaux",
    url: "https://impact-ten.vercel.app/home",
    progress: 85,
  },
  {
    Logo: StickyNote,
    title: "DevNotes",
    description: "Application de prise de notes pour développeurs",
    url: "/",
    progress: 60,
  },
  {
    Logo: Rss,
    title: "Kwetu",
    description: "Plateforme de tourisme en RDC",
    url: "https://opays.freetvx.com/",
    progress: 100,
  },
  {
    Logo: Rss,
    title: "Githread",
    description: "Réseau social pour développeurs",
    url: "https://githread.vercel.app",
    progress: 40,
  },
];

type sideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  progress: number;
};

const SideProject = (props: sideProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-card to-card/70 border border-border/30 rounded-xl p-4 shadow-md hover:shadow-xl transition-all"
    >
      <Link href={props.url} className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
            <props.Logo size={20} />
          </span>
          <h3 className="text-lg font-semibold text-foreground">
            {props.title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {props.description}
        </p>

        <div className="mt-auto flex justify-end">
          <Badge
            variant="outline"
            className="text-xs py-1 px-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
          >
            Voir le projet
          </Badge>
        </div>
      </Link>
    </motion.div>
  );
};

const WORKS: workProps[] = [
  {
    title: "ImpactPositif",
    role: "Fondateur & Lead Developer",
    date: "2024 - Présent",
    url: "https://impact-ten.vercel.app/home",
    tags: ["Next.js", "TypeScript", "Stripe", "Leadership", "Architecture"],
  },
  {
    title: "Wolotech",
    role: "Développeur Full Stack Senior",
    date: "2023 - 2024",
    url: "https://wolotech.co",
    tags: ["Next.js", "Express.js", "MongoDB", "API REST"],
  },
  {
    title: "Enywork Sarl",
    role: "Développeur Full Stack",
    date: "2024 - 2025",
    url: "https://enywork.com",
    tags: ["React", "Node.js", "PostgreSQL", "API REST"],
  },
];

type workProps = {
  title: string;
  role: string;
  date: string;
  url: string;
  tags?: string[];
  freelance?: boolean;
};

const Work = (props: workProps) => {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="bg-gradient-to-br from-card to-card/70 border border-border/30 rounded-xl p-6 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
    >
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Link href={props.url} className="flex flex-col relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {props.title}
              </h3>
              {props.freelance && (
                <Badge
                  variant="secondary"
                  className="text-xs py-1 px-3 bg-blue-900/30 text-blue-300"
                >
                  Mission
                </Badge>
              )}
            </div>
            <p className="text-base text-muted-foreground font-medium">
              {props.role}
            </p>
          </div>
          <span className="text-sm font-medium text-muted-foreground bg-background/50 px-4 py-2 rounded-full border border-border/30 shadow-sm">
            {props.date}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {props.tags?.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-sm py-1.5 px-4 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Ligne décorative */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </Link>
    </motion.div>
  );
};
