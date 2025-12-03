import Basics from "../components/Basics"

const SettingPage = () => {
  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex flex-col items-center justify-center w-full 2xl:min-h-screen">
      <div className="2xl:min-w-7xl">
        <div className="mb-4 flex justify-between items-center w-full">
            <h1 className="text-lg font-medium ">Settings</h1>
          </div>
        <Basics />
      </div>
    </div>
  )
}

export default SettingPage