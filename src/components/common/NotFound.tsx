import { Button } from "@/components/ui/button"
import { CircleHelp } from "lucide-react"
import { useNavigate } from "react-router"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <a
                  href="#"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <div className="flex size-8 items-center justify-center rounded-md">
                    <CircleHelp className="size-6" />
                  </div>
                  <span className="sr-only">404</span>
                </a>
                <h1 className="text-xl font-bold">404 Not Found Page</h1>
                <div className="text-center text-sm">
                  Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you
                  entered the wrong URL.
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                    <Button type="submit" onClick={() => navigate('/')}>
                        Home
                    </Button>
                    <Button variant={"secondary"} onClick={() => navigate('/')}>
                        Back
                    </Button>
                </div>
            </div>
          </div>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;