const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export default function HomePage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '6rem 2rem', fontFamily: 'system-ui' }}>
      <p style={{ color: '#667085', fontWeight: 600 }}>WORKBOARD</p>
      <h1>Make work visible, measurable, and easier to coordinate.</h1>
      <p style={{ maxWidth: 640, lineHeight: 1.6 }}>
        A production-oriented work-management platform built with Next.js, NestJS,
        PostgreSQL, Redis, Docker, and automated performance testing.
      </p>
      <p style={{ color: '#667085' }}>API configured at {apiUrl}</p>
    </main>
  );
}
