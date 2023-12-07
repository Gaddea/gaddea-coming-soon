import { Navbar } from "@/components/navbar";
import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Head />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
