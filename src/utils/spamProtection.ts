// Advanced spam protection utilities

export const obfuscateEmail = (email: string): string => {
  // Split email into parts
  const [localPart, domain] = email.split('@')
  
  // Obfuscate the local part
  const obfuscatedLocal = localPart
    .split('')
    .map((char, index) => {
      if (index === 0 || index === localPart.length - 1) return char
      return '*'
    })
    .join('')
  
  return `${obfuscatedLocal}@${domain}`
}

export const obfuscatePhone = (phone: string): string => {
  // Keep first 3 and last 2 digits visible
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length < 5) return phone
  
  const start = cleaned.slice(0, 3)
  const end = cleaned.slice(-2)
  const middle = '*'.repeat(cleaned.length - 5)
  
  return `+${start}-${middle}-${end}`
}

export const createEmailLink = (email: string, subject?: string, body?: string): string => {
  const params = new URLSearchParams()
  if (subject) params.append('subject', subject)
  if (body) params.append('body', body)
  
  const queryString = params.toString()
  return `mailto:${email}${queryString ? '?' + queryString : ''}`
}

export const createPhoneLink = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  return `tel:${cleaned}`
}

// Anti-bot detection
export const isBot = (): boolean => {
  // Check for common bot indicators
  const userAgent = navigator.userAgent.toLowerCase()
  const botPatterns = [
    'bot', 'crawler', 'spider', 'scraper', 'scanner',
    'curl', 'wget', 'python', 'java', 'perl'
  ]
  
  return botPatterns.some(pattern => userAgent.includes(pattern))
}

// Rate limiting for contact form
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map()
  private maxAttempts: number
  private windowMs: number

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts
    this.windowMs = windowMs
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now()
    const attempts = this.attempts.get(identifier) || []
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs)
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false
    }
    
    // Add current attempt
    recentAttempts.push(now)
    this.attempts.set(identifier, recentAttempts)
    
    return true
  }
}

// Email validation with additional checks
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return false
  
  // Additional checks
  if (email.length > 254) return false
  if (email.includes('..')) return false
  if (email.startsWith('.') || email.endsWith('.')) return false
  
  return true
}

// Phone validation
export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 15
}
