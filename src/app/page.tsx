import Footer from "@/components/footer/Footer";
import HomeNavbar from "@/components/header/HomeNavbar";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CommandHandler from "@/components/CommandHandler";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <HomeNavbar />
      <CommandHandler />
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
          <Dialog>
            <DialogTrigger asChild className="outline-none focus:outline-none">
              <button className="group mx-auto flex items-center px-3 py-2 text-xs text-text-hover border border-text-hover rounded-full hover:bg-text-hover hover:text-black">
                Request Access{" "}
                <MoveRight
                  className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={1.4}
                  size={14}
                />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-dashboard rounded-xl md:rounded-2xl border-none h-fit w-fit md:w-96">
              <form className="w-fit mx-auto flex flex-col gap-y-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="md:mx-auto md:w-72"
                  id="username"
                  autoComplete="username"
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="md:mx-auto md:w-72"
                  id="email"
                  autoComplete="email"
                />

                <button
                  type="submit"
                  className="mt-3 mx-auto flex items-center justify-center px-3 py-2 text-xs text-text-hover border border-text-hover rounded-full hover:bg-text-hover hover:text-black"
                >
                  Submit
                </button>
              </form>
            </DialogContent>
          </Dialog>
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
