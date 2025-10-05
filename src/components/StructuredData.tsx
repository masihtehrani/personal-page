export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahmoud Masih Tehrani",
    "jobTitle": "Principal Software Engineer",
    "description": "Principal Software Engineer specializing in Blockchain, FinTech, and Go development. 12+ years of experience in scalable microservice systems and distributed engineering teams.",
    "url": "https://masihtehrani.ir",
    "image": "https://masihtehrani.ir/og-image.jpg",
    "sameAs": [
      "https://linkedin.com/in/mahmoudmasihtehrani",
      "https://github.com/masihtehrani"
    ],
    "email": "mahmud.tehrani@gmail.com",
    "telephone": "+98-919-552-6104",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IR"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Blockchain & FinTech"
    },
    "knowsAbout": [
      "Golang",
      "Blockchain",
      "FinTech",
      "Microservices",
      "Distributed Systems",
      "Team Leadership",
      "PHP",
      "Python",
      "Solidity",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Principal Software Engineer",
      "description": "Technical leadership in blockchain and fintech solutions",
      "skills": [
        "Technical Leadership",
        "Blockchain Development",
        "Go Programming",
        "Microservices Architecture",
        "Team Management"
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
