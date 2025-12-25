import clsx from "clsx";

export default function Container({ children, className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        "md:max-w-5xl lg:max-w-5xl xl:max-w-5xl 2xl:max-w-7xl 3xl:max-w-screen-3xl px-6 2xl:px-0 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
