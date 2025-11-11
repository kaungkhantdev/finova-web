import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/common/Logo"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Link } from "react-router"
import { ROUTES } from "@/utils/constants"
import useVerifyOtp from "../hooks/useVerifyOtp"
import { RotateCw } from "lucide-react"

export function OtpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    watch,
    setValue,
    resendCode,
    handleSubmit,
    onSubmit,
    isLoading,
    isResending,
    countdown,
    canResend,
  } = useVerifyOtp();

  const otpValue = watch("otp");

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
            <h1 className="text-lg font-medium">Verify OTP</h1>
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link to={ROUTES.AUTH + "/" + ROUTES.REGISTER} className="underline underline-offset-4">
                Register
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <InputOTP 
                maxLength={6} 
                value={otpValue}
                onChange={(value) => setValue("otp", value)}
              >
                {[...Array(6)].map((_, i) => (
                  <InputOTPGroup key={i}>
                    <InputOTPSlot className="h-12 w-12 text-lg font-medium" index={i} />
                  </InputOTPGroup>
                ))}
              </InputOTP>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              <Button disabled={isLoading} size={'lg'} type="submit" className="rounded-full">
                {isLoading ? (
                  <>
                    <RotateCw className="h-4 animate-spin" />
                    Loading
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
              <Button 
                onClick={resendCode} 
                disabled={!canResend}
                size={'lg'} 
                variant={"secondary"} 
                className="rounded-full"
                type="button"
              >
                {canResend ? (
                  isResending ? (
                    <>
                      <RotateCw className="h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Resend Code"
                  )
                ) : (
                  `Resend in ${countdown}s`
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground text-center text-xs text-balance">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">Terms of Service</a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">Privacy Policy</a>.
      </div>
    </div>
  )
}