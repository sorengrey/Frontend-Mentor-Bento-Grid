import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-[32px] px-[16px] bg-[#F6F5F6]">
      <div className="grid grid-cols-1 max-w-[375px] items-center justify-items-center gap-[32px] margin-auto">
        <div className="flex flex-col headline p-[32px] bg-purple-500 inline-block text-center justify-items-center rounded-[10px] w-full">
          Social Media
          <div className="flex text-yellow-500 inline"> 10x </div>
          <i>Faster </i>with AI
          <div className="mt-[24px] mb-[8px]">
            <Image
              src="/stars.svg"
              alt="five stars"
              width="192"
              height="32"
              // className="w-[192px] h-[32px]"
            />
          </div>
          <div className="text-lg font-light tracking-normal">
            Over 4,000 5-star reviews
          </div>
        </div>
        <div className="flex flex-col items-center p-[16px] bg-white text-preset-3 rounded-[10px] padding-[16px]">
          <div className="inline-flex bg-white mb-[16px] text-preset-1">
            <div className="inline shadow-sm rounded-[34px] ">
              <Image
                src="/instagram.svg"
                alt="instagram logo"
                width="42"
                height="42"
              />
              @YourCo <div className="text-preset-4">12K Followers</div>
            </div>
            <div className="flex flex-col padding-[12px] text-preset-1 shadow-sm rounded-[34px]">
              <Image src="/twitter.svg" alt="x logo" width="42" height="42" />
              @YourCo <div className="text-preset-4">8k Followers</div>
            </div>
          </div>
          Manage multiple accounts and platforms.
        </div>
        <div className="bg-yellow-500 items-center rounded-[10px] pt-[16px] px-[16px] w-full text-preset-3">
          Maintain a consistent posting schedule.
          <Image src="/calendar.svg" alt="calendar" width="208" height="157" />
        </div>
        <div className="bg-purple-100 rounded-[10px] p-[16px] text-black">
          <div className="text-preset-3 mb-[24px]">
            Schedule to social media.
          </div>
          <Image src="/graph.png" alt="graph" width="308" height="272" />
          <div className="text-preset-2 mt-[24px] text-center">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </div>
        </div>
        <div className="bg-purple-500 items-center rounded-[10px] p-[20px] text-white text-preset-3 w-full">
          <Image
            src="/followers.png"
            alt="growth chart"
            width="227"
            height="200"
          />
          Grow followers with non-stop content.
        </div>
        <div className="bg-white items-center rounded-[10px] p-[20px] text-black w-full">
          56% faster audience growth
          <Image src="/avatars.png" alt="avatars" width="178" height="66" />
        </div>
        <div className="bg-yellow-100 items-center rounded-[10px] p-[32px] text-black text-[32px] font-medium leading-[28px] tracking-[-0.06em] pb-[24px] w-full">
          Create and schedule content
          <div className="text-purple-500 inline mb-[24px]">
            <i> quicker.</i>
          </div>
          <div className="mt-[24px]">
            <Image
              src="/button.svg"
              alt="create post button"
              width="190"
              height="90"
            />
          </div>
        </div>
        <div className="bg-yellow-500 items-center rounded-[10px] p-[20px] text-black w-full">
          Write your content using AI.
          <Image src="/chat.png" alt="ai chat" width="219" height="222" />
        </div>
      </div>
    </div>
  );
}
