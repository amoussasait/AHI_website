"use client"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary via-background to-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using the AHI Data Centre website operated by Havenz Corp, you accept and agree to be
              bound by and comply with these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on the
              AHI Data Centre website for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on the AHI Data Centre website are provided on an 'as is' basis. Havenz Corp makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall Havenz Corp or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on the AHI Data Centre website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground">
              The materials appearing on the AHI Data Centre website could include technical, typographical, or
              photographic errors. Havenz Corp does not warrant that any of the materials on the website are accurate,
              complete, or current. Havenz Corp may make changes to the materials contained on the website at any time
              without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              <a href="mailto:legal@havenzcorp.com" className="text-primary hover:underline">
                legal@havenzcorp.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
