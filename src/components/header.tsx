'use client'
import React, { useState, useEffect } from 'react'
import ButtonPay from './button-pay'

export default function Header() {
  const [showHeader, setShowHeader] = useState(false)

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY
      if (currentScrollY === 0) {
        // No topo
        setShowHeader(false)
      } else {
        // Rolagem para baixo
        setShowHeader(true)
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <header
      className={`z-40 fixed w-[100vw] flex items-center text-white font-bold bg-transparente backdrop-blur justify-evenly py-1 transition-transform duration-300 ${
        showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <ButtonPay name="Quero me inscrever agora" />
    </header>
  )
}
