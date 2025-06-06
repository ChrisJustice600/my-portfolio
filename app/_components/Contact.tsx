"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import Section from "./Section";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <Section className="relative py-16 overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant={"outline"}
            className="mb-4 bg-background/50 backdrop-blur-sm border-border/50"
          >
            Contact
          </Badge>
          <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Travaillons ensemble
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <motion.div variants={item}>
            <ContactCard
              url="mailto:christianmabeladi@gmail.com"
              name="Christian Mabeladi"
              image="https://avatars.githubusercontent.com/u/85912956?v=4"
              mediumImage="data:image/png;base64,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"
              description="Contactez-moi sur LinkedIn pour toute opportunité"
            />
          </motion.div>
          <motion.div variants={item}>
            <ContactCard
              url="mailto:christianmabeladi@gmail.com"
              name="christianmabeladi@gmail.com"
              image="https://lh3.googleusercontent.com/a/ACg8ocLR239Dh6o7sjh3tBOvvi2jIiw8_xNqxaficXNSYN0C_rCuIkQE=s288-c-no"
              mediumImage="data:image/jpeg;base64,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"
              description="Envoyez-moi un email pour toute demande"
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
