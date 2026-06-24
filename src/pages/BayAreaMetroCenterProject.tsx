import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bayAreaMetroImg from "@/assets/bay-area-metro-center.jpg";

export default function BayAreaMetroCenterProject() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <h1 className="font-serif text-4xl mb-4">Bay Area Metro Center</h1>
        <img
          src={bayAreaMetroImg}
          alt="Bay Area Metro Center"
          className="w-full object-cover rounded mb-10 max-h-[480px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            <h2 className="font-serif text-2xl">Project Overview</h2>
            <p className="text-muted-foreground">[Project description placeholder]</p>
            <h2 className="font-serif text-2xl">Scope of Work</h2>
            <p className="text-muted-foreground">[Scope of work placeholder]</p>
          </div>
          <aside className="space-y-4">
            <h2 className="font-serif text-2xl">Project Facts</h2>
            <dl className="space-y-2 text-sm">
              <dt className="font-semibold">Location</dt>
              <dd className="text-muted-foreground">[Location]</dd>
              <dt className="font-semibold">Client</dt>
              <dd className="text-muted-foreground">[Client]</dd>
              <dt className="font-semibold">Size</dt>
              <dd className="text-muted-foreground">[Size]</dd>
              <dt className="font-semibold">Status</dt>
              <dd className="text-muted-foreground">[Status]</dd>
            </dl>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}