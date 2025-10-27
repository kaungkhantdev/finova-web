import {
  IconLogout,
} from "@tabler/icons-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bolt } from "lucide-react"
import { Link } from "react-router"
import { ROUTES } from "@/utils/constants"
import useLogout from "@/features/authentication/hooks/useLogout"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { onSubmit } = useLogout()

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <button>
                <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-2xl"
            side={"right"}
            align="end"
            sideOffset={4}
            >
            <DropdownMenuLabel className="font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                    {user.email}
                    </span>
                </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <Link to={ROUTES.SETTING}>
                    <DropdownMenuItem>
                        <Bolt />
                        Setting
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <button onClick={() => onSubmit()} className="flex gap-2">
                    <IconLogout />
                    Log out
                </button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
