"use client"

import { TrendingUp } from "lucide-react"
import UnderlineHeading from "./underlined-heading"
import { IconicHeading } from "./Icon-ic-Heading"

export default function IconicHeadingExample() {
    return (
        <div className="flex flex-col items-center gap-2">

            {/* Line 1 */}
            <IconicHeading
                lines={[
                    {
                        text: "Scale your Product",
                        icon: <TrendingUp className="w-[60%] h-[60%]" />,
                        iconPosition: "between",
                        className: "font-medium text-3xl whitespace-nowrap",
                        iconClassName:
                            "bg-gradient-to-t from-blue-200 to-blue-400 border border-white",
                    },
                ]}
            />
            <UnderlineHeading
                content={["With TS-UI"]}
                highlightContent={["TS-UI"]}
                className="text-foreground text-3xl"
                highlightClassName="bg-amber-500 rotate-[-2deg] z-[0] bottom-[-10]"
                textGradientClass="bg-none text-foreground font-medium"
                behind
            />
        </div>
    )
}