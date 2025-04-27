import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Main(){
    return(
        <div className="">
            <div className="flex flex-col items-center justify-center h-screen">
                <Label className="text-2xl font-bold text-gray-800 dark:text-gray-200">Welcome to my Portfolio</Label>
                <Separator className="my-4 w-full" />
                <Label className="text-lg text-gray-600 dark:text-gray-400">This is a simple portfolio page.</Label>
            </div>
        </div>
    )
}