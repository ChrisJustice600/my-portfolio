/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Code from "./Code";
import Section from "./Section";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Hero() {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold text-primary">
          Christian Mabeladi
        </h2>
        <h3 className="text-3xl font-caption">Software developer</h3>
        <p className="text-base">
          i love created conntent on
          <Link href="https://www.linkedin.com/in/christian-mabeladi/">
            <Code className="inline-flex items-center gap-1">
              <LinkedinIcon size={13} className="inline" /> LinkedIn
            </Code>
          </Link>
          . Living
          <Link href="https://www.linkedin.com/in/christian-mabeladi/">
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg"
                className="w-4 h-2"
                alt="flag rdc"
              />
              kinshasa Drc
            </Code>
          </Link>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://i.ibb.co/Wz50XqN/Black-Purple-Professional-Personal-Business-Profile-Instagram-Post.png"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
          alt="christian's profile"
        />
      </div>
    </Section>
  );
}
