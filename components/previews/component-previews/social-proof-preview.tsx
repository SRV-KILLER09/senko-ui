"use client";

import SocialProof from "@/registry/social-proof";

export function SocialProofDefault() {
  return (
    <div className="flex items-center justify-center pt-16 pb-8 px-12 overflow-visible">
      <SocialProof />
    </div>
  );
}

export function SocialProofCustom() {
  return (
    <div className="flex items-center justify-center pt-16 pb-8 px-12 overflow-visible">
      <SocialProof
        heading={<>Join 50,000+ happy customers</>}
        rating={4}
        avatars={[
          { src: "https://i.pravatar.cc/100?img=1", alt: "User 1", name: "James Lee" },
          { src: "https://i.pravatar.cc/100?img=2", alt: "User 2", name: "Priya Singh" },
          { src: "https://i.pravatar.cc/100?img=3", alt: "User 3", name: "Tom Baker" },
        ]}
      />
    </div>
  );
}
