"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Bird, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">grawk!</h1>
          <p className="text-xl md:text-2xl">Lost in the land of AI companies with similar names?</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Bird className="w-8 h-8 animate-bounce" />
            <p className="text-lg">Let me help you find your way!</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Groq Side */}
          <motion.div
            className="relative rounded-2xl bg-black/20 backdrop-blur-sm p-8 text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredSide("left")}
            onHoverEnd={() => setHoveredSide(null)}
            onClick={() => (window.location.href = "https://groq.com")}
          >
            <Zap className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">groq</h2>
            <p className="text-xl mb-6">AI inference on some sort of magical hardware</p>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => (window.location.href = "https://groq.com")}
            >
              Visit Groq <ArrowRight className="ml-2" />
            </Button>
            {hoveredSide === "left" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-2xl pointer-events-none"
              />
            )}
          </motion.div>

          {/* Grok Side */}
          <motion.div
            className="relative rounded-2xl bg-black/20 backdrop-blur-sm p-8 text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredSide("right")}
            onHoverEnd={() => setHoveredSide(null)}
            onClick={() => (window.location.href = "https://grok.com")}
          >
            <Brain className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">grok</h2>
            <p className="text-xl mb-6">AI model for edgelords</p>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => (window.location.href = "https://grok.com")}
            >
              Visit Grok <ArrowRight className="ml-2" />
            </Button>
            {hoveredSide === "right" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-l from-pink-500/20 to-transparent rounded-2xl pointer-events-none"
              />
            )}
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 space-y-2 text-white/60"
        >
          <p>Not affiliated with either company. Just a helpful bird helping you find your way! 🦜</p>
          <p>
            Created by{" "}
            <a
              href="https://x.com/eric_winer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              @eric_winer
            </a>
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

