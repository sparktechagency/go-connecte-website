"use client";
import { Toaster } from "sonner";

export default function ClientToaster() {
  return (
    <Toaster expand={true} position="top-right" richColors visibleToasts={5} />
  );
}
