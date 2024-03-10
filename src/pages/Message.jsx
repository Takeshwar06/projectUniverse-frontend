import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Input } from '@/components/ui/input'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Button } from '@/components/ui/button'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

export default function Message() {
    return (
        <div className='w-full h-[90vh] bg-slate-200'>
            <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[100%] max-w-[100%] rounded-lg border"
            >
                <ResizablePanel defaultSize={25}>
                    {/* <span className="font-semibold">Sidebar</span> */}
                    <div style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} className='w-[100%] h-[100%]  overflow-y-scroll scrollbar-hide'>
                        {/* <TabsDemo/> */}
                        {/* <div className='w-[100%] h-9 bg-black sticky top-0'></div> */}
                        <Tabs defaultValue="All" className="w-[100%]">
                            <TabsList className="grid w-full grid-cols-3 h-9 sticky top-0 ">
                                <TabsTrigger value="All">All</TabsTrigger>
                                <TabsTrigger value="Connected">Connected</TabsTrigger>
                                <TabsTrigger value="Group">Group</TabsTrigger>
                            </TabsList>
                            <TabsContent value="All">
                                <div className='w-[100%] flex p-2 bg-white rounded-md items-center mb-2'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className='w-[100%] flex mx-2 justify-between'>
                                        <p>Takeshwar janghel</p>
                                        <p>Online</p>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="Connected">
                                <div className='w-[100%] flex p-2 bg-white rounded-md items-center mb-2'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className='w-[100%] flex mx-2 justify-between'>
                                        <p>Takeshwar janghel</p>
                                        <p>Online</p>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="Group">
                                <div className='w-[100%] flex p-2 bg-white rounded-md items-center mb-2'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className='w-[100%] flex mx-2 justify-between'>
                                        <p>Takeshwar janghel</p>
                                        <p>Online</p>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle className='bg-gray-900' />
                <ResizablePanel defaultSize={75}>
                    <div style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} className='w-[100%] h-[100%] rounded-t-xl overflow-y-scroll scrollbar-hide'>
                        <div className='w-[100%] h-16 bg-orange-300 sticky top-0 flex justify-between items-center px-2 sm:px-10'>
                            <div className='img-name flex items-center'>
                                <Avatar className='h-12 w-12'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p className='ml-3'>Takeshwar jaghel</p>
                            </div>
                            <div className='menu-key flex'>
                            <MoreVertRoundedIcon />
                            </div>
                        </div>

                        <div className='p-3 min-h-[90%]'>
                            <div className="message_box_right w-full flex  my-2">
                                <div className={`message bg-white px-2 py-[1px] w-fit max-w-[60%] rounded-lg rounded-tl-none`}>
                                    <p className='message_name'>
                                        this is not good but only legent can understand
                                    </p>
                                </div>
                            </div>
                            <div className="message_box_right w-full flex justify-end my-2">
                                <div className={`message bg-orange-400 px-2 py-[1px] w-fit max-w-[60%] rounded-lg rounded-tr-none`}>
                                    <p className='message_name'>
                                        this is not good but only legent can understand
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] justify-center items-center flex h-12 bg-gray-200 sticky bottom-0  px-2 sm:px-6'>
                            <Input className='border-gray-900' placeholder="Type your message here..." />
                            <button className='ml-1 pl-1 py-1 hover:bg-orange-500 bg-orange-400 rounded-2xl flex justify-center items-center' variant='outline'>
                                <SendRoundedIcon />
                            </button>
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
