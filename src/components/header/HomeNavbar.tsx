import React from "react";
import Twitter from "../icons/Twitter";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="flex items-end justify-between h-16">
        <div>march</div>
        <div className="flex items-center gap-x-8 text-sm">
        <Link
            href={
              "https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=fa9099b0ad4f450ca8d9997a8aecbee8&pvs=4"
            }
          >
            Blog
          </Link>
          <Link
            href={
              "https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=fa9099b0ad4f450ca8d9997a8aecbee8&pvs=4"
            }
          >
            Journals
          </Link>
          <Link href="https://twitter.com/march_dev">
            <Twitter size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;
