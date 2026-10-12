const steps = ["Orientierung", "Entscheidung", "Umsetzung"];

export default function OrientationPath() {
  return (
    <section className="orientation-path" aria-label="Mein Vibe-Coding-Weg">
      <p className="orientation-label">Mein Vibe-Coding-Weg</p>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span className="step-number">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
