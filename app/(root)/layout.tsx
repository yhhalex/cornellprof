import Navbar from "@/components/Navbar";
import localFont from "next/font/local"


export default function Layout({ children } : Readonly<{children : React.ReactNode}>) {
  return (
    <main className="workSans.variable">
      <Navbar /> 
      {children}
    </main>
  )
}