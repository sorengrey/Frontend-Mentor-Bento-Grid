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
  );
}
