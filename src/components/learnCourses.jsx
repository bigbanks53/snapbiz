import { BookOpen, Handshake, Megaphone, Wallet } from 'lucide-react'

export const EASE = [0.22, 1, 0.36, 1]

/**
 * The four courses SnapBiz intends to build first.
 *
 * None of them exist yet, so this data deliberately carries no links, lesson
 * counts, pricing, or dates — only a title, a description, and the status label
 * every card shows. Keeping the "coming soon" copy next to the content makes it
 * hard to render a card that looks enrollable.
 */
export const COURSES = [
  {
    id: 'business-fundamentals',
    step: '01',
    title: 'Business Fundamentals',
    description: 'Understand the foundations of starting and operating a business.',
    status: 'Coming to SnapBiz',
    icon: BookOpen,
  },
  {
    id: 'marketing-small-business',
    step: '02',
    title: 'Marketing for Small Businesses',
    description: 'Learn how to attract and retain customers.',
    status: 'Coming to SnapBiz',
    icon: Megaphone,
  },
  {
    id: 'financial-management',
    step: '03',
    title: 'Financial Management',
    description: 'Understand pricing, costs, cash flow, and basic financial planning.',
    status: 'Coming to SnapBiz',
    icon: Wallet,
  },
  {
    id: 'sales-customer-acquisition',
    step: '04',
    title: 'Sales and Customer Acquisition',
    description: 'Learn how to turn prospects into customers.',
    status: 'Coming to SnapBiz',
    icon: Handshake,
  },
]
