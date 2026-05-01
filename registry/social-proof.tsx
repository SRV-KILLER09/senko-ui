"use client"

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AvatarProps {
  src: string;
  alt: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Avatar({ src, alt, name, className, style }: AvatarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative rounded-full border-2 border-border/50 bg-muted shrink-0",
        "transition-all duration-300 ease-out cursor-pointer",
        "hover:scale-125 hover:z-50 hover:shadow-xl",
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="!m-0 absolute inset-0 w-full h-full object-cover rounded-full block" />

      {/* Only mount tooltip in DOM while hovered — no ghost elements */}
      {name && isHovered && (
        <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-semibold rounded-md whitespace-nowrap pointer-events-none z-[100] animate-in fade-in-0 duration-150">
          {name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
        </div>
      )}
    </div>
  );
}


export interface AvatarGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function AvatarGroup({ children, className }: AvatarGroupProps) {
  const childArray = React.Children.toArray(children);
  const total = childArray.length;
  return (
    <div className={cn("flex items-center overflow-visible", className)}>
      {childArray.map((child, index) => {
        if (React.isValidElement(child)) {
          const childElement = child as React.ReactElement<any>;
          return React.cloneElement(childElement, {
            className: cn(childElement.props.className, index !== 0 && "-ml-3"),
            // Later children (right side) get higher z-index so they sit on top visually
            style: { ...childElement.props.style, zIndex: index + 1 }
          });
        }
        return child;
      })}
    </div>
  );
}

export interface StarRatingProps {
  rating?: number;
  className?: string;
}

export function StarRating({ rating = 5, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-[2px]", className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-[18px] h-[18px]", 
            i < rating ? "fill-[#F5C518] text-[#F5C518]" : "fill-muted-foreground/30 text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className }: HeadingProps) {
  return (
    <h2 className={cn("text-lg sm:text-[19px] text-foreground/80 font-medium text-center leading-[1.5]", className)}>
      {children}
    </h2>
  );
}

export interface SocialProofProps {
  heading?: React.ReactNode;
  avatars?: { src: string; alt: string; name: string }[];
  rating?: number;
  className?: string;
}

const defaultAvatars = [
  { src: 'https://i.pravatar.cc/100?img=11', alt: 'User 1', name: 'Alex Thompson' },
  { src: 'https://i.pravatar.cc/100?img=32', alt: 'User 2', name: 'Sarah Chen' },
  { src: 'https://i.pravatar.cc/100?img=33', alt: 'User 3', name: 'Michael Ross' },
  { src: 'https://i.pravatar.cc/100?img=44', alt: 'User 4', name: 'Elena Rodriguez' },
  { src: 'https://i.pravatar.cc/100?img=55', alt: 'User 5', name: 'David Kim' },
];

export default function SocialProof({
  heading,
  avatars = defaultAvatars,
  rating = 5,
  className,
}: SocialProofProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-6", className)}>
      {heading ? (
        <Heading>{heading}</Heading>
      ) : (
        <Heading>
          Trusted by 120,000+ founders<br className="hidden sm:block" /> developers and creators
        </Heading>
      )}
      
      <div className="flex items-center gap-4">
        <AvatarGroup>
          {avatars.map((avatar, i) => (
            <Avatar 
              key={i} 
              src={avatar.src} 
              alt={avatar.alt} 
              name={avatar.name}
              className="w-12 h-12 shadow-sm" 
            />
          ))}
        </AvatarGroup>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}
