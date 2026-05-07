import { render, screen } from '@testing-library/react'
import App from './App'

describe('ConversionFunnelIntelligenceHub', () => {
  it('renders the funnel workspace', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /see where revenue disappears before it ever becomes pipeline/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/funnel map/i)).toBeInTheDocument()
    expect(screen.getByText(/segment stories/i)).toBeInTheDocument()
  })
})
