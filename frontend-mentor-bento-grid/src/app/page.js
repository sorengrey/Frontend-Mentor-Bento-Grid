import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-[32px] md:py-[50px] md:px-[40px] px-[16px] bg-[#F6F5F6]">
      <div className="grid grid-cols-1 max-w-[375px] md:max-w-[688px]  justify-items-center gap-[32px]">
        <div className="flex flex-col text-preset-1 text-[46px] md:text-[54px] py-[40px] px-[32px] md:px-[72px] bg-purple-500 inline-block text-center justify-items-center rounded-[10px] w-full md:py-[76px]">
          <div className="md:max-w-[500px]">
            Social Media
            <p className="flex text-yellow-500 inline"> 10x </p>
            <i className="mr-[11px]"> Faster </i>with AI
            <div className="mt-[24px] mb-[8px]">
              <Image
                src="/illustration-five-stars.webp"
                alt="five stars"
                width="192"
                height="32"
                className="m-auto"
              />
            </div>
            <p className="text-[18px] leading-[20px] tracking-[0px] font-normal">
              Over 4,000 5-star reviews
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-row gap-[32px]">
          <div className="flex-1 flex flex-col p-[16px] md:p-[24px] md:justify-between md:max-w-[328px] md:overflow-hidden bg-white text-[26px] rounded-[10px] sm:mb-[32px] md:mb-[0px]">
            <div className="flex max-w-[316px] md:w-[316px] md:h-[66px] custom-shadow rounded-[32px]">
              <Image
                src="/illustration-multiple-platforms.webp"
                alt="multiple social media accounts"
                width={317}
                height={67}
                quality={100}
                className="max-w-[316px] md:w-[316px] md:h-[66px] rounded-[32px]"
              />
            </div>
            <p className="text-[26px] md:text-[28px] mt-[16px] md:mt-[0px] md:max-w-[208px] text-black text-preset-2">
              Manage multiple accounts and platforms.
            </p>
          </div>

          <div className="flex flex-col flex-1 bg-yellow-500 rounded-[10px] pt-[16px] px-[16px] w-full text-preset-3 text-black text-[26px] md:text-[28px] mt-[32px] md:mt-[0px] md:pt-[24px] md:px-[24px]">
            Maintain a consistent posting schedule.
            <div className="h-[157px] w-[208px] pt-[16px] overflow-hidden">
              <Image
                src="/illustration-consistent-schedule.webp"
                alt="calendar"
                width={208}
                height={157}
              />
            </div>
          </div>
        </div>
        <div className="bg-purple-100 rounded-[10px] py-[32px] text-black text-center justify-items-center w-full px-[32px]">
          <p className="text-preset-3 mb-[24px] md:text-[28px]">
            Schedule to social media.
          </p>

          <Image
            src="/illustration-schedule-posts.webp"
            alt="graph"
            width={308}
            height={272}
            quality={100}
            className="md:w-[357px] md:h-[319px]"
          />

          <p className="text-[18px] tracking-[0px] leading-[20px] mt-[24px] text-center md:max-w-[355px]">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-purple-500 text-center rounded-[10px] p-[24px] text-preset-3 w-full justify-center items-center md:gap-[40px]">
          <div className="flex justify-center md:w-[227px] md:h-[200px]">
            <Image
              src="/illustration-grow-followers.webp"
              alt="growth chart"
              width="227"
              height="200"
              quality={100}
            />
          </div>
          <div className="text-[32px] md:text-[36px] text-center md:text-left text-preset-2 mt-[40px] md:mt-[0px] max-w-[257px]">
            Grow followers with non-stop content.
          </div>
        </div>

        <div className="md:flex md:justify-between bg-white rounded-[10px] p-[24px] text-black w-full">
          <div className="text-[46px] md:text-[54px] font-medium leading-[42px] tracking-[-0.085em]">
            <span>&gt;</span>56%{" "}
            <p className="pt-[15px] md:mt-[0px] mb-[24px] md:mb-[0px] text-[18px] leading-[20px] tracking-[0]">
              faster audience growth
            </p>
          </div>

          <div>
            <Image
              src="/illustration-audience-growth.webp"
              alt="avatars"
              width="179"
              height="67"
            />
          </div>
        </div>

        <div className="md:flex md:flex-row gap-[32px]">
          <div className="bg-yellow-100 rounded-[10px] pl-[32px] pr-[32px] pb-[24px] pt-[32px] md:p-[24px] md:pt-[76px] text-black text-[32px] md:text-[36px] text-preset-2 w-full mb-[32px] md:mb-[0px]">
            Create and schedule content
            <div className="text-purple-500 inline mb-[24px]">
              <i> quicker.</i>
            </div>
            <div className="mt-[24px]">
              <Image
                src="/illustration-create-post.webp"
                alt="create post button"
                width="191"
                height="91"
              />
            </div>
          </div>

          <div className="bg-yellow-500 rounded-[10px] p-[24px] text-black w-full text-[32px] md:text-[36px]">
            <p className="mb-[24px] text-preset-2">
              {" "}
              Write your content using AI.
            </p>
            <Image
              src="/illustration-ai-content.webp"
              alt="ai chat"
              width="220"
              height="223"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
