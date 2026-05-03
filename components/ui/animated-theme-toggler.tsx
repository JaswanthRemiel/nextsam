"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export const AnimatedThemeToggler = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-8 w-8 items-center justify-center rounded-md",
        "text-muted-foreground hover:text-foreground",
        "border border-transparent hover:border-[var(--border)]",
        "transition-all duration-200 ease-out",
        "hover:bg-[var(--card)]",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--border)]",
        className
      )}
      aria-label="Toggle theme"
      {...props}
    >
      {mounted ? (
        <>
          <Sun
            className={cn(
              "h-[1.1rem] w-[1.1rem] transition-all duration-300",
              resolvedTheme === "dark"
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            )}
            style={{ position: "absolute" }}
          />
          <Moon
            className={cn(
              "h-[1.1rem] w-[1.1rem] transition-all duration-300",
              resolvedTheme === "dark"
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            )}
            style={{ position: "absolute" }}
          />
        </>
      ) : (
        <div className="h-[1.1rem] w-[1.1rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
