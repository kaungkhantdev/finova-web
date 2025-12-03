import { RegisterForm } from "@/features/auth";

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm dark:bg-card bg-white p-6 rounded-3xl">
        <RegisterForm />
      </div>
    </div>
  )
}
