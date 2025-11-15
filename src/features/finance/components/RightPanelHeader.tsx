// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const RightPanelHeader = () => (
    <div className="items-center pb-0">
          <div className="mb-6 flex items-center justify-center max-h-6">
              <div className="py-1 px-4 rounded-full flex items-center justify-center bg-black dark:bg-sky-900">
                  <p className="text-sm text-white">K Bank *** 234</p>
              </div>
                {/* <DotLottieReact
                    src="/funny.lottie"
                    loop
                    autoplay
                    /> */}
          </div>
  
          <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                  <p className="text-xs text-gray-500 mb-1">Daily</p>
                  <p className="font-semibold text-gray-900 dark:text-white">$682.20</p>
              </div>
              <div>
                  <p className="text-xs text-gray-500 mb-1">Weekly</p>
                  <p className="font-semibold text-gray-900 dark:text-white">$2,193.26</p>
              </div>
              <div>
                  <p className="text-xs text-gray-500 mb-1">Monthly</p>
                  <p className="font-semibold text-gray-900 dark:text-white">$6,638.72</p>
              </div>
          </div>
      </div>
);