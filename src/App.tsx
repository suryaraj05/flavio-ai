/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
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
import PlanOnboardingModal from './components/PlanOnboardingModal';
import FeaturesBento from './components/FeaturesBento';
import Logo from './components/Logo';
import type { PricingPlan } from './types';
import darkBackground from '@/assets/dark-background.png';
import HeroPhoneMockup from './components/hero/HeroPhoneMockup';

export default function App() {
  // Navigation & interaction states
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [activeTabId, setActiveTabId] = useState('revenue');
  const [isAnnualPricing, setIsAnnualPricing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Step image lightbox
  const [expandedStep, setExpandedStep] = useState<{ src: string; alt: string } | null>(null);

  // Hero scroll — phone zoom-out micro-interaction
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

  const openPlanOnboarding = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsPlanModalOpen(true);
  };

  // Nav scroll shadow
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <div className="bg-background-ivory text-on-surface-dark font-sans min-h-screen">
      {/* Dynamic Header / Navigation */}
      <nav className={`sticky top-0 w-full z-50 bg-background-ivory/95 backdrop-blur-md border-b border-outline-soft transition-all duration-300 ${scrolled ? 'h-14 shadow-md' : 'h-14 md:h-20 shadow-none'}`}>
        <div className="flex justify-between items-center px-5 md:px-10 lg:px-16 max-w-7xl mx-auto h-full">
          <Logo size="sm" />

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#how-it-works"
              className="text-on-surface-secondary text-sm font-medium hover:text-primary-forest transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-on-surface-secondary text-sm font-medium hover:text-primary-forest transition-colors"
            >
              Features
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
          <div className="flex items-center gap-1.5 sm:gap-4">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="cursor-pointer whitespace-nowrap text-[10px] font-bold text-on-surface-secondary transition-all hover:text-primary-forest sm:text-sm"
            >
              Book Demo
            </button>
            <a
              href="https://client-five-iota-12.vercel.app/login"
              className="btn-gradient-purple rounded-full px-3 py-2 text-[10px] font-bold sm:px-6 sm:py-2.5 sm:text-xs md:px-8 md:py-3 md:text-sm"
            >
              Restaurant Login
            </a>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-[60] shrink-0 md:hidden text-primary-forest"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              aria-label="Close menu"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="fixed top-14 left-0 z-50 w-full border-b border-outline-soft bg-background-ivory px-5 py-6 shadow-xl md:hidden"
            >
            {[
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#features', label: 'Features' },
              { href: '#results', label: 'Results' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center text-on-surface-secondary font-medium py-3 border-b border-outline-soft/50 hover:text-primary-forest transition-colors duration-150 last:border-0"
              >
                {label}
              </a>
            ))}
            <div className="pt-5">
              <a
                href="https://client-five-iota-12.vercel.app/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gradient-purple block w-full rounded-full py-2.5 text-center font-bold"
              >
                Log In
              </a>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header
        ref={heroRef}
        className="relative h-[calc(94svh-11px)] max-h-[min(calc(100svh-11px),1089px)] overflow-hidden"
      >
        {/* Restaurant ambience background */}
        <div
          className="hero-dark-bg absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${darkBackground})`,
          }}
          aria-hidden
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/55 md:bg-black/65" aria-hidden />

        {/* Phone — pinned flush to bottom-right */}
        <motion.div
          style={{ scale: phoneScale, transformOrigin: 'bottom right' }}
          className="absolute bottom-0 right-0 z-20 hidden h-[min(88vh,900px)] overflow-hidden leading-none lg:block lg:-mr-4 xl:-mr-8"
        >
          <HeroPhoneMockup
            variant="desktop"
            className="h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          />
        </motion.div>

        <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-5 pb-8 pt-10 md:px-10 lg:z-30 lg:px-16 md:pb-10 md:pt-14">
          <div className="pointer-events-auto relative w-full max-w-2xl lg:max-w-[44rem]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-widest text-white/80 backdrop-blur-sm md:text-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-secondary-container-lime" />
              <span>AI-Powered Guest Insights · UK Restaurants</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 max-w-[32rem] font-serif text-[2.35rem] leading-[1.12] text-white md:mb-8 md:max-w-[36rem] md:text-[2.75rem] lg:max-w-[40rem] lg:text-[3.875rem] xl:text-[4rem]"
            >
              Where AI understands your guests and refines every experience around them.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 max-w-[34rem] font-sans text-[0.9375rem] leading-snug text-white/85 md:mb-12 md:max-w-[38rem] md:text-base lg:max-w-[42rem] lg:text-[1.0625rem]"
            >
              Track guest preferences, scale table flow, and implement data-driven decisions with the singular intelligence hub designed for the modern hospitality era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <motion.button
                onClick={() => setIsDemoModalOpen(true)}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                className="btn-gradient-purple flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-bold sm:w-auto md:px-12 md:py-4.5 md:text-lg"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="h-5 w-5" />
              </motion.button>
              <motion.a
                href="#how-it-works"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className="w-full rounded-full border border-white/30 bg-white/10 px-10 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/50 hover:bg-white/15 sm:w-auto md:px-12 md:py-4.5 md:text-lg"
              >
                How it works
              </motion.a>
            </motion.div>
          </div>

          {/* Mobile phone — hidden for now, may restore later */}
          {false && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="pointer-events-auto mt-8 flex justify-center lg:hidden"
          >
            <HeroPhoneMockup variant="mobile" />
          </motion.div>
          )}
        </div>
      </header>

      <FeaturesBento />

      {/* Dynamic Tabbed Insights Section */}
      <section className="py-20 md:py-28" id="results" style={{ background: 'linear-gradient(115deg, #0F0A1E 45%, rgba(109,40,217,0.5) 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          {/* Section banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-3xl text-left"
          >
            <span className="font-mono text-[11px] md:text-xs uppercase tracking-widest font-bold text-[#C4B8E8]">
              Powered by AI
            </span>
            <h2 className="mt-3 font-serif text-3xl italic leading-tight text-white md:text-5xl">
              From menu link to measurable results
            </h2>
          </motion.div>

          {/* Tab selectors */}
          <div className="mb-12 border-b border-white/15 overflow-x-auto no-scrollbar">
            <div className="flex min-w-max">
              {TAB_INSIGHTS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-5 py-3.5 font-sans text-xs md:text-sm whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                    activeTabId === tab.id
                      ? 'text-white font-bold'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {tab.label}
                  {activeTabId === tab.id && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
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
                  <h3 className="font-serif text-2xl md:text-4xl text-white leading-tight font-medium">
                    {activeTabContent.title}
                  </h3>
                  <p className="text-[#C4B8E8] text-xs sm:text-sm leading-relaxed font-sans">
                    {activeTabContent.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/15">
                    <div>
                      <div className="text-4xl font-serif font-bold text-white block mb-1">
                        {activeTabContent.metric1Value}
                      </div>
                      <p className="text-[11px] uppercase tracking-wider text-[#C4B8E8] font-medium font-sans">
                        {activeTabContent.metric1Label}
                      </p>
                    </div>

                    <div>
                      <div className="text-4xl font-serif font-bold text-white block mb-1">
                        {activeTabContent.metric2Value}
                      </div>
                      <p className="text-[11px] uppercase tracking-wider text-[#C4B8E8] font-medium font-sans">
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

      {/* Onboarding Guide / simple setup */}
      <section
        className="py-20 md:py-28"
        id="how-it-works"
        style={{ background: 'linear-gradient(150deg, #F9F8FD 0%, #EDE7F6 40%, #F0EBF9 70%, #F9F8FD 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
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
            <h2 className="mt-3 max-w-2xl font-serif text-3xl italic leading-tight text-primary-dark md:text-5xl">
              From setup to first AI-powered service in three steps
            </h2>
          </motion.div>

          {/* Few-column step grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
            {STEP_GUIDES.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                {/* Image */}
                <div
                  className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-outline-soft cursor-zoom-in"
                  onClick={() => setExpandedStep({ src: step.imageUrl, alt: step.imageAlt })}
                >
                  <img
                    src={step.imageUrl}
                    alt={step.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Step badge */}
                  <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-dark/80 backdrop-blur-sm font-serif text-xs font-bold text-white shadow">
                    {`0${step.number}`}
                  </div>
                  {/* Expand hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-primary-dark text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full font-bold shadow">
                      Click to expand
                    </span>
                  </div>
                </div>

                {/* Tagline */}
                <span className="mb-2 inline-flex w-fit items-center rounded-full border border-outline-soft bg-white px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-secondary-sage">
                  {step.tagline}
                </span>

                {/* Title */}
                <h3 className="mb-2 font-serif text-lg leading-snug text-primary-dark md:text-xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-on-surface-secondary md:text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Tiers Section */}
      <section
        className="py-20 md:py-28"
        id="pricing"
        style={{ background: 'linear-gradient(135deg, #EDE7F6 0%, #F9F8FD 45%, #E4DAF5 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-left"
          >
            <h2 className="mb-4 font-serif text-3xl italic leading-tight text-primary-dark md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-xl font-sans text-sm text-on-surface-secondary">
              Plans scale with your tables — no hidden fees, no hardware costs. Cancel any time, or switch to annual billing.
            </p>

            {/* Custom pricing Switch toggle */}
            <div className="mt-8 flex items-center justify-start gap-3">
              <span className={`text-xs font-semibold ${!isAnnualPricing ? 'text-primary-forest' : 'text-on-surface-secondary'}`}>
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setIsAnnualPricing(!isAnnualPricing)}
                aria-checked={isAnnualPricing}
                role="switch"
                className={`relative h-6 w-11 rounded-full p-0.5 transition-colors duration-300 focus:outline-none cursor-pointer ${isAnnualPricing ? 'bg-primary-forest' : 'bg-outline-soft'}`}
              >
                <div className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${isAnnualPricing ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
              <span className={`text-xs font-semibold ${isAnnualPricing ? 'text-primary-forest' : 'text-on-surface-secondary'}`}>
                Annual Billing
              </span>
            </div>
          </motion.div>

          {/* Pricing cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRICING_PLANS.map((plan, idx) => {
              const rawPrice = isAnnualPricing ? plan.priceAnnualDiscounted : plan.priceMonthly;
              const currentPrice = Math.ceil(rawPrice);

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`p-7 rounded-xl border flex flex-col justify-between h-full relative transition-colors duration-300 ${
                    plan.isPopular
                      ? 'text-white border-transparent shadow-2xl scale-100 lg:scale-[1.03]'
                      : 'bg-white border-outline-soft text-on-surface-dark shadow-sm hover:shadow-md'
                  }`}
                  style={plan.isPopular ? {
                    background: 'radial-gradient(ellipse at 85% 10%, rgba(139,92,246,0.65) 0%, #0F0A1E 58%)',
                    boxShadow: '0 8px 40px rgba(109,40,217,0.35)',
                  } : undefined}
                >
                  {/* Header text info block */}
                  <div className="mb-8">
                    {plan.isPopular && (
                      <div className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-bold font-mono uppercase tracking-widest text-primary-forest">
                        Most Popular
                      </div>
                    )}
                    <h3 className="font-serif text-2xl font-bold mb-2 tracking-tight">
                      {plan.name}
                    </h3>
                    <p className={`text-xs ${plan.isPopular ? 'text-white/70' : 'text-on-surface-secondary'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price display section */}
                  <div className="mb-8">
                    {plan.isCustom ? (
                      <>
                        <span className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight">
                          Custom
                        </span>
                        <div className="text-[10px] font-mono tracking-wider opacity-65 mt-1 select-none">
                          let's build the right plan together
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight">
                          £{currentPrice}
                        </span>
                        <span className={`text-sm ${plan.isPopular ? 'text-white/60' : 'text-on-surface-secondary font-medium'}`}>
                          /month
                        </span>
                        <div className="text-[10px] font-mono tracking-wider opacity-65 mt-1 select-none">
                          {isAnnualPricing
                            ? `£${Math.ceil(plan.priceAnnualDiscounted * 12)}/yr · billed annually`
                            : 'cancel any time'}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Primary card Action CTA button */}
                  <button
                    onClick={() => openPlanOnboarding(plan)}
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
          {/* Flat dark tint */}
          <div className="absolute inset-0 bg-primary-dark/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 lg:px-16 space-y-8 md:space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] uppercase tracking-widest text-white/60"
          >
            Ready to grow?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl font-serif text-3xl italic leading-tight md:text-5xl"
          >
            Fill more covers. Keep every guest coming back.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="max-w-lg text-sm leading-relaxed text-white/70 md:text-base"
          >
            Flavio plugs intelligence into your existing QR menu in minutes. No new hardware. No developer needed. Just smarter hospitality from day one.
          </motion.p>

          {/* Links row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-wrap gap-6 sm:gap-10"
          >
            {[
              { label: 'Talk to us' },
              { label: 'LinkedIn' },
              { label: 'Instagram' },
            ].map(({ label }) => (
              <button
                key={label}
                onClick={() => setIsDemoModalOpen(true)}
                className="text-white/80 hover:text-white border-b border-white/40 hover:border-white pb-1 transition-colors duration-200 flex items-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider font-bold"
              >
                <span>{label}</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            ))}
          </motion.div>

          <motion.button
            onClick={() => setIsDemoModalOpen(true)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-primary-forest hover:bg-secondary-container-lime px-10 py-4 rounded-full font-serif text-lg font-bold hover:scale-[1.03] transition-all duration-200 shadow-2xl cursor-pointer"
          >
            Book a Free Demo
          </motion.button>
        </div>
      </section>

      {/* Footer block */}
      <footer className="bg-[#EEE9F8] py-16 md:py-20 border-t border-outline-soft">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
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
                      className="text-[11px] text-primary-forest bg-[#EEE9F8] border border-outline-soft p-2.5 rounded-lg flex items-center gap-2 max-w-md"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary-sage shrink-0" />
                      <span>Thank you! You are subscribed to our monthly intelligence reports.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Site navigation links */}
            <div className="md:col-span-7">
              <h4 className="mb-5 font-sans text-sm font-bold tracking-tight text-primary-forest">
                On this site
              </h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3.5 text-xs font-medium text-on-surface-secondary sm:grid-cols-3">
                <li>
                  <a href="#how-it-works" className="transition-colors duration-150 hover:text-primary-forest">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#features" className="transition-colors duration-150 hover:text-primary-forest">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#results" className="transition-colors duration-150 hover:text-primary-forest">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="transition-colors duration-150 hover:text-primary-forest">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors duration-150 hover:text-primary-forest">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://client-five-iota-12.vercel.app/login"
                    className="transition-colors duration-150 hover:text-primary-forest"
                  >
                    Restaurant Login
                  </a>
                </li>
              </ul>
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
        </div>
      </footer>

      {/* Book Private Demo Modal element */}
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />

      <PlanOnboardingModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        plan={selectedPlan}
        isAnnualBilling={isAnnualPricing}
      />

      {/* Step image lightbox */}
      <AnimatePresence>
        {expandedStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={() => setExpandedStep(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="relative z-10 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expandedStep.src}
                alt={expandedStep.alt}
                className="w-full h-auto object-contain"
              />
              <button
                onClick={() => setExpandedStep(null)}
                className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
