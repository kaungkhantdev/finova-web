import LogoPhoto from "@/assets/logo.svg";

export const Logo = ({ className} : { className?: string }) => {
    return (
        <div className={className}>
            <img src={LogoPhoto} alt="Logo" className="w-full h-full" />
        </div>
    )
};
