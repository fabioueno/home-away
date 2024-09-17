import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {LuAlignLeft} from "react-icons/lu";
import UserIcon from "@/components/navbar/UserIcon";
import {links} from "@/utils/links";
import Link from "next/link";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="h-6 w-6"/>
          <UserIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
        {links.map((link) => {
          return <DropdownMenuItem key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;