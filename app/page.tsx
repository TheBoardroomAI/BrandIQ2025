import { Navigation, Footer } from '@/components';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="mt-20">
        {/* Hero section will be built in Step 3 */}
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-brandiq-gray mb-4">Brand IQ Creative</h1>
            <p className="text-2xl text-gray-600">Component Library Complete ✓</p>
            <p className="text-lg text-gray-500 mt-4">Step 3: Homepage Build Coming Next</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
