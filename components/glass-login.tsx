"use client"

import * as React from "react"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
} from "@/components/glass-card"

const LoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const GlassLogin = () => {
  const [pending, setPending] = React.useState(false)
  const [state, setState] = React.useState({
    success: false,
    errors: {
      username: "",
      email: "",
      password: "",
    },
  })

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setPending(true)

      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData.entries())
      const result = LoginSchema.safeParse(data)

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors
        setState({
          success: false,
          errors: {
            username: fieldErrors.username?.[0] ?? "",
            email: fieldErrors.email?.[0] ?? "",
            password: fieldErrors.password?.[0] ?? "",
          },
        })
        setPending(false)
        return
      }

      await new Promise((resolve) => setTimeout(resolve, 1500))
      setState({
        success: true,
        errors: { username: "", email: "", password: "" },
      })
      setPending(false)
    },
    []
  )

  return (
    <GlassCard className="w-full max-w-md">
      <GlassCardHeader>
        <GlassCardTitle>Login</GlassCardTitle>
        <GlassCardDescription>
          Enter your credentials to access your account.
        </GlassCardDescription>
      </GlassCardHeader>

      <form onSubmit={handleSubmit}>
        <GlassCardContent className="space-y-4">
          {/* USERNAME */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-muted-foreground">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="johndoe"
              disabled={pending}
            />
            {state.errors.username && (
              <p className="text-xs text-destructive">
                {state.errors.username}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-muted-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              disabled={pending}
            />
            {state.errors.email && (
              <p className="text-xs text-destructive">
                {state.errors.email}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-muted-foreground">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              disabled={pending}
            />
            {state.errors.password && (
              <p className="text-xs text-destructive">
                {state.errors.password}
              </p>
            )}
          </div>
        </GlassCardContent>

        <GlassCardFooter className="mt-6">
          <Button
            type="submit"
            disabled={pending}
            className={cn(
              "w-full py-3 rounded-lg transition-all duration-200",
              "backdrop-blur-md border",

              // glass surface
              "bg-black/5 hover:bg-black/10 border-black/10",
              "dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/20",

              // text
              "text-foreground",

              // interaction
              "hover:scale-[1.02] active:scale-[0.98]",
              "shadow-lg"
            )}
          >
            {pending ? "Signing in..." : "Sign In"}
          </Button>
        </GlassCardFooter>
      </form>
    </GlassCard>
  )
}