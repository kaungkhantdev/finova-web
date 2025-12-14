import NotFound from "@/components/common/NotFound";
import { ROUTES } from "@/utils/constants";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { ProtectedRoutes } from "./protectedRoutes";
import { AuthRoutes } from "./authRoutes";

const MainLayout = lazy(() => import('@/components/layouts/MainLayout'));
const FinancePage = lazy(() => import('@/features/finance/page/FinancePage'));
const WalletPage = lazy(() => import('@/features/wallet/page/WalletPage'));
const TransitionPage = lazy(() => import('@/features/transaction/page/TransactionPage'));
const CategoryPage = lazy(() => import('@/features/category/page/CategoryPage'));
const SettingPage = lazy(() => import('@/features/setting/page/SettingPage'));

// auth pages
const Register = lazy(() => import('@/features/auth/page/RegisterPage'));
const LoginPage = lazy(() => import('@/features/auth/page/LoginPage'));
const ForgotPasswordPage = lazy(() => import('@/features/auth/page/ForgotPasswordPage'));
const VerifyOtpPage = lazy(() => import('@/features/auth/page/VerifyOtpPage'));
const ResetPasswordPage = lazy(() => import('@/features/auth/page/ResetPasswordPage'));

const router = createBrowserRouter([
  {
    Component: AuthRoutes,
    children: [
      {
        path: ROUTES.AUTH,
        children: [
          {
            path: ROUTES.REGISTER,
            Component: Register,
          },
          {
            path: ROUTES.LOGIN,
            Component: LoginPage,
          },
          {
            path: ROUTES.FORGOT_PASSWORD,
            Component: ForgotPasswordPage,
          },
          {
            path: ROUTES.VERIFY_OTP,
            Component: VerifyOtpPage,
          },
          {
            path: ROUTES.RESET_PASSWORD,
            Component: ResetPasswordPage,
          },
        ]
      }
    ]
  },
  {
    Component: ProtectedRoutes,
    children: [
      {
        Component: MainLayout,
        children: [
            {
              index: true,
              path: ROUTES.HOME,
              Component: FinancePage,
            },
            {
              path: ROUTES.WALLET,
              Component: WalletPage,
            },
            {
              path: ROUTES.TRANSACTION,
              Component: TransitionPage,
            },
            {
              path: ROUTES.CATEGORY,
              Component: CategoryPage,
            },
            {
              path: ROUTES.SETTING,
              Component: SettingPage,
            },
        ],
      },
    ]
  },
  {
    path: '*',
    Component: NotFound,
  }
]);

export default router;

