"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Zap, Radio, Truck, Globe, Clock } from "lucide-react"

export default function Location() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const advantages = [
    {
      icon: Zap,
      title: "Power Infrastructure",
      desc: "Direct transmission access with 1 GW+ generation capacity on-site",
      detail: "Alberta's most advanced energy corridor",
    },
    {
      icon: Radio,
      title: "Fiber Connectivity",
      desc: "Multiple redundant fiber routes with ultra-low latency peering",
      detail: "Tier-1 network hub connectivity",
    },
    {
      icon: Truck,
      title: "Logistics Access",
      desc: "Major rail, highway, and transportation corridor junction",
      detail: "North American supply chain gateway",
    },
    {
      icon: Globe,
      title: "Regulatory & Tax Advantage",
      desc: "Alberta's Most Competitive AI Jurisdiction",
      detail: "5% provincial tax, no PST, business-friendly regulatory environment",
    },
    {
      icon: Zap,
      title: "Data Centre Levy Mitigation",
      desc: "Structurally Optimized Power Model",
      detail: "Behind-the-fence generation reduces exposure to Alberta's ≥75MW Data Centre Levy",
    },
    {
      icon: MapPin,
      title: "Strategic Corridor Access",
      desc: "Talent, Security & Market Reach",
      detail: "4.5M people within 100 miles + 19-minute RCMP proximity",
    },
    {
      icon: Clock,
      title: "Low-Risk Operating Environment",
      desc: "Stable, Resilient Jurisdiction",
      detail: "No flood zone, no hurricane exposure, politically stable province",
    },
  ]

  return (
    <section id="location" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Strategic Gateway: </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Red Deer, Alberta
            </span>
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto leading-relaxed">
            Located 3 km from the QEII Highway between Calgary and Edmonton, AHI combines geographic advantage with
            direct access to Alberta's power, hydrogen, and fiber networks. The perfect intersection point for North
            American AI infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map section */}
          <motion.div
            className="lg:col-span-2 rounded-2xl border border-primary/20 overflow-hidden bg-card/50 backdrop-blur-sm p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-video bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-lg mb-4 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320636.8739489283!2d-114.22950968906248!3d52.26881949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5374e9e7c88c24c3%3A0xf0fb9c5dc3c29e3f!2sRed%20Deer%20County%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sca!4v1709582947321!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Canada's Prime Location</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Red Deer represents the optimal intersection point for North American AI infrastructure—equidistant
              between Calgary's tech ecosystem and Edmonton's energy innovation hub. Direct access to major transmission
              infrastructure, fiber networks, hydrogen distribution, and transportation routes positions AHI as the
              strategic nexus for Canada's sovereign AI movement.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg border border-primary/20 bg-card/50 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-accent font-semibold">Between Major Tech Hubs</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Calgary & Edmonton gateway</p>
              </div>
              <div className="p-4 rounded-lg border border-primary/20 bg-card/50 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-accent font-semibold">Direct Highway Access</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">QEII Highway 3 km away</p>
              </div>
              <div className="p-4 rounded-lg border border-primary/20 bg-card/50 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-accent font-semibold">International Airport</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Calgary + Edmonton access</p>
              </div>
              <div className="p-4 rounded-lg border border-primary/20 bg-card/50 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-accent font-semibold">Rail & Transport Hub</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Major freight network</p>
              </div>
            </div>
          </motion.div>

          {/* Connectivity cards */}
          <div className="space-y-4">
            {advantages.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  className="p-4 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:animate-glow-pulse" />
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      <p className="text-xs text-primary font-medium mt-2">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
