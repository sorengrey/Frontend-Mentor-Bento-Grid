import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-[40px] bg-[#F6F5F6]">
      <div className="grid items-center justify-items-center gap-[20px]">
        <div className="flex flex-col items-center p-[20px] bg-[#7551DC] inline-block text-white rounded-[10px]">
          Social Media
          <div className="flex text-[#FFCC6A] inline"> 10x </div>
          <i>Faster</i> with AI
          <Image
            src="/stars.svg"
            alt="five stars"
            width="192"
            height="32"
            // className="w-[192px] h-[32px]"
          />
          <div>Over 4,000 5-star reviews</div>
        </div>
        <div className="flex flex-col items-center p-[20px] bg-white text-black rounded-[10px]">
          <div className="inline-flex bg-white">
            <div className="inline">
              <Image
                src="/camera.png"
                alt="instagram logo"
                width="42"
                height="42"
              />
              @YourCo 12K Followers
            </div>
            <div className="inline">
              <Image src="/twitter.png" alt="x logo" width="42" height="42" />
              @YourCo 8k Followers
            </div>
          </div>
          Manage multiple accounts and platforms.
        </div>
        <div className="bg-[#FFCC6A] items-center rounded-[10px] p-[20px] text-black">
          Maintain a consistent posting schedule.
          <Image src="/calendar.png" alt="calendar" width="208" height="157" />
        </div>
        <div className="bg-[#DBD1FC] rounded-[10px] p-[20px] text-black">
          <div> Schedule to social media.</div>
          <Image src="/graph.png" alt="graph" width="308" height="272" />
          <div>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </div>
        </div>
        <div className="bg-[#7551DC] items-center rounded-[10px] p-[20px] text-white">
          <Image
            src="/followers.png"
            alt="growth chart"
            width="227"
            height="200"
          />
          Grow followers with non-stop content.
        </div>
        <div className="bg-white items-center rounded-[10px] p-[20px] text-black">
          56% faster audience growth
          <Image src="/avatars.png" alt="avatars" width="178" height="66" />
        </div>
        <div className="bg-[#F9EEE2] items-center rounded-[10px] p-[20px] text-black">
          Create and schedule content
          <div className="flex text-[#7551DC] inline">
            <i> quicker.</i>
            <Image
              src="/button.png"
              alt="create post button"
              width="190"
              height="90"
            />
          </div>
        </div>
        <div className="bg-[#FFCC6A] items-center rounded-[10px] p-[20px] text-black">
          Write your content using AI.
          <Image src="/chat.png" alt="ai chat" width="219" height="222" />
        </div>
      </div>
    </div>

    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
