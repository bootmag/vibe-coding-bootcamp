import Welcome from "@/components/Welcome";
import ShimmerQuote from "@/components/ShimmerQuote";
import BootcampFooter from "@/components/BootcampFooter";
import OrientationPath from "@/components/OrientationPath";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center gap-12 px-6 py-16">
        {motto ? <ShimmerQuote text={motto} /> : <Welcome />}
        <OrientationPath />
      </div>

      <BootcampFooter />
    </main>
  );
}
