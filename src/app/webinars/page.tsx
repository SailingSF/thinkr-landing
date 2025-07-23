"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Video, ArrowRight, Zap, CheckCircle, AlertCircle } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { registerForWebinar } from "@/lib/googleSheets"
import { useTranslations, getLocaleFromPath } from "@/lib/i18n"
import { usePathname } from "next/navigation"

const WebinarsPage = () => {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = useTranslations(locale)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    webinarInterest: "",
    phone: ""
  })

  const [agreements, setAgreements] = useState({
    notifications: false,
    privacy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setAgreements(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await registerForWebinar({
        ...formData,
        notifications: agreements.notifications
      })

      // Track Google Analytics conversion event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'webinar_registration', {
          page_location: window.location.href,
          page_title: document.title
        })
      }

      setSubmitStatus('success')
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        webinarInterest: "",
        phone: ""
      })
      setAgreements({
        notifications: false,
        privacy: false
      })
    } catch (error) {
      console.error('Failed to submit form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToForm = () => {
    if (!isMounted) return
    const formElement = document.getElementById('webinar-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-1 lg:order-1">
              {/* Shopify Logo */}
              <div className="mb-6">
                <Image 
                  src="/shopify_logo_black.png" 
                  alt="Shopify" 
                  width={200}
                  height={64}
                  className="h-16 mb-4"
                />
              </div>
              
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <Video className="w-4 h-4 mr-2" />
                {t('webinar.hero.badge') as string}
              </div>
            
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                {t('webinar.hero.title') as string}{" "}
                <span className="text-primary">{t('webinar.hero.titleHighlight') as string}</span>
              </h1>
            
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                {t('webinar.hero.description') as string}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <div className="flex items-center text-red-600 text-lg font-medium">
                  <Calendar className="w-6 h-6 mr-2 flex-shrink-0 text-red-600" />
                  <span>{t('webinar.hero.date') as string}</span>
                </div>
                <div className="flex items-center text-red-600 text-lg font-medium">
                  <Users className="w-6 h-6 mr-2 flex-shrink-0 text-red-600" />
                  <span>{t('webinar.hero.liveQa') as string}</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-300 text-white px-6 py-3 text-base rounded-lg"
                onClick={scrollToForm}
              >
                {t('webinar.hero.cta') as string}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="order-2 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/webinar_image.jpg" 
                  alt="E-commerce AI Automation Webinar" 
                  width={600}
                  height={480}
                  className="w-full h-120 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Two-Column Content & Registration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {t('webinar.content.title') as string}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {t('webinar.content.description') as string}
                </p>
              </div>

              <div className="space-y-4">
                {(t('webinar.content.topics') as string[]).map((topic: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>

              {/* Bonus Section */}
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('webinar.content.bonus.title') as string}</h3>
                    <p className="text-gray-700">
                      {t('webinar.content.bonus.description') as string}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                {t('webinar.content.terms') as string}
              </p>
            </div>

            {/* Right Column - Registration Form */}
            <div id="webinar-form" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('webinar.form.title') as string}</h3>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900">{t('webinar.form.success.title') as string}</h4>
                    <p className="text-sm text-green-700 mt-1">
                      {t('webinar.form.success.message') as string}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900">{t('webinar.form.error.title') as string}</h4>
                    <p className="text-sm text-red-700 mt-1">
                      {t('webinar.form.error.message') as string}
                    </p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('webinar.form.fields.firstName') as string}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder={t('webinar.form.placeholders.firstName') as string}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('webinar.form.fields.lastName') as string}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder={t('webinar.form.placeholders.lastName') as string}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('webinar.form.fields.email') as string}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={t('webinar.form.placeholders.email') as string}
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('webinar.form.fields.role') as string}
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    value={formData.role}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  >
                    <option value="">{t('webinar.form.roleOptions.select') as string}</option>
                    <option value="owner">{t('webinar.form.roleOptions.owner') as string}</option>
                    <option value="manager">{t('webinar.form.roleOptions.manager') as string}</option>
                    <option value="marketing">{t('webinar.form.roleOptions.marketing') as string}</option>
                    <option value="operations">{t('webinar.form.roleOptions.operations') as string}</option>
                    <option value="developer">{t('webinar.form.roleOptions.developer') as string}</option>
                    <option value="other">{t('webinar.form.roleOptions.other') as string}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="webinarInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('webinar.form.fields.webinarInterest') as string}
                  </label>
                  <select
                    id="webinarInterest"
                    name="webinarInterest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    value={formData.webinarInterest}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  >
                    <option value="">{t('webinar.form.interestOptions.select') as string}</option>
                    <option value="ai-automation">{t('webinar.form.interestOptions.aiAutomation') as string}</option>
                    <option value="inventory-management">{t('webinar.form.interestOptions.inventoryManagement') as string}</option>
                    <option value="customer-service">{t('webinar.form.interestOptions.customerService') as string}</option>
                    <option value="marketing-automation">{t('webinar.form.interestOptions.marketingAutomation') as string}</option>
                    <option value="analytics-reporting">{t('webinar.form.interestOptions.analyticsReporting') as string}</option>
                    <option value="all">{t('webinar.form.interestOptions.all') as string}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('webinar.form.fields.phone') as string}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={t('webinar.form.placeholders.phone') as string}
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="notifications"
                      name="notifications"
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      checked={agreements.notifications}
                      onChange={handleCheckboxChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="notifications" className="text-sm text-gray-700">
                      {t('webinar.form.agreements.notifications') as string}
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      checked={agreements.privacy}
                      onChange={handleCheckboxChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-700">
                      {t('webinar.form.agreements.privacy') as string}
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-300 text-white py-4 text-lg font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('webinar.form.submitting') as string : t('webinar.form.submit') as string}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t('webinar.speakers.title') as string}
            </h2>
            <p className="text-lg text-gray-600">
              {t('webinar.speakers.subtitle') as string}
            </p>
          </div>

          <div className="space-y-8">
            {/* Speaker 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image 
                      src="/foto edu.jpg" 
                      alt="Edu Samayoa" 
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Video className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{t('webinar.speakers.edu.name') as string}</h3>
                  <p className="text-gray-600 mb-3">{t('webinar.speakers.edu.title') as string}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('webinar.speakers.edu.description') as string}
                  </p>
                </div>
              </div>
            </div>

            {/* Surprise Guest */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary/20">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🎉</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Video className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{t('webinar.speakers.guest.name') as string}</h3>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Surprise!</span>
                  </div>
                  <p className="text-gray-600 mb-3">{t('webinar.speakers.guest.title') as string}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('webinar.speakers.guest.description') as string}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('webinar.whyJoin.title') as string}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('webinar.whyJoin.subtitle') as string}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('webinar.whyJoin.reasons') as Array<{title: string, description: string}>).map((reason, index: number) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('webinar.pastWebinars.title') as string}
            </h2>
            <p className="text-lg text-gray-600">
              {t('webinar.pastWebinars.subtitle') as string}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for past webinars */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-4">
                <Video className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('webinar.pastWebinars.comingSoon') as string}</h3>
              <p className="text-sm text-gray-600">
                {t('webinar.pastWebinars.description') as string}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default WebinarsPage 