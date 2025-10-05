'use client'

import { useState, useEffect } from 'react'

interface Command {
  command: string
  output: string
  delay?: number
}

const commands: Command[] = [
  {
    command: 'whoami',
    output: 'Mahmoud Masih Tehrani'
  },
  {
    command: 'pwd',
    output: '/home/masihtehrani'
  },
  {
    command: 'ls -la',
    output: `total 48
drwxr-xr-x  8 masihtehrani masihtehrani 4096 Jan 15 10:30 .
drwxr-xr-x  3 root         root         4096 Jan 15 09:15 ..
-rw-r--r--  1 masihtehrani masihtehrani 1024 Jan 15 10:25 .bashrc
-rw-r--r--  1 masihtehrani masihtehrani  256 Jan 15 10:20 .profile
drwxr-xr-x  2 masihtehrani masihtehrani 4096 Jan 15 10:30 blockchain
drwxr-xr-x  2 masihtehrani masihtehrani 4096 Jan 15 10:30 fintech
drwxr-xr-x  2 masihtehrani masihtehrani 4096 Jan 15 10:30 microservices
drwxr-xr-x  2 masihtehrani masihtehrani 4096 Jan 15 10:30 leadership`
  },
  {
    command: 'cat experience.txt',
    output: `Principal Software Engineer (2022-Present)
- Led blockchain development team of 8 engineers
- Architected microservices for 1M+ users
- Implemented Go-based trading systems

Senior Software Engineer (2018-2022)
- Developed smart contracts in Solidity
- Built RESTful APIs with Go
- Optimized database performance by 300%

Software Engineer (2012-2018)
- Full-stack development with PHP/Python
- IoT and GIS system integration
- Team collaboration and mentoring`
  },
  {
    command: 'cat skills.txt',
    output: `Languages: Go, Solidity, PHP, Python, JavaScript
Frameworks: Gin, Echo, Laravel, Django
Databases: PostgreSQL, Redis, MongoDB
Tools: Docker, Kubernetes, Git, Linux
Blockchain: Ethereum, Smart Contracts, Web3`
  },
  {
    command: 'cat contact.txt',
    output: `Email: mahmud.tehrani[at]gmail.com
LinkedIn: linkedin.com/in/mahmoudmasihtehrani
GitHub: github.com/masihtehrani
Location: Iran`
  }
]

export default function Terminal() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [displayedOutput, setDisplayedOutput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentCommand < commands.length) {
      setIsTyping(true)
      setDisplayedOutput('')
      
      const command = commands[currentCommand]
      let outputIndex = 0
      
      const typeOutput = () => {
        if (outputIndex < command.output.length) {
          setDisplayedOutput(prev => prev + command.output[outputIndex])
          outputIndex++
          setTimeout(typeOutput, command.delay || 30)
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setCurrentCommand(prev => prev + 1)
          }, 2000)
        }
      }
      
      setTimeout(typeOutput, 1000)
    }
  }, [currentCommand])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-300 mb-2">
            $ Mahmoud Masih Tehrani - Terminal
          </h1>
          <p className="text-green-500">
            Principal Software Engineer | Blockchain & Go Developer
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-green-500">
          {commands.slice(0, currentCommand + 1).map((cmd, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">{cmd.command}</span>
              </div>
              <div className="text-green-300 ml-4 whitespace-pre-line">
                {index === currentCommand ? displayedOutput : cmd.output}
                {index === currentCommand && isTyping && (
                  <span className="text-green-400">|</span>
                )}
              </div>
            </div>
          ))}

          {currentCommand < commands.length && (
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-white">{commands[currentCommand].command}</span>
              {showCursor && <span className="text-green-400 ml-1">_</span>}
            </div>
          )}

          {currentCommand >= commands.length && (
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-white">_</span>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-green-500 text-sm">
            Press Ctrl+C to interrupt | Type &apos;help&apos; for more commands
          </p>
        </div>
      </div>
    </div>
  )
}
