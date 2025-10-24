import { useTheme } from "@/components/common/ThemeProvider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

const Basics = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-full p-6 rounded-3xl bg-white dark:bg-card">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-900">
            <h2 className="">Basics</h2>
            <Button variant={'link'} className="rounded-full">Edit</Button>
        </div>
        
        {/* Photo */}
        <div className="grid grid-cols-5 gap-4 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className=" col-span-2 ">
                <span className="text-sm font-medium">Photo</span>
            </div>
            <div className=" col-span-3 ">
                <img 
                    src="https://github.com/shadcn.png"
                    alt="Profile" 
                    className="w-11 h-11 rounded-full object-cover"
                />
            </div>
        </div>
        
        {/* Name */}
        <div className="grid grid-cols-5 gap-4 border-b border-gray-100 dark:border-gray-900 w-full py-5">
            <div className=" col-span-2 ">
                <span className="text-sm font-medium">Name</span>
            </div>
            <div className=" col-span-3 ">
                <span className="text-sm">Sophie Chamberlain</span>
            </div>
        </div>

        {/* Email Address */}
        <div className="grid grid-cols-5 gap-4 border-gray-100 dark:border-gray-900 w-full py-5">
            <div className=" col-span-2 ">
                <span className="text-sm font-medium">Email Address</span>
            </div>
            <div className=" col-span-3  overflow-hidden">
                <span className="text-sm text-wrap">hi@sophiehamberlain.com</span>
            </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-5 gap-4 border-gray-100 dark:border-gray-900 w-full py-5">
            <div className=" col-span-2">
                <span className="text-sm font-medium">Password</span>
            </div>
            <div className=" col-span-3 overflow-hidden">
                <Button variant={'outline'} className="rounded-full">Change your password</Button>
            </div>
        </div>
        
        {/* Device Theme */}
        <div className="grid grid-cols-5 border-gray-100 dark:border-gray-900 w-full py-5">
            <div className=" col-span-2 ">
                <span className="text-sm font-medium">Device Theme</span>
                <br />
                <span className="text-sm text-muted-foreground">
                    Change various mode
                </span>
            </div>
            <div className=" col-span-3">
                <div className="flex items-center space-x-3">
                    <RadioGroup defaultValue={theme} className="flex flex-col lg:flex-row">
                        <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-xl border p-3">
                            <RadioGroupItem
                                onClick={() => setTheme("light")} 
                                value="light" 
                                id="r1"
                                className="data-[state=checked]:border-primary"
                            />
                                <div>
                                    <h1 className="lg:mb-3">Light Mode</h1>
                                    <div className="hidden lg:block">
                                        <div className="space-y-2 rounded-lg bg-[#ecedef] p-2">
                                            <div className="space-y-2 rounded-md bg-white p-2 shadow-xs">
                                                <Skeleton className="h-2 w-[80px] rounded-lg bg-[#ecedef]"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-[#ecedef]"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-white p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-[#ecedef]"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-[#ecedef]"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-white p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-[#ecedef]"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-[#ecedef]"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </Label>
                        <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-xl border p-3">
                            <RadioGroupItem
                                onClick={() => setTheme("dark")} 
                                value="dark" 
                                id="r2"
                                className="data-[state=checked]:border-primary"
                            />
                                <div>
                                    <h1 className="lg:mb-3">Dark Mode</h1>
                                    <div className="hidden lg:block">
                                        <div className="space-y-2 rounded-lg bg-gray-900 p-2">
                                            <div className="space-y-2 rounded-md bg-gray-800 p-2 shadow-xs">
                                                <Skeleton className="h-2 w-[80px] rounded-lg bg-gray-400"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-gray-400"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-gray-800 p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-gray-400"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-gray-400"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-gray-800 p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-gray-400"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-gray-400"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </Label>
                        <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-xl border p-3">
                            <RadioGroupItem
                                onClick={() => setTheme("system")} 
                                value="system" 
                                id="r3"
                                className="data-[state=checked]:border-primary"
                            />
                                <div>
                                    <h1 className="lg:mb-3">System</h1>
                                    <div className="hidden lg:block">
                                        <div className="space-y-2 rounded-lg bg-blue-900 p-2">
                                            <div className="space-y-2 rounded-md bg-blue-800 p-2 shadow-xs">
                                                <Skeleton className="h-2 w-[80px] rounded-lg bg-blue-400"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-blue-400"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-blue-800 p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-blue-400"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-blue-400"/>
                                            </div>

                                            <div className="flex space-x-2 rounded-md bg-blue-800 p-2 shadow-xs">
                                                <Skeleton className="h-4 w-4 rounded-full bg-blue-400"/>
                                                <Skeleton className="h-2 lg:w-[80px] xl:w-[100px] rounded-lg bg-blue-400"/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </Label>
                    </RadioGroup>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Basics
