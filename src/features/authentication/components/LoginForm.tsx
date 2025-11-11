
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/common/Logo"
import { Link } from "react-router"
import { GoogleIcon } from "@/components/common/GoogleIcon"
import PasswordInput from "@/components/common/PasswordInput"
import BaseInput from "@/components/common/BaseInput"
import useLogin from "../hooks/useLogin"
import { ROUTES } from "@/utils/constants"
import { RotateCw } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isLoading,
  } = useLogin();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              Don&apos;t have an account?{" "}
              <Link to={ROUTES.AUTH + "/" + ROUTES.REGISTER} className="underline underline-offset-4">
                Register
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <BaseInput
              id="email"
              register={register}
              errors={errors}
              label="Email"
              type="text"
              required
              placeholder="Enter your email" />
            <PasswordInput 
              id="password"
              register={register}
              errors={errors}
              label="Password"
              required
              placeholder="Enter your password"/>
            <Button disabled={isLoading} type="submit" size={'lg'} className="w-full rounded-full">
              {isLoading ? (
                  <>
                    <RotateCw className="h-4 animate-spin" />
                    Loading
                  </>
                ) : (
                  "Login"
                )
              }
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background dark:bg-card text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
          <div className="grid gap-4">
            <Button variant="outline" type="button" size={'lg'} className="w-full rounded-full">
              <GoogleIcon />
              Continue with Google
            </Button>
          </div>
        </div>
      </form>
      <div className="text-center text-sm text-muted-foreground">
        <Link to={ROUTES.AUTH + "/" + ROUTES.FORGOT_PASSWORD} className="underline underline-offset-4">
          Forgot Password
        </Link>
      </div>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
