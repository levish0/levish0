import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src="/shiueo_discord.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hero_img"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello There!</h1>
            <p className="py-6">
              I am a quiet developer who specializes in creating software that
              addresses the needs I perceive or solves tedious aspects for
              everyone. However, in reality, I do whatever I want to do. Music,
              illustration, programming, HOI IV, Minecraft... whatever it may
              be, if I find it interesting and joyful, I pursue it!
            </p>
            <button className="btn btn-primary">
              Check my youtube Channel! ▶
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
