import "./main.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html className="h-full bg-white" lang="en">
      <head>
        <title>Site WEB3</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className="h-full">
        {children}
      </body>
    </html>
  )
}
