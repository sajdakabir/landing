import { Command } from "lucide-react";
import Heart from "../icons/Heart";
import Coffee from "../icons/Coffee";

const Footer = () => {
  return (
    <footer className="bottom-0 flex items-center justify-between w-full h-20">
      <div className="flex items-center gap-x-2 text-sm">
        Crafted with <Heart size={14} /> for makers on the internet.
      </div>

      <div className="flex items-center gap-x-4">
        <Command size={16} />
        <span>+</span>
        <span className="font-medium">K</span>
      </div>
    </footer>
  );
};

export default Footer;
