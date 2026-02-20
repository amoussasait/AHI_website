"use client"

import DatacenterBackground from "@/components/datacenter-background"

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary via-background to-background py-12 px-4">
      <DatacenterBackground />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Cookie Policy</h1>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files stored on your browser that help us remember information about your visit.
              They enable us to provide better service, analyze site usage, and personalize your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  Required for the website to function properly. These enable core functionality like page navigation
                  and access to secure areas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  Help us understand how visitors interact with our website by collecting and analyzing usage data. We
                  use Google Analytics for this purpose.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground">
                  Allow us to recognize and count the number of visitors and see how visitors move around the website.
                  This helps us improve the site's performance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Preference Cookies</h3>
                <p className="text-muted-foreground">
                  Remember information about your choices to provide personalized experiences, such as your language or
                  theme preference.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground">
              We may allow third-party service providers to place cookies on your browser for analytics and performance
              monitoring. These third parties have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Your Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and delete cookies through your browser settings:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
              <li>Firefox: Preferences → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Manage Website Data</li>
              <li>Edge: Settings → Privacy, search, and services → Clear browsing data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about our cookie policy, please contact:
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
