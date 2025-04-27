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

export default function Main() {
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
          <Button variant="outline">My Github</Button>
          <Button variant="outline">My Resume</Button>
        </div>
      </div>

      <div className="p-5">
        <Separator />
      </div>

      <div className="flex flex-col items-center max-h-screen">
        <Label className="text-2xl font-special p-5">Experience</Label>
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
      <div className="flex flex-col items-center max-h-screen">
        <Label className="text-2xl font-special p-5">Selected Works</Label>
      </div>
    </div>
  );
}
