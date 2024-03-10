import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function ProjectUpload() {
    return (
        <div className='flex justify-center my-6'>
            <Card className='w-[450px]'>
                <CardHeader>
                    <CardTitle>Project Upload</CardTitle>
                    <CardDescription>
                        Welcome to our project submission portal! You can use this form to upload your project zip file
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Project Name*</Label>
                        <Input id="name" placeholder="Enter your project name" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="description">Project Description*</Label>
                        <Input id="description" placeholder="Enter project description" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="technology">Technology Used*</Label>
                        <Input id="technology" placeholder="Use ',' to separate technology (React,Node,MongoDB)" />
                    </div>
                    <div className="space-y-1">
                        <Label >Project zip file </Label>
                        <Label htmlFor="file">
                            <Input type='file' id='file' className='hidden' />
                            <Card className='w-[100%] cursor-pointer hover:bg-orange-50 flex flex-col items-center mt-2   border-dashed border-[2px] border-orange-600'>
                                <div className='mt-2'>
                                    <CloudUploadIcon className='text-orange-400' style={{ fontSize: '3rem' }} />
                                </div>
                                <div className='w-[70%] mb-3 flex justify-center'>
                                    <p className='text-xl text-center'><span className='text-orange-400'>Click here</span> to upload zip file</p>
                                </div>
                            </Card>
                        </Label>
                    </div>
                </CardContent>
                <CardFooter className='flex-col'>
                    <Button className="w-full"><CloudUploadIcon className='mr-2' />Upload</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
