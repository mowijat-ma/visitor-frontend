"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // Optional icon
import { GoArrowRight } from "react-icons/go";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className="flex items-center gap-2 hover:underline"
    >
      <GoArrowRight className="text-muted-foreground- size-6 " />
      <span></span>
    </button>
  );
}