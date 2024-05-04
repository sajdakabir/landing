import Link from "next/link";
import Twitter from "../icons/Twitter";

const NavLinks = () => {
  return (
    <>
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
    </>
  );
};

export default NavLinks;
