"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import Code from "./Code";
import Section from "./Section";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-24">
      {/* Fond animé avec particules */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-background/95"></div>

        {/* Particules animées */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10"
            style={{
              width: Math.random() * 10 + 3,
              height: Math.random() * 10 + 3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 20 - 10],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="text-sm font-medium text-primary bg-accent/20 py-1 px-3 rounded-full">
              Développeur Full Stack
            </span>
          </div>

          <h1 className="font-caption text-4xl md:text-6xl font-bold text-foreground mb-4">
            Christian{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">
              Mabeladi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Je crée des{" "}
            <span className="text-primary font-medium">
              expériences numériques
            </span>{" "}
            innovantes et{" "}
            <span className="text-accent-foreground font-medium">
              performantes
            </span>
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="https://www.linkedin.com/in/christian-mabeladi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="inline-flex items-center gap-2 bg-accent/20 hover:bg-accent/30 transition-all group">
                <LinkedinIcon
                  size={16}
                  className="text-primary group-hover:text-foreground transition-colors"
                />
                <span>Suivez-moi sur LinkedIn</span>
              </Code>
            </Link>

            <Link href="#">
              <Code className="inline-flex items-center gap-2 bg-secondary/20 hover:bg-secondary/30 transition-all group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg"
                  className="w-5 h-3 object-cover rounded-sm"
                  alt="flag rdc"
                />
                <span>Kinshasa, RDC</span>
              </Code>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-primary/20 text-primary font-medium py-3 px-8 rounded-full hover:bg-primary/5 transition-all"
            >
              Contactez-moi
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
              <img
                src="/profile.png"
                className="w-full h-full object-cover"
                alt="Christian Mabeladi"
              />
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-accent-foreground/20 blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-r from-accent/20 to-accent-foreground/20 blur-xl opacity-30 animate-pulse"></div>

            <div className="absolute -bottom-2 -right-2 bg-background/40 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm text-primary font-medium">
                  Disponible
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Élément décoratif en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
    </Section>
  );
}
