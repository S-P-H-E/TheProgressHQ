import Thread from "@/components/Thread";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ThreadPage() {
  const router = useRouter();
  const { threadId, title, image } = router.query;

  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content="Everything you need to know so that YOU can become a superior man" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center m-7" href={`/thread?threadId=${threadId}&title=${encodeURIComponent(title)}&image=${encodeURIComponent(image.src)}`}>
        <div className="relative flex justify-start items-end rounded-2xl">
          <div className="absolute z-10 text-white m-5">
            <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
            <p className="text-xl text-[#7D7F83]">The Progress HQ</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl opacity-90" />
          <Image src={image} alt="Profile Image" className="rounded-2xl shadow md:h-[500px] w-fit" height={500} width={500}/>
        </div>
      </div>

      <div className="text-white">
        
      </div>
    </>
    
  );
}
