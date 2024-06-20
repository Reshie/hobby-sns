import SideNav from "@/app/ui/home/sidenav";
import PostButton from "@/app/ui/home/post-button";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-200">
      <div className="flex-none h-screen w-full max-w-16 md:max-w-56">
        <SideNav />
      </div>
      <div className="flex-grow px-6 overflow-y-auto">{children}</div>
      <PostButton />
    </div>
  );
}
