import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const baseClasses =
    "text-sm px-5 py-4 transition-colors font-medium cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-[#FF7A57]",
    secondary:
      "bg-transparent text-white border-[1px] border-white hover:bg-primary",
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
