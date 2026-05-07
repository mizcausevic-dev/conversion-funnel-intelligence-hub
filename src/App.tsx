import './styles.css'
import { actionQueue, diagnostics, experiments, funnelSteps, headlineMetrics, segmentStories } from './data'

function FunnelVisual() {
  const widths = ['100%', '74%', '53%', '38%', '26%', '16%']

  return (
    <div className="funnel-visual" aria-label="Conversion funnel">
      {funnelSteps.map((step, index) => (
        <div key={step.label} className="funnel-step" style={{ width: widths[index] }}>
          <div>
            <p className="eyebrow">{step.label}</p>
            <strong>{step.volume}</strong>
            <span>{step.rate}</span>
          </div>
          <small>{step.note}</small>
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <main className="app-shell">
      <section className="hero-layout">
        <div className="hero-copy">
          <p className="kicker">Conversion Funnel Intelligence Hub</p>
          <h1>See where revenue disappears before it ever becomes pipeline.</h1>
          <p className="lead">
            A premium control surface for funnel leakage, conversion pressure, attribution confidence,
            experiment impact, and GTM operator action.
          </p>
          <div className="hero-links">
            <a href="https://kineticgain.com/" target="_blank" rel="noreferrer" className="primary-link">
              Kinetic Gain
            </a>
            <a href="https://mizcausevic.com/skills/" target="_blank" rel="noreferrer" className="secondary-link">
              Skills / Portfolio
            </a>
          </div>
        </div>
        <div className="hero-panel">
          {headlineMetrics.map((metric) => (
            <article key={metric.label} className="headline-card">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.delta}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-grid">
        <article className="panel panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Funnel map</p>
              <h2>Leakage is not evenly distributed. The real pressure lives between attention, capture, and routing.</h2>
            </div>
            <span className="annotation">Conversion progression by step</span>
          </div>
          <FunnelVisual />
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Diagnostics</p>
              <h2>Operator-grade signals</h2>
            </div>
          </div>
          <div className="diagnostic-list">
            {diagnostics.map((item) => (
              <article key={item.title} className="diagnostic-card">
                <p>{item.title}</p>
                <strong>{item.value}</strong>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="story-grid">
        <article className="panel panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Segment stories</p>
              <h2>Each growth surface is telling a different conversion story.</h2>
            </div>
          </div>
          <div className="segment-grid">
            {segmentStories.map((story) => (
              <article key={story.segment} className="segment-card">
                <p className="segment-label">{story.segment}</p>
                <strong>{story.conversion}</strong>
                <span>{story.change}</span>
                <b>{story.friction}</b>
                <small>{story.insight}</small>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Experiment layer</p>
              <h2>What is changing the funnel</h2>
            </div>
          </div>
          <div className="experiment-list">
            {experiments.map((experiment) => (
              <article key={experiment.name} className="experiment-card">
                <strong>{experiment.name}</strong>
                <p>{experiment.owner}</p>
                <span>{experiment.stage}</span>
                <small>{experiment.confidence}</small>
                <b>{experiment.impact}</b>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Action queue</p>
            <h2>What the growth system needs next</h2>
          </div>
        </div>
        <div className="queue-grid">
          {actionQueue.map((item) => (
            <article key={item.title} className="queue-card">
              <span className="priority">{item.priority}</span>
              <strong>{item.title}</strong>
              <p>{item.owner}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
