import type { ControlSettings, FlightController } from './controls';

/** Integrate active slow frames fully, while still rejecting tab-suspension catch-up. */
export function advanceFlight(controller: FlightController, delta: number, settings: ControlSettings) {
  if (!Number.isFinite(delta) || delta <= 0 || delta > .25 || settings.paused) {
    controller.step(0, settings); return;
  }
  const steps = Math.ceil(delta / (1 / 60)), step = delta / steps;
  for (let i = 0; i < steps; i++) controller.step(step, settings);
}

/** Hysteresis and cooldown prevent continuous framebuffer resizing or quality oscillation. */
export class FrameBudget {
  scale = 1;
  private elapsed = 0;
  private average = 1 / 60;
  private nextDecision = 3;
  reset() { this.scale = 1; this.elapsed = 0; this.average = 1 / 60; this.nextDecision = 3; }
  observe(delta: number, enabled: boolean, paused: boolean) {
    if (!enabled || paused || !Number.isFinite(delta) || delta <= 0 || delta > 1) return false;
    this.elapsed += delta;
    this.average += (Math.min(delta, .2) - this.average) * (1 - Math.exp(-delta / 1.5));
    if (this.elapsed < this.nextDecision) return false;
    const previous = this.scale;
    if (this.average > .028) { this.scale = Math.max(.6, Math.round((this.scale - .1) * 100) / 100); this.nextDecision = this.elapsed + 3; }
    else if (this.average < .018) { this.scale = Math.min(1, Math.round((this.scale + .05) * 100) / 100); this.nextDecision = this.elapsed + 10; }
    else this.nextDecision = this.elapsed + 3;
    return previous !== this.scale;
  }
}
