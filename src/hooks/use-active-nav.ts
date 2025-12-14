import * as React from "react"
import { useLocation } from "react-router"


export function useActiveNav() {
  const [isActive, setIsActive] = React.useState<boolean | undefined>(undefined)
  const pathname = useLocation().pathname;

  React.useEffect(() => {
    // Check if the current pathname matches the active path
    const activePath = "/dashboard"; // Replace with your active path logic
    setIsActive(pathname === activePath);
  }, [pathname]);


  return isActive;
}
