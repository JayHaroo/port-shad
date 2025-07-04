"use client";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect } from "react";
import links from "./links.json";


export default function creativesPages() {

  const data = links as string[];
  useEffect(() => {
    if (data.length === 0) {
      console.error("No links found in the data array.");
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Label className="text-4xl font-akira p-5 max-sm:text-[20px]">
        My graphic design works
      </Label>
      <Separator className="w-1/2 mb-5" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg p-5">
        {data.map((link, index) => (
          <Card key={index} className="w-full mb-3 break-inside-avoid">
            <CardContent className="">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage src={link} alt={`Creative ${index + 1}`} />
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </CardContent>
            <CardFooter className="justify-center">
            </CardFooter>
          </Card>
        ))}
        </div>

    </div>
  );
}
