import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from "../ui/separator"
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

export function RatingDropMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className='m-1'>
                    <StarRateRoundedIcon className="mr-[1px] h-2 w-2" />
                    <StarRateRoundedIcon className="mr-[1px] h-2 w-2" />
                    <StarRateRoundedIcon className="mr-[1px] h-2 w-2" />
                    <StarBorderRoundedIcon className="mr-[1px] h-2 w-2" />
                    <StarBorderRoundedIcon className="mr-[1px] h-2 w-2" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
                <DropdownMenuLabel>Rate this project</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <div className="px-1 w-[100%]">
                    <div className="stars w-[100%] flex justify-center">
                        <StarRateRoundedIcon className="mr-[1px] h-2 w-2 cursor-pointer" />
                        <StarRateRoundedIcon className="mr-[1px] h-2 w-2 cursor-pointer" />
                        <StarRateRoundedIcon className="mr-[1px] h-2 w-2 cursor-pointer" />
                        <StarBorderRoundedIcon className="mr-[1px] h-2 w-2 cursor-pointer" />
                        <StarBorderRoundedIcon className="mr-[1px] h-2 w-2 cursor-pointer" />
                    </div>
                    <DropdownMenuSeparator />
                    <div className="btns w-[100%] flex justify-between">
                        < DropdownMenuItem>
                            <Button size='sm' variant='outline'>Back</Button>
                        </ DropdownMenuItem>
                        <Button size='sm' className='mt-2' >Submit</Button>
                    </div>
                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
