export const metadata = {
  title: 'Ocllo Space',
  description: 'Explore space weather through Ocllo Space. A journey across the Solar System.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
