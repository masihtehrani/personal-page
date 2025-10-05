import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Mahmoud Masih Tehrani - Principal Blockchain & Go Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              color: 'white',
              padding: '40px',
            }}
          >
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                marginBottom: '20px',
                background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mahmoud Masih Tehrani
            </div>
            <div
              style={{
                fontSize: '36px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#e5e7eb',
              }}
            >
              Principal Software Engineer
            </div>
            <div
              style={{
                fontSize: '24px',
                color: '#d1d5db',
                maxWidth: '800px',
                lineHeight: '1.4',
              }}
            >
              Blockchain & FinTech Expert • 12+ Years Experience
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
