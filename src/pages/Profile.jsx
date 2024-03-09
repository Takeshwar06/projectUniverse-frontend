import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Label } from '@/components/ui/label';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { Button } from '@/components/ui/button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

export default function Profile() {
    const cardsData = [
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        { project: "smart-canteen", tech: "react.js node.js express.js mongodb", desc: " this project allow to student can order online" },
        // Add more card data as needed
    ];
    return (
        <div className='bg-slate-200 w-full py-4 px-3 lg:py-6 lg:px-8'>
            {/* profile section  */}
            <div className='profile-section w-full flex flex-wrap justify-around '>
                {/* image card */}
                <Card className='mb-3 w-[100%] sm:w-[48%] lg:w-[33%] xl:w-[350px]'>
                    <CardHeader>
                        <CardTitle>
                            <div className='w-full flex  justify-center mb-4'>
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src="https://res.cloudinary.com/do3fiil0d/image/upload/v1707374136/dlz7sat4yianjpmdr9bi.jpg" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <h1 className='text-center text-lg'>Takeshwar janghel</h1>
                        </CardTitle>
                        <CardDescription className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint placeat unde nulla. Rerum error ab qui repellendus quisquam aliquid sapiente, temporibus ea facilis inventore sequi odio reprehenderit incidunt nulla. Illum.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Diversity1Icon className='mr-3' />
                        <Label>Connections : 34</Label><br />
                        <FolderSpecialIcon className='mr-3' />
                        <Label>Projects : 34</Label>
                    </CardContent>
                    <CardFooter className="w-full  flex justify-between">
                        <Button className="w-1/2 mr-2 "><GroupAddIcon className="mr-2 h-4 w-4" />Connect</Button>
                        <Button className="w-1/2 mr-2 "><MessageRoundedIcon className="mr-2 h-4 w-4" />Message</Button>
                    </CardFooter>
                </Card>
                {/* social card */}
                <Card className='mb-3 w-[100%] sm:w-[48%] lg:w-[33%] xl:w-[350px]'>
                    <CardHeader>
                        <CardTitle className='text-lg'>Information</CardTitle>
                        <CardDescription>About Education and Social media</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <EmailRoundedIcon className='mr-3' />
                        <Label className='break-words'>
                            takeshwarcrafts.onrender.com
                        </Label><br />

                        <LinkedInIcon className='mr-3' />
                        <Label className='break-words'>
                            takeshwarcrafts.onrender.com
                        </Label><br />

                        <LinkIcon className='mr-3' />
                        <Label className='break-words'>
                            takeshwarcrafts.onrender.com
                        </Label><br />

                        <GitHubIcon className='mr-3' />
                        <Label className='break-words'>
                            takeshwarcrafts.onrender.com
                        </Label><br />

                        <InstagramIcon className='mr-3' />
                        <Label className='break-words'>
                            takeshwarcrafts.onrender.com
                        </Label><br />

                        <SchoolRoundedIcon className='mr-3' />
                        <Label className='break-words'>
                            rungta college of engineering and technology bhilai
                        </Label><br />

                        <LocationOnRoundedIcon className='mr-3' />
                        <Label className='break-words'>
                            rungta college of engineering and technology bhilai
                        </Label>
                    </CardContent>
                    <CardFooter >
                        <p className='text-lg font-medium'>Btech conputer science 3rd sem</p>
                    </CardFooter>
                </Card>
                {/* skills card */}
                <Card className='mb-3 w-[100%] lg:w-[33%] xl:w-[350px]'>
                    <CardHeader>
                        <CardTitle className='text-lg'>Technical Skills</CardTitle>
                        <CardDescription>Here About Programming Skills and Technology</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>*Programming</p>
                        <Badge className="m-1">C++</Badge>
                        <Badge className="m-1">C++</Badge>
                        <Badge className="m-1">C++</Badge>
                        <Badge className="m-1">C++</Badge>
                    </CardContent>
                    <CardContent>
                        <p>*Technology</p>
                        <Badge className="m-1">react.js</Badge>
                        <Badge className="m-1">node.js</Badge>
                        <Badge className="m-1">express.js</Badge>
                        <Badge className="m-1">mongoDB</Badge>
                    </CardContent>
                </Card>
            </div>

            <div className='projects-section w-full'>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {cardsData.map((card, index) => (
                        <div key={index} className="bg-white sm:w-[100%] rounded-lg shadow-md p-4">
                            <h3 className="text-lg text-red-500 text-center mb-1 font-semibold ">Ongoing <FactCheckIcon className='text-green-500' /></h3>
                            <div className='flex flex-row items-center'>
                                <h3 className="text-sm font-semibold ">PROJECT : </h3>
                                <h3 className="ml-1 text-sm text-gray-600 font-semibold lg:truncate " >{card.project}</h3>
                            </div>
                            <div className='flex flex-row items-center'>
                                <h3 className="text-sm font-semibold ">TECH : </h3>
                                <h3 className=" ml-1 text-sm text-gray-600 font-semibold lg:truncate" >{card.tech}</h3>
                            </div>
                            <div className='flex flex-row items-center'>
                                <h3 className="text-sm font-semibold ">DESC : </h3>
                                <h3 className="ml-1 text-sm text-gray-600 font-semibold lg:truncate" >{card.desc}</h3>
                            </div>
                            <div className='btn w-full flex justify-center'>
                                <Button variant="link" >SEE</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
