export const metadata = {
  title: "Effective Learning Platform, AI-Powered Chatbot",
  description: "A platform for effective learning powered by effective prompts and AI.",
};

import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
