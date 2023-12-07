import DefaultLayout from "@/layouts/default";
import { Logo } from "@/components/icons";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center h-screen transition duration-1000 ease-in-out">
        <Logo className="transition duration-1000 ease-in-out" />
        <div className="mb-4 transition duration-1000 ease-in-out">
          GADDEA GROUP AB
        </div>
      </section>
    </DefaultLayout>
  );
}
