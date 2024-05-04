import { Command } from "lucide-react";
import Heart from "../icons/Heart";

const Footer = () => {
  return (
    <footer className="bottom-0 flex items-center justify-center md:justify-between w-full h-20">
      <div className="flex items-center gap-x-2 text-xs md:text-sm">
        Crafted with <Heart size={14} /> for makers on the internet.
      </div>

      <div className="hidden md:flex items-center gap-x-3">
        <Command size={16} />
        <span>+</span>
        <span className="font-medium">K</span>
      </div>
    </footer>
  );
};

export default Footer;
