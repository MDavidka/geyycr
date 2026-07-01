import { Zap, Shield, Globe, Server, Cloud, HardDrive, Cpu, Database } from 'lucide-react';

export const hostingCompanyData = {
  navbar: {
    brand: "Hostify",
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
    auth: { signInLabel: 'Sign in', signInHref: '/login', signUpLabel: 'Get started', signUpHref: '/signup' }
  },
  hero: {
    badge: "Reliable Hosting",
    title: "Blazing Fast & Secure Web Hosting",
    description: "Experience unparalleled performance, ironclad security, and 24/7 expert support for your website. Get online today!",
    primaryCta: { label: 'Get Started Now', href: '/signup' },
    secondaryCta: { label: 'View Plans', href: '#pricing' },
  },
  features: {
    heading: "Why Choose Hostify?",
    subheading: "Unmatched performance and peace of mind for your online presence.",
    features: [
      { icon: Server, title: 'Powerful Servers', description: 'Our state-of-the-art infrastructure ensures maximum uptime and speed.' },
      { icon: Shield, title: 'Advanced Security', description: 'Protect your data with DDoS protection, SSL certificates, and daily backups.' },
      { icon: Cloud, title: 'Scalable Cloud Hosting', description: 'Grow your website effortlessly with flexible and scalable cloud resources.' },
      { icon: HardDrive, title: 'Generous Storage', description: 'Plenty of SSD storage for all your files, databases, and applications.' },
      { icon: Cpu, title: 'Dedicated CPU', description: 'Experience faster processing with dedicated CPU resources for your applications.' },
      { icon: Database, title: 'Managed Databases', description: 'Hassle-free database management for MySQL, PostgreSQL, and more.' },
    ],
  },
  pricing: {
    heading: "Simple & Transparent Pricing",
    subheading: "Choose the perfect hosting plan for your needs. No hidden fees, ever.",
    tiers: [
      { name: 'Starter', price: '$4.99', period: 'mo', description: 'Ideal for personal websites and blogs.', features: ['1 Website', '5 GB SSD Storage', '10 GB Bandwidth', 'Free SSL Certificate', '24/7 Support'], cta: { label: 'Choose Starter', href: '/signup' } },
      { name: 'Pro', price: '$9.99', period: 'mo', description: 'Perfect for growing businesses and e-commerce.', features: ['Unlimited Websites', '50 GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certificate', 'Daily Backups', 'Priority Support'], cta: { label: 'Choose Pro', href: '/signup' }, featured: true },
      { name: 'Business', price: '$19.99', period: 'mo', description: 'Enterprise-grade hosting for high-traffic sites.', features: ['Unlimited Websites', '100 GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certificate', 'Daily Backups', 'Dedicated IP', '24/7 VIP Support'], cta: { label: 'Choose Business', href: '/signup' } },
    ],
  },
  testimonials: {
    heading: "What Our Customers Say",
    subheading: "Hear from satisfied clients who trust Hostify with their online presence.",
    testimonials: [
      {
        name: "Sarah J.",
        title: "Small Business Owner",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sarah+J",
        quote: "Hostify has been a game-changer for my online store. The speed is incredible, and their support team is always there when I need them. Highly recommended!",
      },
      {
        name: "Mark T.",
        title: "Blogger",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Mark+T",
        quote: "As a blogger, uptime and speed are crucial. Hostify delivers on both fronts. My site has never been faster, and I love the peace of mind with their security features.",
      },
      {
        name: "Emily R.",
        title: "Web Developer",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Emily+R",
        quote: "I manage multiple client websites, and Hostify's scalable cloud hosting makes my job so much easier. The control panel is intuitive, and the performance is consistently excellent.",
      },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Find answers to common questions about our hosting services.",
    items: [
      {
        question: "What kind of hosting do you offer?",
        answer: "We offer shared hosting, VPS hosting, dedicated servers, and cloud hosting solutions to fit various needs, from personal blogs to large enterprise websites.",
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied, we'll refund your purchase, no questions asked.",
      },
      {
        question: "How is your customer support?",
        answer: "Our expert support team is available 24/7/365 via live chat, phone, and support tickets to assist you with any questions or issues you may encounter.",
      },
      {
        question: "Can I transfer my existing website to Hostify?",
        answer: "Absolutely! We offer free website migration services to help you seamlessly transfer your existing website to our platform with zero downtime.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and various other secure online payment methods for your convenience.",
      },
    ],
  },
  cta: {
    title: "Ready to launch your website?",
    description: "Join thousands of satisfied customers and experience the Hostify difference today!",
    primaryCta: { label: 'Get Started Now', href: '/signup' },
    secondaryCta: { label: 'Contact Sales', href: '/contact' },
  },
  footer: {
    brand: "Hostify",
    columns: [
      {
        title: 'Products',
        links: [
          { label: 'Web Hosting', href: '#' },
          { label: 'Cloud Hosting', href: '#' },
          { label: 'VPS Hosting', href: '#' },
          { label: 'Dedicated Servers', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Knowledge Base', href: '#' },
          { label: 'System Status', href: '#' },
          { label: 'Report Abuse', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Terms of Service', href: '#' },
          { label: 'Privacy Policy', href: '#' },
          { label: 'SLA', href: '#' },
        ],
      },
    ],
  }
};
