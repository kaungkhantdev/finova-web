// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { TRANSACTION_TYPES } from "@/utils/constants";
import { getCurrentMonth } from "@/utils/helpers/date-formater";
import { useState } from "react";

const income = TRANSACTION_TYPES.INCOME.name;
const expense = TRANSACTION_TYPES.EXPENSE.name;

export const RightPanelHeader = (
    {
        dailyAmount,
        weeklyAmount,
        monthlyAmount,
        currencySymbol,
        handleChangeTransactionType,
    }
    :
    {
        dailyAmount?: string | number,
        weeklyAmount?: string | number,
        monthlyAmount?: string | number,
        currencySymbol?: string | number,
        handleChangeTransactionType?: (type: string) => void,
    }
) => {
    const [transactionType, setTransactionType] = useState<typeof income | typeof expense>(income);

    const onChangeTransactionType = (type: typeof income | typeof expense) => {
        setTransactionType((type) => (type === income) ? expense : income);
        if (handleChangeTransactionType) {
            handleChangeTransactionType(type);
        }
    };

    return (
        <div className="items-center pb-0">
            <div className="mb-6 flex items-center justify-center max-h-6">
                <div className="py-1 px-4 rounded-full flex items-center justify-center bg-black dark:bg-sky-900">
                    {/* <p className="text-sm text-white">K Bank *** 234</p> */}
                    <p onClick={() => onChangeTransactionType(transactionType)} className="cursor-pointer text-sm text-white">{getCurrentMonth()} -- {transactionType}</p>
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
                    <p className="font-semibold text-gray-900 dark:text-white">{currencySymbol + ' ' + dailyAmount}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1">Weekly</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{currencySymbol + ' ' + weeklyAmount}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-1">Monthly</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{currencySymbol + ' ' + monthlyAmount}</p>
                </div>
            </div>
        </div>
    )
};