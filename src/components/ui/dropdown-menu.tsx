"use client"

import React, { createContext, useContext, useState } from "react"
import { cn } from "../../lib/utils"

type DropdownMenuContextType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onOpenChange?: (open: boolean) => void
}

const DropdownMenuContext = createContext<DropdownMenuContextType | undefined>(undefined)

export function DropdownMenu({
  children,
  onOpenChange,
}: {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, onOpenChange }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  )
}

export function DropdownMenuTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode
  asChild?: boolean
}) {
  const context = useContext(DropdownMenuContext)
  if (!context) throw new Error("DropdownMenuTrigger must be used within DropdownMenu")

  const { open, setOpen, onOpenChange } = context

  const handleClick = () => {
    setOpen(!open)
    if (onOpenChange) onOpenChange(!open)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      "aria-expanded": open,
      "aria-haspopup": true,
    })
  }

  return (
    <button onClick={handleClick} aria-expanded={open} aria-haspopup={true}>
      {children}
    </button>
  )
}

export function DropdownMenuContent({
  children,
  align = "center",
  className,
}: {
  children: React.ReactNode
  align?: "start" | "center" | "end"
  className?: string
}) {
  const context = useContext(DropdownMenuContext)
  if (!context) throw new Error("DropdownMenuContent must be used within DropdownMenu")

  const { open } = context

  if (!open) return null

  return (
    <div
      className={cn(
        "absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        {
          "left-0": align === "start",
          "left-1/2 -translate-x-1/2": align === "center",
          "right-0": align === "end",
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

export function DropdownMenuItem({
  children,
  className,
  asChild,
  ...props
}: {
  children: React.ReactNode
  className?: string
  asChild?: boolean
  [key: string]: any
}) {
  const context = useContext(DropdownMenuContext)
  if (!context) throw new Error("DropdownMenuItem must be used within DropdownMenu")

  const { setOpen, onOpenChange } = context

  const handleClick = () => {
    setOpen(false)
    if (onOpenChange) onOpenChange(false)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      ),
      onClick: handleClick,
    })
  }

  return (
    <div
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  )
}
