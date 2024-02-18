import MainHeader from "../../components/main-header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious melas, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-[10%] body">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
