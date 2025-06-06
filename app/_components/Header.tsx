"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import Section from "./Section";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <Section className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-primary">christian.com</h1>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/ChrisJustice600"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 hover:bg-accent/20 transition-colors"
            )}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/christian-mabeladi/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 hover:bg-accent/20 transition-colors"
            )}
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
}
