import Navbar from "../components/Navbar";

export default function Layout({ children } : Readonly<{children : React.ReactNode}>) {
  return (
    <main className="front-work-sans">
      <Navbar /> 
      {children}
    </main>
  )
}