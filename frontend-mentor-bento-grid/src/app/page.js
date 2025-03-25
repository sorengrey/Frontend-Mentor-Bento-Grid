import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-[32px] md:py-[50px] md:px-[40px] px-[16px] bg-[#F6F5F6]">
      <div className="grid grid-cols-1 max-w-[375px] md:max-w-[688px] items-center justify-items-center gap-[32px] margin-auto">
        <div className="flex flex-col text-preset-1 text-[46px] md:text-[54px] py-[40px] px-[32px] md:px-[76px] md:pt-[76px] md:pb-[72px] bg-purple-500 inline-block text-center justify-items-center rounded-[10px] w-full">
          Social Media
          <p className="flex text-yellow-500 inline"> 10x </p>
          <i className="mr-[11px]">Faster</i>with AI
          <div className="mt-[24px] mb-[8px]">
            <Image src="/stars.svg" alt="five stars" width="192" height="32" />
          </div>
          <p className="text-[18px] leading-[20px] tracking-[0px] font-normal">
            Over 4,000 5-star reviews
          </p>
        </div>
        <div className="flex md:flex-row gap-[32px]">
          <div className="flex-1 flex flex-col p-[16px] bg-white text-[26px] rounded-[10px] padding-[16px]">
            <div className="flex bg-white mb-[16px] gap-[10px]">
              <div className="flex flex-row flex-1 p-[12px] custom-shadow rounded-[34px] text-[16px] text-black">
                <Image
                  src="/instagram.svg"
                  alt="instagram logo"
                  width="42"
                  height="42"
                />
                <div className="flex flex-col font-medium tracking-[-0.06em] ml-[8px]">
                  @YourCo
                  <p className="text-preset-4">12K Followers</p>
                </div>
              </div>

              <div className="flex flex-1 p-[12px] custom-shadow rounded-[34px]">
                <Image src="/twitter.svg" alt="x logo" width="42" height="42" />
                <div className="flex flex-col ml-[8px]">
                  <p className="text-[16px] text-black font-medium tracking-[-0.06em]">
                    @YourCo
                  </p>
                  <p className="text-preset-4">8k Followers</p>
                </div>
              </div>
            </div>
            <p className="text-[26px] text-black text-preset-2">
              Manage multiple accounts and platforms.
            </p>
          </div>

          <div className="flex  flex-col flex-1 bg-yellow-500 rounded-[10px] pt-[16px] px-[16px] w-full text-preset-2 text-black  text-[26px]">
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
        </div>
        <div className="bg-purple-100 rounded-[10px] p-[32px] text-black text-center justify-items-center w-full">
          <p className="text-preset-3 mb-[24px]">Schedule to social media.</p>
          <div className="w-[308px] h-[272px]">
            <Image src="/graph.svg" alt="graph" width={308} height={272} />
          </div>
          <p className="text-[18px] tracking-[0px] leading-[20px] mt-[24px] text-center">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
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
          <p className="text-[32px] text-preset-5">
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
        <div className="bg-yellow-100 rounded-[10px] pl-[32px] pr-[32px] pb-[24px] pt-[32px] text-black text-[32px] text-preset-5 w-full">
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
        <div className="bg-yellow-500 rounded-[10px] p-[24px] text-black w-full text-[32px] text-preset-5">
          <p className="mb-[24px]"> Write your content using AI.</p>
          <Image src="/chat.png" alt="ai chat" width="220" height="223" />
        </div>
      </div>
    </div>
  );
}
