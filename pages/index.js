import Head from "next/head";
import Image from "next/image";
import Andrew from "@/public/images/andrew.jpg"
import Dubai from "@/public/images/dubai.jpg"
import Tiger from "@/public/images/tiger.jpg"
import Thread from "@/components/Thread";
import { BsTwitter } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"

export default function Main() {
  return (
    <>
      <Head>
        <title>The Progress HQ</title>
        <meta name="description" content="Everything you need to know so that YOU can become a superior man" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-white flex justify-center items-center">
        <div className="w-fit m-10 p-3 border border-[#27292B] rounded-2xl flex justify-center items-center">
          <div>
            <BsTwitter size={45} className="m-4"/>
          </div>
          <div>
            <h1 className="text-2xl md:text-5xl font-medium">The Progress HQ</h1>
            <p className="text-[#7D7F83]">Everything you need to know so that YOU can become a superior man</p>
          </div>
        </div>
      </div>
      
      <Thread 
        image={Dubai}
        title={"5 PRINCIPLES of the SUPERIOR MAN"}
        threadId="1"
        link={"https://twitter.com/HQfor_progress/status/1637543755799568387"}
      />
      <Thread 
        image={Andrew}
        title={"4 MUST HAVE traits to get FINANCIAL INDEPENDENCE"}
        threadId="2"
        link={"https://twitter.com/HQfor_progress/status/1647684471909490688"}
      />
      <Thread 
        image={Tiger}
        title={"Want to TRANSFORM your LIFE?"}
        threadId="3"
        link={"https://twitter.com/HQfor_progress/status/1655295235574906882"}
      />

      <div className="text-[#7D7F83] flex justify-center items-center gap-3 m-5">
        <BsTwitter size={20} className="flex md:hidden" onClick={() => window.open('https://twitter.com/HQfor_progress')}/>
        <h1 className="hidden md:flex cursor-pointer hover:underline" onClick={() => window.open('https://twitter.com/HQfor_progress')}>Twitter</h1>
          <div className="border border-[#7D7F83] h-[13px]"/>
        <FaTiktok size={20} className="flex md:hidden" onClick={() => window.open('https://www.tiktok.com/@hqprogress')}/>
        <h1 className="hidden md:flex cursor-pointer hover:underline" onClick={() => window.open('https://www.tiktok.com/@hqprogress')}>Tiktok</h1>
      </div>
    </>
  )
}
