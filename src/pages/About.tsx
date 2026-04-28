import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="container mt-12 mb-16 flex-1">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">
            About
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.05] mt-3 text-balance">
            Northern California's trusted Inspector of Record.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Add your firm's story here — who you are, your experience, and the principles that
            guide your work on healthcare, civic, and education projects across the region.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
