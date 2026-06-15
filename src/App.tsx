/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Award,
  BookOpen,
  Mail,
  ArrowRight,
  Lock,
  Compass,
  DollarSign,
  ChevronRight,
  Smartphone,
  Check,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

import { PRICING_PLANS, STEP_GUIDES, TAB_INSIGHTS } from './data';
import BookDemoModal from './components/BookDemoModal';
import FeaturesBento from './components/FeaturesBento';
import Logo from './components/Logo';
import heroBg from '@/assets/homepage-landing-image.png';

export default function App() {
  // Navigation & interaction states
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState('revenue');
  const [isAnnualPricing, setIsAnnualPricing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Nav scroll shadow
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Newsletter subscription
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubscribed, setNewsSubscribed] = useState(false);

  const activeTabContent = TAB_INSIGHTS.find((tab) => tab.id === activeTabId) || TAB_INSIGHTS[0];

  const handleSubscribeNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsSubscribed(true);
    setNewsEmail('');
    setTimeout(() => {
      setNewsSubscribed(false);
    }, 4000);
  };

  return (
    <div className="bg-background-ivory text-on-surface-dark font-sans overflow-x-hidden min-h-screen">
      {/* Dynamic Header / Navigation */}
      <nav className={`fixed top-0 w-full z-40 bg-background-ivory/80 backdrop-blur-md border-b border-outline-soft h-20 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
        <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto h-full">
          <Logo size="sm" />

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#features"
              className="text-on-surface-secondary text-sm font-medium hover:text-primary-forest transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-on-surface-secondary text-sm font-medium hover:text-primary-forest transition-colors"
            >
              How It Works
            </a>
            <a
              href="#results"
              className="text-on-surface-secondary text-sm font-medium hover:text-primary-forest transition-colors"
            >
              Results
            </a>
            <a
              href="#pricing"
              className="text-on-surface-secondary text-sm font-medium hover:text-primary-forest transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-on-surface-secondary text-sm font-medium hover:text-primary-forest transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Nav CTAs */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden sm:block text-on-surface-secondary text-sm font-bold hover:text-primary-forest transition-all cursor-pointer"
            >
              Client Login
            </button>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-primary-forest text-white text-xs md:text-sm px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-secondary-sage transition-all cursor-pointer shadow-sm"
            >
              Book Demo
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-primary-forest"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 w-full bg-background-ivory border-b border-outline-soft z-30 p-6 md:hidden shadow-lg space-y-4 font-sans text-sm"
          >
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-on-surface-secondary font-medium py-2"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-on-surface-secondary font-medium py-2"
            >
              How It Works
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-on-surface-secondary font-medium py-2"
            >
              Results
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-on-surface-secondary font-medium py-2"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-on-surface-secondary font-medium py-2"
            >
              Contact
            </a>
            <div className="pt-4 border-t border-outline-soft flex gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDemoModalOpen(true);
                }}
                className="w-1/2 py-2.5 border border-primary-forest rounded-full font-bold text-center text-primary-forest cursor-pointer"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDemoModalOpen(true);
                }}
                className="w-1/2 py-2.5 bg-primary-forest text-white rounded-full font-bold text-center cursor-pointer"
              >
                Book Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative min-h-[94svh] max-h-[900px] overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: 'right bottom',
            backgroundSize: 'cover',
          }}
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background-ivory/80 via-background-ivory/30 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[94svh] max-h-[900px] max-w-7xl flex-col items-start justify-start px-6 pb-[min(38vh,340px)] pt-36 text-left md:px-12 md:pt-40">
          <div className="w-full max-w-full md:max-w-[50vw] lg:max-w-[min(50vw,36rem)]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-outline-soft bg-white/85 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-on-surface-secondary shadow-sm backdrop-blur-sm md:text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 text-secondary-sage" />
              New: AI-Powered Guest Insights for UK Restaurants
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-serif text-4xl leading-tight text-on-surface-dark md:mb-8 md:text-6xl"
            >
              Your restaurant is losing revenue between the scan and the menu.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 font-sans text-base leading-relaxed text-on-surface-secondary md:text-lg"
            >
              Track guest preferences, scale table flow, and implement data-driven decisions with the singular intelligence hub designed for the modern hospitality era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col justify-start gap-4 sm:flex-row sm:flex-wrap sm:gap-6"
            >
              <motion.button
                onClick={() => setIsDemoModalOpen(true)}
                whileTap={{ scale: 0.96 }}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-forest px-10 py-4 font-bold text-white shadow-lg transition-colors hover:bg-secondary-sage"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="h-4.5 w-4.5" />
              </motion.button>
              <motion.a
                href="#how-it-works"
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-outline-soft bg-white/90 px-10 py-4 text-center font-bold text-on-surface-dark backdrop-blur-sm transition-colors hover:border-outline-neutral"
              >
                How it works
              </motion.a>
            </motion.div>
          </div>
        </div>
      </header>

      <FeaturesBento />

      {/* Onboarding Guide / simple setup */}
      <section className="py-24 bg-background-ivory" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-left md:mb-20"
          >
            <span className="text-secondary-sage font-mono text-[11px] md:text-xs uppercase tracking-widest font-bold">
              Simple Setup
            </span>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-primary-forest md:text-5xl">
              Get started in minutes
            </h2>
          </motion.div>

          {/* Three Guides Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {STEP_GUIDES.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.number * 0.15 }}
                className="group relative"
              >
                {/* Image holder with absolute indexing */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-primary-forest/5 border border-outline-soft mb-6">
                  <img
                    alt={step.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={step.imageUrl}
                  />
                  {/* Rounded visual badge number */}
                  <div className="absolute top-5 left-5 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold font-serif text-primary-forest text-lg shadow-lg border border-outline-soft">
                    {step.number}
                  </div>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-forest mb-3">
                  {step.title}
                </h3>
                <p className="text-on-surface-secondary text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Tabbed Insights Section */}
      <section className="py-24 bg-white" id="results">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-3xl text-left"
          >
            <span className="text-secondary-sage font-mono text-[11px] md:text-xs uppercase tracking-widest font-bold">
              Superpowered by AI
            </span>
            <h2 className="mt-3 font-serif text-3xl italic leading-tight text-primary-forest md:text-5xl">
              How Flavio helps you manage hospitality better
            </h2>
          </motion.div>

          {/* Nav Custom Tabs selectors */}
          <div className="mb-12 flex justify-start border-b border-outline-soft">
            <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-0.5 no-scrollbar scroll-smooth">
              {TAB_INSIGHTS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-6 py-4 font-sans text-xs md:text-sm transition-all duration-300 relative whitespace-nowrap cursor-pointer ${
                    activeTabId === tab.id
                      ? 'text-primary-forest font-bold border-b-2 border-primary-forest'
                      : 'text-on-surface-secondary hover:text-primary-forest'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab contents block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Left Texts info */}
            <div className="md:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabContent.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-2xl md:text-4xl text-primary-forest leading-tight font-medium">
                    {activeTabContent.title}
                  </h3>
                  <p className="text-on-surface-secondary text-xs sm:text-sm leading-relaxed font-sans">
                    {activeTabContent.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-4 border-t border-outline-soft">
                    <div>
                      <div className="text-4xl font-serif font-bold text-primary-forest block mb-1">
                        {activeTabContent.metric1Value}
                      </div>
                      <p className="text-[11px] uppercase tracking-wider text-outline-neutral font-medium font-sans">
                        {activeTabContent.metric1Label}
                      </p>
                    </div>

                    <div>
                      <div className="text-4xl font-serif font-bold text-primary-forest block mb-1">
                        {activeTabContent.metric2Value}
                      </div>
                      <p className="text-[11px] uppercase tracking-wider text-outline-neutral font-medium font-sans">
                        {activeTabContent.metric2Label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Graphic image */}
            <div className="md:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabContent.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl shadow-xl border border-outline-soft bg-background-ivory aspect-[4/3] md:aspect-[16/10]"
                >
                  <img
                    alt={activeTabContent.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    src={activeTabContent.imageUrl}
                  />
                  {/* Subtle decorative framing overlay */}
                  <div className="absolute inset-0 bg-primary-dark/5 mix-blend-multiply pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Tiers Section */}
      <section className="py-24 bg-background-ivory" id="pricing">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-left"
          >
            <h2 className="mb-4 font-serif text-3xl leading-tight text-primary-forest md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-xl font-sans text-sm text-on-surface-secondary">
              Start with no credit card required, scale organically as your Covers expand. Clear pricing, no integration setup overhead.
            </p>

            {/* Custom pricing Switch toggle */}
            <div className="mt-8 flex items-center justify-start gap-3">
              <span className={`text-xs font-semibold ${!isAnnualPricing ? 'text-primary-forest' : 'text-on-surface-secondary'}`}>
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setIsAnnualPricing(!isAnnualPricing)}
                className="w-12 h-6 rounded-full bg-outline-soft p-0.5 relative transition-colors focus:outline-none cursor-pointer"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-primary-forest shadow-sm transition-transform ${
                    isAnnualPricing ? 'translate-x-6 bg-secondary-sage' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-semibold flex items-center gap-1.5 ${isAnnualPricing ? 'text-primary-forest' : 'text-on-surface-secondary'}`}>
                Annual Save <span className="bg-secondary-container-lime text-primary-forest px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-bold">SAVE 20%</span>
              </span>
            </div>
          </motion.div>

          {/* Pricing cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan, idx) => {
              const currentPrice = isAnnualPricing ? plan.priceAnnualDiscounted : plan.priceMonthly;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={!plan.isPopular ? { y: -6, transition: { duration: 0.2 } } : {}}
                  className={`p-8 md:p-10 rounded-xl border flex flex-col justify-between h-full relative transition-colors duration-300 ${
                    plan.isPopular
                      ? 'bg-primary-forest text-white border-primary-forest shadow-2xl scale-100 lg:scale-[1.03]'
                      : 'bg-white border-outline-soft text-on-surface-dark shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Distinct Popular visual badge tag */}
                  {plan.isPopular && (
                    <div className="absolute top-6 right-6 bg-secondary-sage text-white text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full font-bold">
                      Most Popular
                    </div>
                  )}

                  {/* Header text info block */}
                  <div className="mb-8">
                    <h3 className="font-serif text-2xl font-bold mb-2 tracking-tight">
                      {plan.name}
                    </h3>
                    <p className={`text-xs ${plan.isPopular ? 'text-white/70' : 'text-on-surface-secondary'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price display section */}
                  <div className="mb-8">
                    <span className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight">
                      £{currentPrice}
                    </span>
                    <span className={`text-sm ${plan.isPopular ? 'text-white/60' : 'text-on-surface-secondary font-medium'}`}>
                      /month
                    </span>
                    <div className="text-[10px] font-mono tracking-wider opacity-65 mt-1 select-none">
                      {isAnnualPricing ? 'billed annually' : 'cancel any time'}
                    </div>
                  </div>

                  {/* Primary card Action CTA button */}
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className={`w-full py-3.5 rounded-full font-bold text-xs md:text-sm tracking-wider mb-8 transition-colors cursor-pointer ${
                      plan.isPopular
                        ? 'bg-white text-primary-forest hover:bg-secondary-container-lime hover:text-primary-forest'
                        : 'border border-primary-forest text-primary-forest hover:bg-primary-forest hover:text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>

                  {/* Pricing feature checklist block */}
                  <div className="border-t border-current/10 pt-8 flex-1">
                    <p className="text-[10px] font-mono tracking-wider uppercase opacity-50 mb-4 block font-bold">Features Included:</p>
                    <ul className="space-y-4">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-xs leading-normal">
                          <Check className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${plan.isPopular ? 'text-secondary-container-lime' : 'text-secondary-sage'}`} />
                          <span className="font-sans">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="relative overflow-hidden py-28 text-left text-white md:py-36" id="contact">
        {/* Visual asset background layer */}
        <div className="absolute inset-0 z-0">
          <img
            alt="British Heritage Restaurant Ambient Scene"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-[0.4]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfPF0oGPBhw-C6H8UPJ8wU7Eo6N-WEI4RyvaibJAEuIma7vszBoDG96QAxYrZIKklSMyB0VGKng3lYIzAohfmNh30cVBnvj1qS3-FsJC_vO9HuMZRoXMNcX7uTFUFVpmiOv6ih0Xc3eL-y_0eH58K6lFHmF2zo537kIwoclnz68B2VA-O4zVVi5Uujs7yS2bhw0gNK2AAO1NgZiYSQgabM7mMVOfYYzgUBKyLrasoQVdcKKXtE-5WwQZKHwVSAfAnkv_NEUvC5zw"
          />
          {/* Flat deep forest solid tint */}
          <div className="absolute inset-0 bg-primary-dark/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl space-y-10 px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            Build wealth faster. Plan your financial future with us.
          </motion.h2>

          {/* Social connections block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-wrap justify-start gap-6 text-xs font-bold uppercase tracking-widest sm:gap-10"
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="text-white hover:text-secondary-container-lime border-b border-white pb-1.5 transition-colors flex items-center gap-2 cursor-pointer text-xs uppercase"
            >
              <span>TALK TO US</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="text-white hover:text-secondary-container-lime border-b border-white pb-1.5 transition-colors flex items-center gap-2 cursor-pointer text-xs uppercase"
            >
              <span>TWITTER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="text-white hover:text-secondary-container-lime border-b border-white pb-1.5 transition-colors flex items-center gap-2 cursor-pointer text-xs uppercase"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          <motion.button
            onClick={() => setIsDemoModalOpen(true)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-primary-forest hover:bg-secondary-container-lime px-12 py-5 rounded-full font-serif text-xl font-bold hover:scale-105 transition-all shadow-2xl cursor-pointer"
          >
            Book a Demo
          </motion.button>
        </div>
      </section>

      {/* Footer block */}
      <footer className="bg-[#EDD5BA] py-20 border-t border-outline-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16">
            {/* Left subscription brand description */}
            <div className="md:col-span-5 space-y-6">
              <Logo size="lg" className="mb-2" />
              <p className="text-on-surface-secondary text-xs sm:text-sm leading-relaxed max-w-sm">
                The smart hospitality companion to dynamically identify, synchronize, and capture upselling revenues seamlessly across all locations.
              </p>

              {/* Newsletter form with Toast simulation */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] md:text-xs text-outline-neutral tracking-wider uppercase font-semibold block">
                  Subscribe to intelligence reports
                </span>
                
                <form onSubmit={handleSubscribeNews} className="flex max-w-md bg-white rounded-full border border-outline-soft overflow-hidden p-1">
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="E.g. headwaiter@theivy.co.uk"
                    className="flex-1 bg-transparent px-4 py-2 outline-none border-none text-xs text-on-surface-dark font-sans placeholder:text-outline-neutral/60"
                  />
                  <button
                    type="submit"
                    className="bg-primary-forest text-white px-5 rounded-full text-xs hover:bg-secondary-sage transition-all block cursor-pointer flex items-center justify-center gap-1 shrink-0 font-bold"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>

                {/* Toast feed back */}
                <AnimatePresence>
                  {newsSubscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-[11px] text-primary-forest bg-[#FBF3EA] border border-outline-soft p-2.5 rounded-lg flex items-center gap-2 max-w-md"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary-sage shrink-0" />
                      <span>Thank you! You are subscribed to our monthly intelligence reports.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Links blocks config */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-sm text-primary-forest mb-5 tracking-tight font-sans">Product</h4>
                <ul className="space-y-3.5 text-xs text-on-surface-secondary font-medium">
                  <li><a href="#features" className="hover:text-primary-forest transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-primary-forest transition-colors">Pricing</a></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest transition-colors text-left font-medium cursor-pointer">Integrations</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest transition-colors text-left font-medium cursor-pointer">Security</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest transition-colors text-left font-medium cursor-pointer">Updates</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm text-primary-forest mb-5 tracking-tight font-sans">Resources</h4>
                <ul className="space-y-3.5 text-xs text-on-surface-secondary font-medium">
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Help Center</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Blog</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Financial Guides</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Community</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Developers</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm text-primary-forest mb-5 tracking-tight font-sans">Company</h4>
                <ul className="space-y-3.5 text-xs text-on-surface-secondary font-medium">
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">About Us</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Careers</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Press</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Partners</button></li>
                  <li><button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest text-left font-medium transition-colors cursor-pointer">Contact</button></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-outline-soft text-[11px] text-outline-neutral uppercase font-mono tracking-widest gap-4">
            <div className="flex gap-6 sm:gap-10">
              <button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest transition-colors cursor-pointer font-bold">Privacy Policy</button>
              <button type="button" onClick={() => setIsDemoModalOpen(true)} className="hover:text-primary-forest transition-colors cursor-pointer font-bold">Terms of Service</button>
            </div>
            <div>© {new Date().getFullYear()} Flavio AI. All rights reserved.</div>
          </div>

          <div className="mt-16 flex justify-center select-none pointer-events-none opacity-[0.06]">
            <Logo size="watermark" />
          </div>
        </div>
      </footer>

      {/* Book Private Demo Modal element */}
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
