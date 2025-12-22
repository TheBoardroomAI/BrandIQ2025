'use client';

import { useState } from 'react';
import { Navigation, Footer, Section, Heading, Text } from '@/components';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitStatus('success');
      setFormState({ name: '', email: '', institution: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <Section background="gradient" padding="xl">
          <div className="text-center max-w-4xl mx-auto">
            <Heading level={1} className="mb-6">
              Let's Connect
            </Heading>
            <Text variant="lead" color="muted">
              Ready to discover what makes your institution truly distinctive? We'd love to hear from you.
            </Text>
          </div>
        </Section>

        {/* Contact Form & Info */}
        <Section background="white" padding="xl">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Heading level={2} className="mb-6">
                Send Us a Message
              </Heading>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brandiq-gray mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandiq-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brandiq-gray mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandiq-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-brandiq-gray mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formState.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandiq-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brandiq-gray mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandiq-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brandiq-gray mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandiq-green focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-brandiq-green text-white font-medium py-3 px-6 rounded-md hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                    Thank you! We'll be in touch soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <Heading level={2} className="mb-6">
                Get in Touch
              </Heading>

              <div className="space-y-8">
                {/* Office Location */}
                <div>
                  <h3 className="font-bold text-lg text-brandiq-gray mb-3">Corporate Office</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>606 Liberty Ave, 3rd Floor</p>
                    <p>Pittsburgh, PA 15222</p>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-bold text-lg text-brandiq-gray mb-3">Phone</h3>
                  <a
                    href="tel:4127016226"
                    className="text-brandiq-green hover:text-green-600 transition-colors text-lg"
                  >
                    412.701.6226
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-bold text-lg text-brandiq-gray mb-3">Email</h3>
                  <a
                    href="mailto:info@brandiqcreative.com"
                    className="text-brandiq-green hover:text-green-600 transition-colors"
                  >
                    info@brandiqcreative.com
                  </a>
                </div>

                {/* Office Hours */}
                <div>
                  <h3 className="font-bold text-lg text-brandiq-gray mb-3">Office Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-bold text-lg text-brandiq-gray mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/brandiqcreative"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brandiq-gray hover:text-brandiq-green transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/brandiqcreative"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brandiq-gray hover:text-brandiq-green transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/brand-iq-creative"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brandiq-gray hover:text-brandiq-green transition-colors"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Map Section (Placeholder) */}
        <Section background="gray" padding="lg">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <Text variant="body" color="muted">
                    606 Liberty Ave, 3rd Floor<br />
                    Pittsburgh, PA 15222
                  </Text>
                  <a
                    href="https://maps.google.com/?q=606+Liberty+Ave,+Pittsburgh,+PA+15222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-brandiq-green hover:text-green-600 font-medium"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Contact Us | Brand IQ Creative',
  description: 'Get in touch with Brand IQ Creative. Located in Pittsburgh, PA. Call 412.701.6226 or send us a message to discuss your higher education marketing needs.',
};
