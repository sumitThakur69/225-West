interface BackgroundLogoProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
  position?: string;
  size?: string;
  logo?:string;
}

const BackgroundLogo = ({
  children,
  className = "",
  position = "right top",
  size = "",
  logo = "/brand/Logo.svg"
}: BackgroundLogoProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
                WebkitMaskImage: `url('${logo}')`,
                maskImage: `url('${logo}')`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: position,
                maskPosition: position,
                WebkitMaskSize: size,
                maskSize: size,
                backgroundColor:"black",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default BackgroundLogo;