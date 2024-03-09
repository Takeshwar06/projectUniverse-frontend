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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

export default function Authentication() {
    return (
        <div className='w-full flex justify-center'>
            <Tabs defaultValue="login" className="w-[450px] mt-5">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="create">Create</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                login you acount with some credicials.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Emai Adress</Label>
                                <Input id="email" placeholder="Enter you email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="Enter your password" />
                            </div>
                        </CardContent>
                        <CardFooter className='flex-col'>
                            <span className='mb-5 text-sm'>OR CONTINUE WITH</span>
                            <div className='w-full mb-5 flex justify-between'>
                                <Button className="w-1/2 mr-1 " variant="outline"><GitHubIcon className="mr-2 h-4 w-4" /> GitHub</Button>
                                <Button className="w-1/2 ml-1" variant="outline"><GoogleIcon className="mr-2 h-4 w-4" />Google</Button>
                            </div>
                            <Button className="w-full">Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="create">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create</CardTitle>
                            <CardDescription>
                                Create your account with some credencials.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Enter your name" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" placeholder="Enter your Email"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="c-password">Confirm Password</Label>
                                <Input id="c-password" type="password" placeholder="Confirm password"/>
                            </div>
                        </CardContent>
                        <CardFooter className='flex-col'>
                            <span className='mb-5 text-sm'>OR CONTINUE WITH</span>
                            <div className='w-full mb-5 flex justify-between'>
                                <Button className="w-1/2 mr-1 " variant="outline"><GitHubIcon className="mr-2 h-4 w-4" /> GitHub</Button>
                                <Button className="w-1/2 ml-1" variant="outline"><GoogleIcon className="mr-2 h-4 w-4" />Google</Button>
                            </div>
                            <Button className="w-full">Create</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
