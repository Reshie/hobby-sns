import SideNav from "@/app/ui/crew/sidenav";
import PostButton from "@/app/ui/crew/post-button";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden bg-group">
      <div className="flex-none h-screen w-full max-w-16 md:max-w-56">
        <SideNav />
      </div>
      <div className="flex-grow px-6 overflow-y-auto">{children}</div>
      <PostButton />
    </div>
  );
}
