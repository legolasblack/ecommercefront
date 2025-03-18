

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
            <p>Hola que hace desde el layout</p>
            {children}
        </div>
  );
}
