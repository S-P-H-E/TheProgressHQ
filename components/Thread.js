import Image from "next/image";
import Link from "next/link";

export default function Thread({image, title, threadId, link}){
    return (
        <Link className="flex flex-col justify-center items-center m-7" href={link}>
            <div className="relative flex justify-start items-end rounded-2xl border border-[#282A2C] transition-all hover:scale-105">
                <div className="absolute z-10 text-white m-5">
                    <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
                    <p className="text-xl text-[#7D7F83]">The Progress HQ</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl opacity-90" />
                <Image src={image} alt="Profile Image" className="rounded-2xl shadow md:h-[500px] w-fit"/>
            </div>
        </Link>
    )
}

// href={`/thread?threadId=${threadId}&title=${encodeURIComponent(title)}&image=${encodeURIComponent(image.src)}`}