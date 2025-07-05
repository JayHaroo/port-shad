"use client";

import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import links from "./links.json";
import link from "next/link";

export default function CreativesPage() {
  const data = links as string[];

  useEffect(() => {
    if (data.length === 0) {
      console.error("No links found in the data array.");
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center">
        <Label className="text-4xl font-akira p-5 max-sm:text-[20px] text-center">
          My Graphic Design Works
        </Label>
        <Button className="">
          Back to Home
        </Button>
      </div>

      <Separator className="w-1/2 mb-5" />

      {/* Pinterest-like grid layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 p-5 w-full max-w-7xl">
        {data.map((link, index) => (
          <Card key={index} className="w-full mb-3 break-inside-avoid">
            <CardContent>
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage
                  src={link}
                  alt={`Creative ${index + 1}`}
                  className="object-contain"
                />
                <AvatarFallback>{`C${index + 1}`}</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
