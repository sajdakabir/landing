import Footer from "@/components/footer/Footer";
import HomeNavbar from "@/components/header/HomeNavbar";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <HomeNavbar />

      <section className="h-full max-w-80 mx-auto grid place-content-center text-center">
        <Image
          src="/logo.png"
          alt="Hero image"
          width={120}
          height={140}
          className="mx-auto mb-2 h-auto w-auto"
        />

        <h2 className="text-2xl flex flex-col text-text-hover font-medium">
          <span>Sprint planner for</span>
          <span>next generation makers.</span>
        </h2>

        <div className="text-sm mt-2">
          to plan, collaborate and build remarkable products, really fast.
        </div>

        <div className="mt-6">
          <button className="group mx-auto flex items-center px-3 py-2 text-xs text-text-hover border border-text-hover rounded-full hover:bg-text-hover hover:text-black">
            Request Access{" "}
            <MoveRight
              className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
              strokeWidth={1.4}
              size={14}
            />
          </button>
          <div className="mt-3">
            <p className="text-xs text-dull-text">
              We&apos;re currently in a private alpha.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
