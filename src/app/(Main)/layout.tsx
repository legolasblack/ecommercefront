import { Navbar } from "@heroui/react";
import NavbarMain from "../components/NavbarMain";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
           <NavbarMain/>
            {children}
        </div>
  );
}
