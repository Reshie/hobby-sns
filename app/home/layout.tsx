import SideNav from "@/app/ui/home/sidenav";
import PostButton from "@/app/ui/home/post-button";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-screen bg-slate-200">
        <SideNav />
        {children}
        <PostButton />
    </main>
  );
}
