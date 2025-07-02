"use client";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function creativesPages() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Label className="text-4xl font-akira p-5 max-sm:text-[20px]">
        My graphic design works
      </Label>
      <Separator className="w-1/2 mb-5" />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 p-5">
        {/* Each card */}
        <Card className="w-full mb-3 break-inside-avoid">
          <CardContent>
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage src="https://saturno-mjey.vercel.app/assets/icadio-D_oPlUfF.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <div className="ml-3">
              <Badge variant="outline">Android Studio</Badge>
              <Badge variant="outline">Kotlin</Badge>
              <Badge variant="outline">TensorFlow</Badge>
              <Badge variant="outline">Flask</Badge>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
