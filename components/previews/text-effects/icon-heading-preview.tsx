import { IconicHeading } from "@/components/Icon-ic-Heading";
import { TrendingUp } from "lucide-react";
import React from "react";

export const IconicHeadingpreview = () => {
  return (
    <div className="flex w-full items-center justify-center py-12 px-4">
      <IconicHeading
        className="text-4xl md:text-6xl font-medium tracking-tight"
        lines={[
          {
            text: "Scale your Product",
            className: "-mb-2 md:-mb-3 text-white whitespace-nowrap text-foreground",
            icon: <TrendingUp className="w-[60%] h-[60%]" />,
            iconPosition: "between",
            iconClassName:
              "bg-gradient-to-t from-blue-200 to-blue-400 border border-white shadow-sm",
          },
          {
            text: "with TS-UI",
            className: "text-foreground font-medium",
          },
        ]}
      />
    </div>
  );
};