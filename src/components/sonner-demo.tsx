"use client"

import { Button } from "@UI/button";
import { toast } from "sonner";


export function SonnerDemo() {
  return (
    <Button onClick={() => toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })}>
      Click me
    </Button>
  )
}