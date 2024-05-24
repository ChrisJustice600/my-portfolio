import { Badge } from "@/components/ui/badge";
import Code from "./Code";
import Section from "./Section";
import ExpressLogo from "./icons/ExpressLogo";
import ReactLogo from "./icons/ReactLogo";
import TailwindLogo from "./icons/TailwindLogo";

export default function Skills() {
  return (
    <Section className="flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...{" "}
      </h2>
      <div className="flex max-md:flex-col grap-2">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className=" text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>react</Code>. I also like{" "}
            <Code>node</Code> for the backend side
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />
          <h3 className=" text-2xl font-semibold tracking-tight">
            Tailwindcss
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>react</Code>. I also like{" "}
            <Code>node</Code> for the backend side
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <ExpressLogo size={42} />
          <h3 className=" text-2xl font-semibold tracking-tight">Express</h3>
          <p className="text-sm text-muted-foreground">
            I have expertise in building robust and scalable web applications
            using <Code>Express.js</Code> , a <Code>powerful Node.js</Code>{" "}
            framework
          </p>
        </div>
      </div>
    </Section>
  );
}
