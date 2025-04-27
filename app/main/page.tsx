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
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiPython,
  SiExpo,
  SiCss3,
  SiAndroidstudio,
  SiFlask,
  SiSolidity,
  SiHoppscotch,
  SiTailwindcss,
  SiVite,
  SiOpenai,
  SiFigma,
  SiExpress,
} from "react-icons/si";

import {
  FaJava,
  FaHtml5,
  FaHardHat,
  FaEthereum,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import { DiMysql, DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";

export default function Main() {
  const openUrl = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  function VideoPlayer({ uri }: { uri: string }) {
    return (
      <video controls width={"100%"} height={300}>
        <source src={uri} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <div className="flex flex-col align-center justify-center overflow-x-hidden">
      <div className="flex flex-col items-center max-h-screen">
        <Label className="text-4xl font-akira p-5 max-sm:text-[20px]">
          Greetings!
        </Label>
        <Avatar className="w-24 h-24 max-sm:w-16 max-sm:h-16">
          <AvatarImage src="https://avatars.githubusercontent.com/u/97579224?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-bold text-xl max-sm:text-[18px]">
          My name is M-Jey L. Saturno
        </div>
        <div className="font-medium max-sm:text-[12px]">
          Software, Mobile Developer & Graphic Designer
        </div>
        <div className="flex align-center justify-center mt-5 justify-evenly w-3/12 max-sm:w-8/12">
          <Button
            variant="outline"
            onClick={() => openUrl("https://github.com/JayHaroo")}
          >
            My Github
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              openUrl(
                "https://drive.google.com/file/d/1JgkBabXewQAZXjPe7DZaGoLcdvAQuagL/view?usp=drive_link"
              )
            }
          >
            My Resume
          </Button>
        </div>
      </div>

      <div className="p-5">
        <Separator />
      </div>

      <div className="flex flex-col items-center max-h-screen">
        <Label className="text-2xl font-akira p-5">Experience</Label>
        <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
          <Card className="w-96 max-sm:w-80">
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

          <Card className="w-96 max-sm:w-80">
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

          <Card className="w-96 max-sm:w-80">
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

      <div className="flex flex-col items-center max-w-screen mb-5 max-sm:mt-[100px]">
        <Label className="text-2xl font-akira p-5">Selected Works</Label>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 p-5">
          {/* Each card */}
          <Card className="w-full mb-3 break-inside-avoid">
            <CardHeader className="font-special">
              Icadio: An image Captioning application
            </CardHeader>
            <CardContent>
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage src="https://saturno-mjey.vercel.app/assets/icadio-D_oPlUfF.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-1">
              <Badge variant="outline">Android Studio</Badge>
              <Badge variant="outline">Kotlin</Badge>
              <Badge variant="outline">TensorFlow</Badge>
              <Badge variant="outline">Flask</Badge>
            </CardFooter>
          </Card>

          <Card className="w-full mb-3 break-inside-avoid">
            <CardHeader className="font-special">
              Selyo Mobile: Tokenizing Social Interactions
            </CardHeader>
            <CardContent>
              <Avatar className="rounded-none aspect-[16/9] w-full h-full">
                <AvatarImage src="https://saturno-mjey.vercel.app/assets/selyo-B1BAy3r4.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Hoppscotch</Badge>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-full mb-3 break-inside-avoid">
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

          <Card className="w-full mb-3 break-inside-avoid">
            <CardHeader className="font-special">
              NXT.GM: A place for everyone to share and join games
            </CardHeader>
            <CardContent>
              <VideoPlayer uri="https://nxtgm.s3.ap-southeast-2.amazonaws.com/uploads/untitled.webm" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Express.JS</Badge>
                <Badge variant="outline">AWS S3</Badge>
                <Badge variant="outline">MongoDB</Badge>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-full mb-3 break-inside-avoid">
            <CardHeader className="font-special">
              PassForge: A Strong Password Generator
            </CardHeader>
            <CardContent>
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage src="https://saturno-mjey.vercel.app/assets/passforge-nSObfqM-.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">Android Studio</Badge>
                <Badge variant="outline">Java</Badge>
              </div>
            </CardFooter>
          </Card>

          <Card className="w-full mb-3 break-inside-avoid">
            <CardHeader className="font-special">Chapp! - Chat dApp</CardHeader>
            <CardContent>
              <Avatar className="rounded-none aspect-[16/9] w-full h-full">
                <AvatarImage src="https://saturno-mjey.vercel.app/assets/chapp-BS9CDXP5.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="">
                <Badge variant="outline">Next.JS</Badge>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="p-5">
        <Separator />
      </div>

      <div className="flex flex-col items-center max-w-screen mb-10">
        <Label className="text-2xl font-akira p-5">My Stack</Label>
        <div className="flex grid grid-cols-8 gap-3 justify-center max-sm:grid-cols-4">
          <SiJavascript size={60} title="JavaScript" color="white" />
          <SiTypescript size={60} title="TypeScript" color="white" />
          <FaNodeJs size={60} title="NodeJS" color="white" />
          <SiReact size={60} title="React.JS" color="white" />
          <SiVite size={60} title="Vite" color="white" />
          <RiNextjsFill size={60} title="Next.JS" color="white" />
          <SiPython size={60} title="Python" color="white" />
          <FaJava size={60} title="Java" color="white" />
          <FaHtml5 size={60} title="HTML5" color="white" />
          <SiCss3 size={60} title="CSS3" color="white" />
          <SiTailwindcss size={60} title="Tailwind CSS" color="white" />
          <SiExpo size={60} title="Expo" color="white" />
          <SiAndroidstudio size={60} title="Android Studio" color="white" />
          <SiFlask size={60} title="Flask" color="white" />
          <SiExpress size={60} title="Express" color="white" />
          <DiMysql size={60} title="MySQL" color="white" />
          <DiMongodb size={60} title="MongoDB" color="white" />
          <SiSolidity size={60} title="Solidity" color="white" />
          <FaHardHat size={60} title="Hardhat" color="white" />
          <FaEthereum size={60} title="Ethereum" color="white" />
          <SiHoppscotch size={60} title="Hoppscotch" color="white" />
          <SiOpenai size={60} title="OpenAI" color="white" />
          <SiFigma size={60} title="Figma" color="white" />
          <FaAws size={60} title="AWS" color="white" />
        </div>
      </div>
    </div>
  );
}
