import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName : 'Victor', lastName: 'Gomes'};

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />

        <div className=" flex flex-col size-full">
          <div className="root-layout">
            <Image  src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          </div>
        </div>

        {children}
    </main>
  );
}
