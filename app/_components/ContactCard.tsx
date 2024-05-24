/* eslint-disable @next/next/no-img-element */
import { ArrowUpRightIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10  hover:bg-accent/30 transition-colors group flex items-center gap-4 flex-1">
      {/* <Link href={props.url}> */}
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 object-contain rounded-full"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 -bottom-1 -right-1 rounded-full object-contain absolute"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRightIcon
        className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
      {/* </Link> */}
    </Card>
  );
};
export default ContactCard;
