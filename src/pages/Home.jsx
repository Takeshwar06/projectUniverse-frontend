import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="w-full flex justify-center mt-5">
       <div className='w-[550px] py-3 rounded-lg bg-white'>
          <h1 className='px-1 text-center text-lg'>this project is onGoing you can see these page</h1>
          <div className='w-full flex justify-center mt-2 flex-wrap'>
             <Link to='/profile'><Button className='my-1 mx-1'>profile</Button></Link>
             <Link to='/auth'><Button className='my-1 mx-1'>auth</Button></Link>
             <Link to='/messages'><Button className='my-1 mx-1'>message</Button></Link>
             <Link to='/notifications'><Button className='my-1 mx-1'>notification</Button></Link>
             <Link to='/projectupload'><Button className='my-1 mx-1'>projectUpload</Button></Link>
             <Link to='/projectcode'><Button className='my-1 mx-1'>projectInfo</Button></Link>
          </div>
       </div>
    </div>
  )
}
