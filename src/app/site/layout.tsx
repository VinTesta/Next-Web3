"use client"
import "../main.css";
import AuthNavbar from "@/components/navigation/Navbar";
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <>
      <AuthNavbar />
      {children}
    </>
  )
}