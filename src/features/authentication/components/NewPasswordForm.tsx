import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/common/Logo"
import PasswordInput from "@/components/common/PasswordInput"
import { Link } from "react-router"

export function NewPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="w-7 h-7">
                <Logo />
              </div>
              <span className="sr-only">Finova.</span>
            </a>
            <h1 className="text-lg font-medium">Welcome to Finova.</h1>
            <div className="text-center text-sm text-muted-foreground">
              Do you have an account?{" "}
              <Link to="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <PasswordInput 
              id="new_password"
              label="New Password"
              required
              placeholder="Enter your password"/>
            <PasswordInput 
              id="c_password"
              label="Confirm Password"
              required
              placeholder="Enter your password"/> 
            <Button type="submit" size={'lg'} className="w-full rounded-full">
              Confirm
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
