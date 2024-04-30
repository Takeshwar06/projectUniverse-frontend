import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import { Button } from '../ui/button';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Input } from '../ui/input';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


export default function CommentDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='m-1'><MapsUgcRoundedIcon className="mr-2 h-2 w-2" />Comments</Button>
            </DialogTrigger>
            <DialogContent >
                <DialogHeader className='h-full w-full'>
                    <DialogTitle>Comment of this project</DialogTitle>
                    <ScrollArea className="h-[350px] w-[99%]">
                        {/* here comment card */}
                        <div className="comment-card">
                            <div>
                                <div className='h-10 flex items-center'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p className='ml-2 font-medium text-sm'>Takeshwar janghel</p>
                                </div>
                                <p className='text-justify text-sm text-gray-700 '>this project is very good and using this technology is very deficalt to go so i think he is very knowledgebla</p>
                            </div>
                            <Separator className="my-2" />
                        </div>
                        <div className="comment-card">
                            <div>
                                <div className='h-10 flex items-center'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p className='ml-2 font-medium text-sm'>Takeshwar janghel</p>
                                </div>
                                <p className='text-justify text-sm text-gray-700 '>this project is very good and using this technology is very deficalt to go so i think he is very knowledgebla</p>
                            </div>
                            <Separator className="my-2" />
                        </div>
                        <div className="comment-card">
                            <div>
                                <div className='h-10 flex items-center'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p className='ml-2 font-medium text-sm'>Takeshwar janghel</p>
                                </div>
                                <p className='text-justify text-sm text-gray-700 '>this project is very good and using this technology is very deficalt to go so i think he is very knowledgebla</p>
                            </div>
                            <Separator className="my-2" />
                        </div>
                    </ScrollArea>
                    <div className='w-[100%] flex'>
                        <Input className='mr-1' placeholder='write here your comment' />
                        <Button>Send</Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
