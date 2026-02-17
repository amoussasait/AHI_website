"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Zap, Server, Database } from "lucide-react"

interface Cluster {
  id: number
  power: string
  position: { x: number; y: number }
  available: boolean
}

export default function DatacenterClusterView() {
  const [selectedCluster, setSelectedCluster] = useState<number | null>(null)

  // Cluster layout based on the site plan (24 clusters with various power ratings)
  const clusters: Cluster[] = [
    // Top row (6 clusters)
    { id: 1, power: "40MW", position: { x: 50, y: 80 }, available: true },
    { id: 2, power: "60MW", position: { x: 150, y: 80 }, available: true },
    { id: 3, power: "60MW", position: { x: 250, y: 80 }, available: true },
    { id: 4, power: "60MW", position: { x: 350, y: 80 }, available: true },
    { id: 5, power: "60MW", position: { x: 450, y: 80 }, available: true },
    { id: 6, power: "40MW", position: { x: 550, y: 80 }, available: true },

    // Second row (6 clusters)
    { id: 7, power: "40MW", position: { x: 50, y: 180 }, available: true },
    { id: 8, power: "60MW", position: { x: 150, y: 180 }, available: true },
    { id: 9, power: "60MW", position: { x: 250, y: 180 }, available: true },
    { id: 10, power: "60MW", position: { x: 350, y: 180 }, available: true },
    { id: 11, power: "60MW", position: { x: 450, y: 180 }, available: true },
    { id: 12, power: "40MW", position: { x: 550, y: 180 }, available: true },

    // Third row (6 clusters)
    { id: 13, power: "40MW", position: { x: 50, y: 280 }, available: true },
    { id: 14, power: "60MW", position: { x: 150, y: 280 }, available: true },
    { id: 15, power: "60MW", position: { x: 250, y: 280 }, available: true },
    { id: 16, power: "60MW", position: { x: 350, y: 280 }, available: true },
    { id: 17, power: "60MW", position: { x: 450, y: 280 }, available: true },
    { id: 18, power: "40MW", position: { x: 550, y: 280 }, available: true },

    // Bottom row (6 clusters)
    { id: 19, power: "40MW", position: { x: 50, y: 380 }, available: true },
    { id: 20, power: "60MW", position: { x: 150, y: 380 }, available: false },
    { id: 21, power: "60MW", position: { x: 250, y: 380 }, available: true },
    { id: 22, power: "60MW", position: { x: 350, y: 380 }, available: true },
    { id: 23, power: "20MW", position: { x: 450, y: 380 }, available: true },
    { id: 24, power: "40MW", position: { x: 550, y: 380 }, available: true },
  ]

  const totalPower = clusters.reduce((sum, cluster) => sum + Number.parseInt(cluster.power), 0)

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">24 Modular Data Center Clusters</h3>
        <p className="text-accent mb-4">
          Interactive site layout showing scalable capacity from 20MW to 60MW per cluster
        </p>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-primary/30 border-2 border-primary"></div>
            <span className="text-sm text-accent">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-accent/30 border-2 border-accent"></div>
            <span className="text-sm text-accent">Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-accent">Total: {totalPower}MW</span>
          </div>
        </div>
      </div>

      {/* Cluster Map */}
      <div className="relative bg-gradient-to-br from-background to-secondary rounded-2xl p-8 border border-primary/20">
        <svg viewBox="0 0 600 450" className="w-full h-auto">
          {/* Grid background */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/10"
              />
            </pattern>
          </defs>
          <rect width="600" height="450" fill="url(#grid)" />

          {/* Clusters */}
          {clusters.map((cluster) => (
            <motion.g
              key={cluster.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: cluster.id * 0.02 }}
              onHoverStart={() => setSelectedCluster(cluster.id)}
              onHoverEnd={() => setSelectedCluster(null)}
              style={{ cursor: "pointer" }}
            >
              <motion.rect
                x={cluster.position.x - 35}
                y={cluster.position.y - 25}
                width="70"
                height="50"
                rx="6"
                className={cluster.available ? "fill-primary/20 stroke-primary" : "fill-accent/20 stroke-accent"}
                strokeWidth={selectedCluster === cluster.id ? "3" : "2"}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
              <text
                x={cluster.position.x}
                y={cluster.position.y - 5}
                textAnchor="middle"
                className="text-xs font-bold fill-primary"
              >
                Cluster {cluster.id}
              </text>
              <text
                x={cluster.position.x}
                y={cluster.position.y + 10}
                textAnchor="middle"
                className="text-xs font-semibold fill-accent"
              >
                {cluster.power}
              </text>
            </motion.g>
          ))}

          {/* Labels */}
          <text x="300" y="30" textAnchor="middle" className="text-sm font-bold fill-primary">
            Blindman Drive
          </text>
          <text
            x="580"
            y="225"
            textAnchor="middle"
            className="text-sm font-bold fill-primary"
            transform="rotate(90 580 225)"
          >
            Range Road 271
          </text>
          <text x="300" y="440" textAnchor="middle" className="text-sm font-bold fill-primary">
            Red Deer River Valley
          </text>
        </svg>

        {/* Selected Cluster Info */}
        {selectedCluster && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-primary/30"
          >
            <div className="flex items-center gap-4">
              <Server className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-bold text-primary">
                  Cluster {selectedCluster} - {clusters.find((c) => c.id === selectedCluster)?.power}
                </h4>
                <p className="text-sm text-accent">
                  {clusters.find((c) => c.id === selectedCluster)?.available ? "Available for deployment" : "Reserved"}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-card rounded-lg p-4 border border-primary/20 text-center">
          <Server className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-primary">24</div>
          <div className="text-sm text-accent">Clusters</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-primary/20 text-center">
          <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-primary">{totalPower}MW</div>
          <div className="text-sm text-accent">Total Capacity</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-primary/20 text-center">
          <Database className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-primary">1GW</div>
          <div className="text-sm text-accent">Scalable To</div>
        </div>
      </div>
    </div>
  )
}
