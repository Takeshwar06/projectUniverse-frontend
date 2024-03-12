import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Button } from '@/components/ui/button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function Notification() {
  return (
    <div className='flex w-[100vw]  justify-center bg-gray-200'>
      <div className='w-[600px]'>
        <h1 className='text-slate-600 uppercase text-xl mb-4 font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 px-4 py-1 rounded text-center' >Your - all - Notification</h1>
        <Tabs defaultValue="connections" className="w-[100%] px-2">
          <TabsList className="grid w-full grid-cols-3 h-9 sticky z-10 top-0 ">
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
          </TabsList>
          <TabsContent value="connections" className='w-[100%]'>
            <div className='w-[100%] flex py-2 px-3 bg-white rounded-md items-center mb-2'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='w-[100%] flex ml-3 justify-between'>
                <div>
                  <p className='font-semibold'>Takeshwar janghel</p>
                  <p className='text-xs'>Wants to connect with you...</p>
                </div>
                <div className='flex'>
                  <button className='p-1 rounded-xl flex justify-center items-center hover:bg-green-200'>
                    <CheckCircleOutlineRoundedIcon className='text-green-500 ' />
                  </button>
                  <button className='p-1 rounded-xl flex justify-center items-center hover:bg-red-200'>
                    <HighlightOffRoundedIcon className='text-red-500 ' />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="messages">
            <div className='w-[100%] flex py-2 px-3 bg-white rounded-md items-center mb-2'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='w-[100%] flex ml-3 justify-between'>
                <div>
                  <p className='font-semibold'>Takeshwar janghel</p>
                  <p className='text-xs'>Hello bro what are you doing now?</p>
                </div>
                <div className='flex'>
                  <button className='p-1 rounded-xl flex justify-center items-center hover:bg-gray-100'>
                    <ArrowForwardRoundedIcon />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="collaborations">
            <div className='w-[100%] flex py-2 px-3 bg-white rounded-md items-center mb-2'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='w-[100%] flex ml-3 justify-between'>
                <div>
                  <p className='font-semibold'>Takeshwar janghel</p>
                  <p className='text-xs'>Smart-Canteen - Wants to contribute</p>
                </div>
                <div className='flex'>
                  <button className='p-1 rounded-xl flex justify-center items-center hover:bg-green-200'>
                    <CheckCircleOutlineRoundedIcon className='text-green-500 ' />
                  </button>
                  <button className='p-1 rounded-xl flex justify-center items-center hover:bg-red-200'>
                    <HighlightOffRoundedIcon className='text-red-500 ' />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex py-2 px-3 bg-white rounded-md items-center mb-2'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='w-[100%] flex ml-3 justify-between'>
                <div>
                  <p className='font-semibold'>Takeshwar janghel</p>
                  <p className='text-xs'>Smart-Canteen - Wants to contribute</p>
                </div>
                <div className='flex'>
                  <button className='p-1 rounded-xl flex justify-center items-center hover:bg-green-200'>
                    <CheckCircleOutlineRoundedIcon className='text-green-500 ' />
                  </button>
                  <button className='p-1 rounded-xl flex justify-center items-center hover:bg-red-200'>
                    <HighlightOffRoundedIcon className='text-red-500 ' />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  )
}
