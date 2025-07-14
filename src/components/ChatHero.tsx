'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ArrowUp } from 'lucide-react'
import { useViewportTrigger, useReducedMotion } from '@/lib/hooks'
import { chatScenarios, type ChatLine } from '@/data/chatScenarios'

interface MessageBubbleProps {
  message: ChatLine
  isVisible: boolean
  isTyping?: boolean
}

function MessageBubble({ message, isVisible }: MessageBubbleProps) {
  if (!isVisible) return null
  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          message.role === 'user'
            ? 'bg-[#7B6EF6] text-white'
            : 'bg-[#2C2C2E] text-white border border-[#232425]'
        }`}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.text}
        </div>
      </div>
    </div>
  )
}

interface TypingIndicatorProps {
  isVisible: boolean
}

function TypingIndicator({ isVisible }: TypingIndicatorProps) {
  if (!isVisible) return null

  return (
    <div className="flex justify-start mb-4">
      <div className="bg-[#2C2C2E] text-white border border-[#232425] px-4 py-3 rounded-2xl">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}

export default function ChatHero() {
  const { ref, inView } = useViewportTrigger(0.3)
  const prefersReducedMotion = useReducedMotion()
  
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [showTypingIndicator, setShowTypingIndicator] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const currentScenario = chatScenarios[currentScenarioIndex]

  const resetAnimation = useCallback(() => {
    setVisibleMessages([])
    setShowTypingIndicator(false)
    setIsPlaying(false)
  }, [])

  const startNextScenario = useCallback(() => {
    const nextIndex = (currentScenarioIndex + 1) % chatScenarios.length
    setCurrentScenarioIndex(nextIndex)
    resetAnimation()
  }, [currentScenarioIndex, resetAnimation])

  const playScenario = useCallback(() => {
    if (!currentScenario || isPlaying) return
    
    setIsPlaying(true)
    let messageIndex = 0
    
    const showNextMessage = () => {
      if (messageIndex >= currentScenario.lines.length) {
        // Scenario complete, wait then start next
        setTimeout(() => {
          startNextScenario()
        }, 2200)
        return
      }

      const message = currentScenario.lines[messageIndex]
      
      if (message.role === 'user') {
        // Start typing animation for user message
        setVisibleMessages(prev => [...prev, messageIndex])
        
        // Complete typing animation then move to next message
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, messageIndex])
          messageIndex++
          
          if (messageIndex < currentScenario.lines.length) {
            // Show typing indicator for AI response
            setTimeout(() => {
              setShowTypingIndicator(true)
              setTimeout(() => {
                setShowTypingIndicator(false)
                showNextMessage()
              }, 1500)
            }, 500)
          } else {
            showNextMessage()
          }
        }, message.delay || 1800)
      } else {
        // AI message - show immediately
        setVisibleMessages(prev => [...prev, messageIndex])
        messageIndex++
        setTimeout(showNextMessage, message.delay || 2200)
      }
    }

    showNextMessage()
  }, [currentScenario, isPlaying, startNextScenario])

  // Start animation when in view
  useEffect(() => {
    if (inView && !prefersReducedMotion && !isPlaying) {
      const timer = setTimeout(() => {
        playScenario()
      }, 1000)
      return () => clearTimeout(timer)
    } else if (!inView) {
      resetAnimation()
    }
  }, [inView, prefersReducedMotion, playScenario, resetAnimation, isPlaying])

  // Handle click to restart
  const handleClick = () => {
    if (!prefersReducedMotion) {
      resetAnimation()
      setTimeout(playScenario, 500)
    }
  }

  // Fallback for reduced motion or no JS
  if (prefersReducedMotion) {
    return (
      <div className="relative mx-auto w-full max-w-4xl px-4 py-8">
        <Image
          src="/hero_image_3.svg"
          alt="thinkr chat interface"
          width={1100}
          height={620}
          className="w-full h-auto rounded-2xl shadow-lg"
          priority
        />
      </div>
    )
  }

  return (
    <div 
      ref={ref}
      className="relative mx-auto w-full max-w-4xl px-2 py-4"
      aria-label="thinkr chat preview"
      style={{ minHeight: 0 }}
    >
      <noscript>
        <Image
          src="/hero_image_3.svg"
          alt="thinkr chat interface"
          width={1100}
          height={620}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </noscript>
      
      <div 
        className="bg-[#181A1B] rounded-2xl shadow-2xl border border-[#232425] w-full flex flex-col cursor-pointer transition-transform hover:scale-[1.02]"
        style={{ minHeight: '540px', maxHeight: '540px', height: '540px' }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick()
          }
        }}
        aria-label="Click to restart chat demo"
      >
        {/* Header with logo */}
        <div className="flex justify-center pt-4 pb-2">
          <Image
            src="/thinkr-logo-white.png"
            alt="thinkr"
            width={120}
            height={38}
            className="object-contain"
          />
        </div>
        {/* Greeting */}
        <div className="px-4 pb-2">
          <h2 className="text-white text-base font-normal text-center">
            Good morning!
          </h2>
        </div>
        {/* Chat Messages */}
        <div className="flex-1 px-4 overflow-hidden" style={{ minHeight: '120px' }}>
          <div className="space-y-3">
            {currentScenario?.lines.slice(0, 4).map((message, index) => (
              <MessageBubble
                key={`${currentScenarioIndex}-${index}`}
                message={message}
                isVisible={visibleMessages.includes(index)}
              />
            ))}
            <TypingIndicator isVisible={showTypingIndicator} />
          </div>
        </div>
        {/* Input area */}
        <div className="p-3">
          <div className="bg-[#232425] rounded-2xl p-2 border border-[#2C2C2E]">
            <div className="bg-[#2C2C2E] rounded-xl p-2 flex items-center">
              <div className="flex-1 text-gray-400 text-xs">
                Create an Agent or ask anything...
              </div>
              <button
                className="w-7 h-7 bg-[#404040] hover:bg-[#7B6EF6] text-white rounded-lg flex items-center justify-center transition-colors ml-2"
                disabled
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Scenario indicator */}
        <div className="flex justify-center pb-2">
          <div className="flex space-x-2">
            {chatScenarios.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentScenarioIndex ? 'bg-[#7B6EF6]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 