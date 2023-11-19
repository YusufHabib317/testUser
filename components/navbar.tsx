"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Cairo } from "next/font/google";

const font = Cairo({ subsets: ["latin"] });

const links = [
  {
    label: "بروفي",
    href: "/",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex items-center justify-center fixed inset-0 top-0 left-0 border-b mb-5 px-5 h-14 bg-[#f7edda] z-50",
        font.className
      )}
    >
      <div className="flex items-center justify-start gap-3 space-x-6 ">
        <Link href="/">
          <Image src={"/judge.png"} width={32} height={32} alt="logo" />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={classnames({
                  "hover:text-zinc-800 transition-all font-medium text-2xl":
                    true,
                  "text-zinc-900": link.href === pathname,
                  "text-zinc-500": link.href !== pathname,
                })}
              >
                {link.label}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
