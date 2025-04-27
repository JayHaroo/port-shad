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

export default function Main() {
  const openUrl = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="flex flex-col align-center justify-center">
      <div className="flex flex-col items-center max-h-screen">
        <Label className="text-4xl font-akira p-5">Greetings!</Label>
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://avatars.githubusercontent.com/u/97579224?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">My name is M-Jey L. Saturno</div>
        <div className="">Software, Mobile Developer & Graphic Designer</div>
        <div className="flex align-center justify-center mt-5 justify-evenly w-3/12">
          <Button variant="outline" onClick={() => openUrl('https://github.com/JayHaroo')}>My Github</Button>
          <Button variant="outline" onClick={() => openUrl('https://drive.google.com/file/d/1JgkBabXewQAZXjPe7DZaGoLcdvAQuagL/view?usp=drive_link')}>My Resume</Button>
        </div>
      </div>

      <div className="p-5">
        <Separator />
      </div>

      <div className="flex flex-col items-center max-h-screen">
        <Label className="text-2xl font-akira p-5">Experience</Label>
        <div className="flex justify-around w-11/12">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Freelance Graphic Designer</CardTitle>
              <CardDescription>At FIVERR</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Worked on a Logo Design, Poster Design, and other Graphic Design
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>2021-2022</div>
              <div>Remote</div>
            </CardFooter>
          </Card>

          <Card className="w-96 ">
            <CardHeader>
              <CardTitle>Part-Time Layout & Graphic Designer</CardTitle>
              <CardDescription>At EZ Press</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Worked on a managing the layout of the DTF films and other
                graphic related works.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>2022-2023</div>
              <div>On Site</div>
            </CardFooter>
          </Card>

          <Card className="w-96 ">
            <CardHeader>
              <CardTitle>Software Engineer Intern</CardTitle>
              <CardDescription>At The BLOKC</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Worked on a various Web2 + Web3 Projects. Assigned to the Mobile
                Development
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>Jan - Mar 2025</div>
              <div>Remote</div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="p-5">
        <Separator />
      </div>
      <div className="flex flex-col items-center max-w-screen">
        <Label className="text-2xl font-akira p-5">Selected Works</Label>
        <div className="flex grid gap-3 justify-center w-full">
          <Card className="w-96">
            <CardHeader className="font-special">
              Icadio: An image Captioning application
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">Android Studio</Badge>
                <Badge variant="outline">Kotlin</Badge>
                <Badge variant="outline">TensorFlow</Badge>
                <Badge variant="outline">Flask</Badge>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-96">
            <CardHeader className="font-special">
              Selyo Mobile: Tokenizing Social Interactions
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Hoppscotch</Badge>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-96">
            <CardHeader className="font-special">
              Doku. – Smart Contracts, No BLockchain needed.
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Express.JS</Badge>
                <Badge variant="outline">MongoDB</Badge>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-96">
            <CardHeader className="font-special">
              NXT.GM: A place for everyone to share and join games
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Express.JS</Badge>
                <Badge variant="outline">AWS S3</Badge>
                <Badge variant="outline">MongoDB</Badge>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-96">
            <CardHeader className="font-special">
              PassForge: A Strong Password Generator
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">Android Studio</Badge>
                <Badge variant="outline">Java</Badge>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-96">
            <CardHeader className="font-special">Chapp! - Chat dApp</CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">Next.JS</Badge>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
