"use client";

import { LikeButton } from "@/registry/like-button";

export function LikeButtonDefault() {
  return (
    <div className="flex items-center justify-center p-8 gap-6">
      <LikeButton initialCount={128} />
    </div>
  );
}

export function LikeButtonLiked() {
  return (
    <div className="flex items-center justify-center p-8 gap-6">
      <LikeButton initialCount={2048} defaultLiked={true} />
    </div>
  );
}
