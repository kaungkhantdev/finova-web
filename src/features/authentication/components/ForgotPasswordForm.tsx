
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/common/Logo"
import BaseInput from "@/components/common/BaseInput"
import { Link } from "react-router"
import { ROUTES } from "@/utils/constants"
import useForgotPassword from "../hooks/useForgotPassword"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
  } = useForgotPassword();

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
            <h1 className="text-lg font-medium">Forgot Password</h1>
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link to={ROUTES.AUTH + "/" + ROUTES.REGISTER} className="underline underline-offset-4">
                Resister
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <BaseInput
              id="email"
              register={register}
              errors={errors}
              label="Email"
              type="email"
              required
              placeholder="Enter your email" />
            <div className="grid sm:grid-cols-2 gap-2">
                <Button size={'lg'} type="submit" className="rounded-full">
                    Submit
                </Button>
                <Button size={'lg'} variant={"secondary"} className="rounded-full">
                    <Link to={ROUTES.AUTH + "/" + ROUTES.LOGIN} className="">
                      Cancel
                    </Link>
                </Button>
            </div>
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
