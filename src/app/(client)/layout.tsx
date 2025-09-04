// src/app/(client)/layout.tsx
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer/Footer";



export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 h-[220px] -z-10 blob"></div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
