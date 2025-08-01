"use client"

import { useState, useEffect } from "react"

interface PhoneNumberInputProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
}

const PhoneNumberInput = ({  onChange, disabled, placeholder }: PhoneNumberInputProps) => {
  const [countryCode, setCountryCode] = useState("+1")
  const [phoneNumber, setPhoneNumber] = useState("")

  useEffect(() => {
    onChange(`${countryCode}${phoneNumber}`)
  }, [countryCode, phoneNumber, onChange])

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/[^0-9+]/g, "")
    if (!input.startsWith("+")) {
      input = `+${input.replace(/\+/g, "")}`
    }
    setCountryCode(input)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = e.target.value.replace(/[^0-9]/g, "")
    setPhoneNumber(formattedPhoneNumber)
  }

  return (
    <div className="flex rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-colors">
      <input
        type="tel"
        value={countryCode}
        onChange={handleCountryCodeChange}
        disabled={disabled}
        className="w-20 px-3 py-3 border-r border-gray-300 bg-gray-50 rounded-l-lg focus:outline-none text-center"
        aria-label="Country Code"
      />
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-r-lg focus:outline-none"
        aria-label="Phone Number"
      />
    </div>
  )
}

export default PhoneNumberInput
