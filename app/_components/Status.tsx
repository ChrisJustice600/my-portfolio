/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, LucideIcon, Rss, StickyNote } from "lucide-react";
import Link from "next/link";
import ContactCard from "./ContactCard";
import Section from "./Section";
export default function Status() {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, Fun Project </p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="Christian Mabeladi"
            image="https://i.ibb.co/Wz50XqN/Black-Purple-Professional-Personal-Business-Profile-Instagram-Post.png"
            mediumImage="data:image/jpeg;base64,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"
            description="..."
          />
          <ContactCard
            name="Christian Mabeladi"
            image="https://media.licdn.com/dms/image/D4E03AQGkDoYJS5AHRg/profile-displayphoto-shrink_200_200/0/1716031544697?e=1721865600&v=beta&t=aXNwgqw99ivIQi4kAmeDY1yxVf1lsUzs_duKTRK_p7E"
            mediumImage="data:image/png;base64,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"
            description="..."
          />
        </Card>
      </div>
    </Section>
  );
}

const SIDE_PROJECTS: sideProjectProps[] = [
  {
    Logo: Code,
    title: "ImpactPositif",
    description: "A fundraising platform",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "Twitter",
    description: "A twitter's clone",
    url: "/",
  },
  {
    Logo: Rss,
    title: "Kwetu",
    description: "A tourism platform",
    url: "/",
  },
  {
    Logo: Rss,
    title: "Githread",
    description: "A social plateform",
    url: "/",
  },
];

type sideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
const SideProject = (props: sideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo />
      </span>
      <div className="">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: workProps[] = [
  {
    image: "https://impact-ten.vercel.app/assets/logo-BU1O6LjE.png",
    title: "ImpactPositif",
    role: "Founder",
    date: "in development",
    url: "https://impact-ten.vercel.app/home",
  },
  {
    image:
      "https://opays.freetvx.com/wp-content/uploads/2023/08/Plan-de-travail-33-8.png",
    title: "Kwetu",
    role: "Software developer",
    date: "2023-2024",
    url: "https://opays.freetvx.com/",
  },
  {
    image:
      "https://opays.freetvx.com/wp-content/uploads/2023/08/Plan-de-travail-33-8.png",
    title: "E-Somba Network",
    role: "Software developer",
    date: "2024",
    url: "/",
  },
];

type workProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};
const Work = (props: workProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
