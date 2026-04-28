import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Connect = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="container mt-12 mb-16 flex-1">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">
            Connect
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.05] mt-3 text-balance">
            Let's talk about your project.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Add contact details, an inquiry form, office address, and licensing info here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Connect;
