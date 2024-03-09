import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import FolderIcon from '@mui/icons-material/Folder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import CodeIcon from '@mui/icons-material/Code';
import DoneIcon from '@mui/icons-material/Done';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContributorsDropMenu } from '@/components/customui/ContributorsDropMenu'
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { RatingDropMenu } from '@/components/customui/RatingDropMenu'
import { Label } from '@/components/ui/label'
import GitHubIcon from '@mui/icons-material/GitHub';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import CommentDialog from '@/components/customui/CommentDialog'

function Folder({ name, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="structures overflow-y-auto flex flex-col ">
            <div className="root_folder flex cursor-pointer">
                {
                    isOpen ?
                        <ExpandMoreIcon /> :
                        <ChevronRightIcon />
                }
                <FolderIcon onClick={(e) => setIsOpen(!isOpen)} className='text-yellow-400' />
                <h3 className='text-lg hover:opacity-95 select-none active:text-gray-300'
                    onClick={(e) => setIsOpen(!isOpen)}
                >&nbsp;{name}</h3>
            </div>
            {isOpen && <div className={`all_files flex flex-col gap-1  pl-6`}>{children}</div>}
        </div>
    )
}

function File({ name, path }) {
    // const { setCode } = useContext(mainContext);
    // const codeFetch = async (path) => {
    //     const data = await axios.post(getCode, { path });
    //     const str = data.data.replace(/\\/g, '\n')
    //     setCode(str);
    // }
    return (
        <div className="files flex cursor-pointer ">
            <SubdirectoryArrowRightIcon className='text-gray-800' />
            <CodeIcon className='text-red-500' />
            <h4 className='hover:opacity-95 select-none active:text-gray-300' >&nbsp;{name}</h4>
        </div>
    )
}

function FolderStructure({ data }) {
    const renderNode = (node) => {
        if (node.type === 'folder') {
            return (
                <Folder key={node.name} name={node.name}>
                    {node.children.map(renderNode)}
                </Folder>
            );
        } else if (node.type === 'file') {
            return <File key={node.name} name={node.name} path={node.path} />;
        }
        return null;
    };

    return <div>{data.map(renderNode)}</div>;
}
export default function ProjectCode() {
    const [copied, setCopied] = useState(false);

    const data = [
        {
            type: 'folder',
            name: 'Root',
            children: [
                {
                    type: 'folder',
                    name: 'Folder 1',
                    children: [
                        { type: 'file', name: 'File 1-1.txt' },
                        { type: 'file', name: 'File 1-2.txt' },
                    ],
                },
                {
                    type: 'folder',
                    name: 'Folder 2',
                    children: [
                        { type: 'file', name: 'File 2-1.txt' },
                        { type: 'file', name: 'File 2-2.txt' },
                    ],
                },
                { type: 'file', name: 'Root File.txt' },
            ],
        },
    ];
    return (
        <div className='bg-slate-200 w-full pt-3 px-2 lg:pt-6 lg:px-7'>
            <div className='project-info-section  w-full'>
                <Card className='sm:w-full'>
                    <CardHeader >
                        <CardTitle className='text-xl sm:text-2xl text-center'>Card Title</CardTitle>
                        <CardDescription className='text-lg text-justify sm:text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere rem illo voluptas, qui omnis dolorum rerum, at laborum eos voluptates minima nostrum culpa expedita ipsum amet officiis provident officia ab?</CardDescription>
                    </CardHeader>
                    <CardContent className='sm:w-full sm:flex sm:justify-center'>
                        <CardTitle className='text-lg'>Technology Userd :</CardTitle>
                        <Badge className='m-1'>python</Badge>
                        <Badge className='m-1'>java</Badge>
                        <Badge className='m-1'>java</Badge>
                        <Badge className='m-1'>java</Badge>
                        <Badge className='m-1'>java</Badge>
                        <Badge className='m-1'>java</Badge>
                        <Badge className='m-1'>java</Badge>
                        <Badge className='m-1'>java</Badge>
                    </CardContent>
                </Card>
            </div>

            <div className='btn-section w-full flex my-4 justify-evenly flex-wrap'>
                <Card className='flex flex-col justify-center py-2 px-3 mb-2 w-[90%] sm:w-[45%] lg:w-[220px] xl:w-[220px]'>
                    {/* <Button variant="outline" className='m-1'>tiger</Button> */}
                    <ContributorsDropMenu/>
                    <Button variant="outline" className='m-1'><Diversity2RoundedIcon className="mr-2 h-2 w-2" />Request</Button>
                    {/* for edit button */}
                    {/* <Button variant="outline" className='m-1'><DriveFileRenameOutlineRoundedIcon className="mr-2 h-2 w-2" />Edit</Button> */}
                </Card>
                <Card className='flex flex-col justify-center py-1 px-3 mb-2 w-[90%] sm:w-[45%] lg:w-[220px] xl:w-[220px]'>
                    <Button variant="outline" className='m-1'><AssignmentTurnedInRoundedIcon className="mr-2 h-2 w-2"/>See-docs</Button>
                    <Button variant="outline" className='m-1'><DownloadRoundedIcon className="mr-2 h-2 w-2"/>Download</Button>
                </Card>
                <Card className='flex flex-col justify-center py-1 px-3 mb-2 w-[90%] sm:w-[45%] lg:w-[220px] xl:w-[220px]'>
                    <Button variant="outline" className='m-1'><GitHubIcon className="mr-2 h-2 w-2"/>Reposetory</Button>
                     <CommentDialog/>
                </Card>
                <Card className='flex flex-col justify-center py-1 px-3 mb-2 w-[90%] sm:w-[45%] lg:w-[220px] xl:w-[220px]'>
                    <Label className='text-center font-medium h-7'>RATING</Label>
                    <RatingDropMenu/>
                </Card>

            </div>
            {/* <hr className='w-full h-[2px] bg-slate-500 mt-3'/> */}

            <div className='code-editor-section'>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="bg-white min-h-[100vh] max-w-[100%] rounded-lg border"
                >
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full">
                            {/* <span className="font-semibold">Sidebar</span> */}
                            <div className="folder_structures w-full text-black flex flex-col px-4 py-5 gap-3 shadow-sm shadow-blue-200 ">

                                <div className="stucture_heading flex font-signika">
                                    <h2 className='text-xl font-semibold opacity-90' >FOLDER STRUCTURE</h2>
                                </div>

                                {/* folder structure design */}
                                <div className="structures overflow-y-auto flex flex-col ">

                                    {/* root folder design --------------------*/}
                                    {<FolderStructure data={data} />}
                                </div>


                            </div>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full">
                            {/* <span className="font-semibold">Content</span> */}
                            <div className="code_space grid grid-rows-[auto,1fr] gap-1 w-full  font-overpass  my-1">
                                <div className="code_heading   bg-[#fff] text-black flex items-center justify-between rounded-lg px-1 sm:px-20">
                                    <p className="text-sm font-semibold opacity-90">CODE SECTION</p>
                                    <button className="inline-flex items-center  tracking-wide font-signika " >
                                        {
                                            !copied ? (
                                                <span
                                                    onClick={() => {
                                                        console.log("clicked");
                                                        navigator.clipboard.writeText("code");
                                                        setCopied(true);
                                                        setTimeout(() => {
                                                            setCopied(false);
                                                        }, 1000);
                                                    }
                                                    }
                                                    className='cursor-pointer' >
                                                    <ContentPasteOutlinedIcon />
                                                    &nbsp; Copy Text
                                                </span>

                                            ) : (
                                                <span

                                                    className='cursor-pointer'>
                                                    <DoneIcon />
                                                    &nbsp; Copied!
                                                </span>
                                            )
                                        }
                                    </button>
                                </div>
                                <div className="actual_code min-w-full min-h-full bg-[#3a404d] rounded-md overflow-x-scroll overflow-y-scroll">
                                    <SyntaxHighlighter language="jsx"
                                        style={atomOneDarkReasonable}
                                        customStyle={{
                                            padding: '25px',
                                            fontFamily: 'Fira Code',
                                            height: '100%'
                                        }}

                                        showLineNumbers={true}
                                    >
                                        {"code"}
                                    </SyntaxHighlighter>
                                </div>
                            </div>

                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}
