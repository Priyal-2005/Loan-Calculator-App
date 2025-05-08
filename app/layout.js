import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata = {
 title: "Loan Calculator",
 description: "Compare and calculate EMIs easily",
};


export default function RootLayout({ children }) {
 return (
   <html lang="en">
     <body>
       <NavBar />
       <main>{children}</main>
       <Footer />
     </body>
   </html>
 );
}