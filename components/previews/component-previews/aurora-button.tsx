import AuroraButton from "@/registry/aurora-button"


export function AuroraButtonDefault() {
  return <AuroraButton label="Get Started" />
}

export function AuroraButtonPink() {
  return <AuroraButton label="Learn More" beamColor="236, 72, 153" duration="2s" />
}

export function AuroraButtonBlue() {
  return <AuroraButton label="Sign Up" beamColor="59, 130, 246" duration="4s" />
}

export function AuroraButtonSlow() {
  return <AuroraButton label="Explore" beamColor="139, 92, 246" duration="6s" />
}

export function AuroraButtonFast() {
  return <AuroraButton label="Buy Now" beamColor="245, 158, 11" duration="1s" />
}