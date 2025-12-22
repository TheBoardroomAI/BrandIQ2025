export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-brandiq-green to-brandiq-blue flex items-center justify-center">
        <div className="text-center text-white px-4">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white">BRAND IQ</h1>
            <p className="text-2xl md:text-4xl font-light">CREATIVE</p>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Integrating the power of market research with the emotion of authentic storytelling 
            to drive distinctive brands and targeted marketing solutions for higher education.
          </p>
          <div className="text-3xl md:text-5xl font-bold mt-12">
            <span className="block">BRANDS THAT INSPIRE.</span>
            <span className="block text-brandiq-orange">CREATIVE THAT WORKS.</span>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Confidence */}
            <div className="text-center">
              <div className="bg-brandiq-orange text-white text-2xl font-bold py-4 mb-4">
                WE GIVE YOU<br />CONFIDENCE.
              </div>
              <p className="text-brandiq-gray text-lg">
                Watertight solutions that can survive the scrutiny of many audiences.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="bg-brandiq-purple text-white text-2xl font-bold py-4 mb-4">
                WE GIVE YOU<br />INNOVATION.
              </div>
              <p className="text-brandiq-gray text-lg">
                Brands and marketing tools that inspire and excite your internal stakeholders 
                as much as your external ones.
              </p>
            </div>

            {/* ROI */}
            <div className="text-center">
              <div className="bg-brandiq-blue text-white text-2xl font-bold py-4 mb-4">
                YOU GET<br />ROI.
              </div>
              <p className="text-brandiq-gray text-lg">
                Compelling creative strategies informed by research to provide measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Callout */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">BRAND IQ INSIDE MINDS</h2>
          <p className="text-xl mb-6">Who Knew?</p>
          <p className="text-2xl font-bold text-brandiq-green mb-4">
            High schoolers don't want your postcards (sorry!)
          </p>
          <p className="text-lg text-brandiq-gray">
            Learn more about our groundbreaking research study
          </p>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-4">BRAND IQ CREATIVE</p>
          <p className="text-sm">606 Liberty Ave, 3rd Floor | Pittsburgh, PA 15222</p>
          <p className="text-sm mt-2">412.701.6226</p>
          <p className="text-xs mt-6 text-gray-500">
            © 2025 Brand IQ Creative. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
