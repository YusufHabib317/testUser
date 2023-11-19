export const metadata = {
  title: "Testing | Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
