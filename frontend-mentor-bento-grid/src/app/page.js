import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-[32px] px-[16px] bg-[#F6F5F6]">
      <div className="grid grid-cols-1 max-w-[375px] items-center justify-items-center gap-[32px] margin-auto">
        <div className="flex flex-col text-preset-1 text-[46px] py-[40px] px-[32px] bg-purple-500 inline-block text-center justify-items-center rounded-[10px] w-full">
          Social Media
          <div className="flex text-yellow-500 inline"> 10x </div>
          <i className="mr-[11px]">Faster</i>with AI
          <div className="mt-[24px] mb-[8px]">
            <Image src="/stars.svg" alt="five stars" width="192" height="32" />
          </div>
          <div className="text-[18px] leading-[20px] tracking-[0px] font-normal">
            Over 4,000 5-star reviews
          </div>
        </div>

        <div className="flex flex-col p-[16px] text-black bg-white text-[26px] rounded-[10px] padding-[16px]">
          <div className="flex bg-white mb-[16px] gap-[10px]">
            <div className="flex flex-row flex-1 p-[12px] shadow-[0_0_24.45px_0_rgba(98,26,123,0.05)] rounded-[34px] text-[16px]">
              <Image
                src="/instagram.svg"
                alt="instagram logo"
                width="42"
                height="42"
              />
              <div className="flex flex-col font-medium tracking-[-0.06em]  ml-[8px]">
                @YourCo
                <div className="text-preset-4 text-[#9E9E9E]">
                  12K Followers
                </div>
              </div>
            </div>

            <div className="flex flex-1 p-[12px] shadow-[0_0_24.45px_0_rgba(98,26,123,0.05)] rounded-[34px]">
              <Image src="/twitter.svg" alt="x logo" width="42" height="42" />
              <div className="flex flex-col ml-[8px]">
                <div className="text-[16px] font-medium tracking-[-0.06em]">
                  @YourCo
                </div>
                <div className="text-preset-4 text-[#9E9E9E]">8k Followers</div>
              </div>
            </div>
          </div>
          <div className="text-[26px] font-medium leading-[24px] tracking-[-0.06em] ">
            Manage multiple accounts and platforms.
          </div>
        </div>

        <div className="bg-yellow-500 rounded-[10px] pt-[16px] px-[16px] w-full text-[26px] font-medium leading-[24px] tracking-[-0.06em] text-black">
          Maintain a consistent posting schedule.
          <div className="h-[157px] w-[208px] pt-[20px]">
            <Image
              src="/calendar.svg"
              alt="calendar"
              width={208}
              height={157}
            />
          </div>
        </div>

        <div className="bg-purple-100 rounded-[10px] p-[32px] text-black text-center justify-items-center w-full">
          <div className="text-preset-3 mb-[24px]">
            Schedule to social media.
          </div>
          <div className="w-[308px] h-[272px]">
            <Image src="/graph.svg" alt="graph" width={308} height={272} />
          </div>
          <div className="text-[18px] tracking-[0px] leading-[20px] mt-[24px] text-center">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </div>
        </div>

        <div className="bg-purple-500 text-center rounded-[10px] p-[24px] text-preset-3 w-full">
          <div className="justify-items-center">
            <Image
              src="/chart.svg"
              alt="growth chart"
              width="227"
              height="200"
            />
          </div>
          <p className="text-[32px] font-medium leading-[28px] tracking-[-0.085em]">
            Grow followers with non-stop content.
          </p>
        </div>
        <div className="bg-white rounded-[10px] p-[24px] text-black w-full">
          <div className="text-[46px] font-medium leading-[42px] tracking-[-0.085em] mb-[15px]">
            <span>&gt;</span>56%{" "}
          </div>
          <p className="mb-[24px] text-[18px] leading-[20px] tracking-[0]">
            faster audience growth
          </p>
          <Image src="/avatars.png" alt="avatars" width="179" height="67" />
        </div>
        <div className="bg-yellow-100 rounded-[10px] pl-[32px] pr-[32px] pb-[24px] pt-[32px] text-black text-[32px] font-medium leading-[28px] tracking-[-0.085em] w-full">
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
        <div className="bg-yellow-500 rounded-[10px] p-[24px] text-black w-full text-[32px] font-medium leading-[28px] tracking-[-0.06em]">
          <p className="mb-[24px]"> Write your content using AI.</p>
          <Image src="/chat.png" alt="ai chat" width="219" height="222" />
        </div>
      </div>
    </div>
  );
}
