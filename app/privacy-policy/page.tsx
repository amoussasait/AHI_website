"use client"

import DatacenterBackground from "@/components/datacenter-background"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary via-background to-background py-12 px-4">
      <DatacenterBackground />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              Havenz Corp ("we" or "us" or "our") operates the AHI Data Centre website. This page informs you of our
              policies regarding the collection, use, and disclosure of personal data when you use our website and the
              choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information Collection and Use</h2>
            <p className="mb-4 text-muted-foreground">
              We collect several different types of information for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personal Data: Name, email address, phone number (when voluntarily provided)</li>
              <li>Usage Data: Browser type, IP address, pages visited, time spent on pages</li>
              <li>Cookies: Data stored locally to improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Data</h2>
            <p className="text-muted-foreground">
              Havenz Corp uses the collected data for various purposes: to provide and maintain our website, to notify
              you about changes to our website, to allow you to participate in interactive features, to provide customer
              service and support, and to monitor the usage of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Security of Data</h2>
            <p className="text-muted-foreground">
              The security of your data is important to us but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@havenzcorp.com" className="text-primary hover:underline">
                privacy@havenzcorp.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
