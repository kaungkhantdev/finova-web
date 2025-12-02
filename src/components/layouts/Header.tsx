// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router";
import { ROUTES } from "@/utils/constants";
import Logo from "@/assets/logo.svg";
import {
  Bolt,
  ChartNoAxesColumn,
  ChartPie,
  LayoutList,
  Wallet,
} from "lucide-react";
import React from "react";
import { NavUser } from "@/features/user";

interface NavParams {
  url: string;
  name: string;
  currentPath: string;
}

interface NavItemProps {
  navParams: NavParams;
  children: React.ReactNode;
}

const routes = [
  { url: ROUTES.HOME, name: "Overview", icon: ChartPie },
  { url: ROUTES.WALLET, name: "Wallet", icon: Wallet },
  { url: ROUTES.TRANSACTION, name: "Transaction", icon: ChartNoAxesColumn },
  { url: ROUTES.CATEGORY, name: "Category", icon: LayoutList },
  { url: ROUTES.SETTING, name: "Settings", icon: Bolt },
];

const NavItem: React.FC<NavItemProps> = ({ navParams, children }) => {
  const isActive = navParams.currentPath === navParams.url;

  return (
    <Link
      to={navParams.url}
      className={`rounded-full transition-colors ${
        isActive ? "text-green-500" : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

const IconWrapper = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => (
  <div
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
      active ? "bg-green-50 dark:bg-green-800" : "bg-white dark:bg-card"
    }`}
  >
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
        active ? "bg-green-500" : "bg-white dark:bg-zinc-800"
      }`}
    >
      {children}
    </div>
  </div>
);

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="p-4 md:px-8 lg:py-0 fixed top-0 left-0 w-full lg:w-auto z-50 lg:static lg:top-auto lg:left-auto bg-gradient-to-r from-green-100 from-10% via-sky-100 via-30% to-amber-50 to-90%
           dark:from-[#0C0C0E] dark:via-[#0C0C0E] dark:to-[#0C0C0E] lg:bg-none">
      {/* Top Bar */}
      <div className="lg:flex items-center justify-center w-full lg:min-h-screen lg:sticky lg:top-0">
        <div className="flex items-center justify-between lg:min-h-screen lg:flex-col h-full w-full lg:py-5">
          <img src={Logo} alt="Bank Logo" className="w-7 h-7" />

          {/* Greeting + Navigation */}
          <div className="">
            {/* Navigation Tabs */}
            <div className="flex lg:block">
              {routes.map((route) => {
                const Icon = route.icon;
                const isActive = currentPath === route.url;

                return (
                  <NavItem
                    key={route.url}
                    navParams={{
                      url: route.url,
                      name: route.name,
                      currentPath,
                    }}
                  >
                    <IconWrapper active={isActive}>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white': 'text-black dark:text-white'}`} />
                    </IconWrapper>
                  </NavItem>
                );
              })}
            </div>
          </div>

          <div className="flex items-center">
            {/* <Avatar className="rounded-full w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <NavUser user={{
              name: 'HILLO',
              email: 'test@gmail.com',
              avatar: 'https://github.com/shadcn.png'
            }}/>
          </div>
        </div>
      </div>

      
    </header>
  );
};

export default Header;
