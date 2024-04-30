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

export function ContributorsDropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='m-1' variant="outline"><Diversity2RoundedIcon className="mr-2 h-2 w-2" />Contributors</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>Contributors List</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <ScrollArea className="h-60 w-[100%] rounded-md border">
          <>
            < DropdownMenuItem className="px-1 h-12 w-[100%] flex items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg px-2">tiger</p>
            </ DropdownMenuItem>
            <Separator />
          </>
          <>
            < DropdownMenuItem className="px-1 h-12 w-[100%] flex items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg px-2">tiger</p>
            </ DropdownMenuItem>
            <Separator />
          </>
          <>
            < DropdownMenuItem className="px-1 h-12 w-[100%] flex items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-lg px-2">tiger</p>
            </ DropdownMenuItem>
            <Separator />
          </>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
