# Deep Silence encounter

Deep Silence (region 4) contains persistent supermassive black-hole systems.
Each host uses the existing deterministic sector identity and primary coordinates;
its ordinary star and stellar corona are hidden, while its orbiting bodies remain.
The renderer draws the closest singularity within the bounded streamed neighborhood.
Coordinates, disk orientation and exclusion distances do not change with quality.

## Flight and consent

The scene exposes a synchronous Jump planner to the UI. Before entering a hazardous
system, an accessible, focus-contained advisory stops flight, suppresses normal
sound layers and offers Continue or Cancel. No Jump clock or relocation starts
before confirmation. A confirmed Jump retains the planned coordinates, arrives
6,900 game units from the singularity and points the vessel away from it. There is
no initial direction arrow revealing its location. Turning the vessel or looking
through the canopy reveals the disk in the distance.

Distance alerts start at 5,400 u (amber) and 3,100 u (red), with hysteresis on exit.
Transit control cancels the modeled radial pull and permits a closer approach.
Steering, throttle, free-look and outward flight remain available. A swept segment
exclusion shell prevents a high-speed frame from passing through the horizon;
without assistance its radius is 1,254 u, with assistance 760 u. There is no forced
death, portal or invented interior beyond the event horizon. These are compressed
gameplay distances, not a relativistic orbital simulation.

## Graphics

A three-dimensional proxy volume integrates curved light paths with a central
capture radius, thin tilted accretion disk, turbulent rotating emission, Doppler
asymmetry and lensed images of the far side of the disk. A separate world capture
provides the actual nebula, stars and planets for background deflection. The
vessel is excluded from that capture, preserving its silhouette and controls.
An accretion-colored light reaches the metal, glazing and exterior ship surfaces.

High uses 112 integration steps and an 80% background buffer; Medium uses 80 / 55%;
Low uses 52 / 35%. HDR background capture is used for Medium/High when supported.
The lens buffer is refreshed only while the singularity intersects the camera
frustum. Performance mode follows Low; reduced motion preserves stable imagery.
This is a cinematic curved-ray approximation, not a Kerr spacetime solver.

## Audio

The warning temporarily ramps engine, space and recorded music to silence, with
three quiet advisory beeps. Confirming or cancelling restores the previous mixer
and recording position. Amber proximity ducks music; critical proximity or enabled
transit control fades and pauses music. A locally synthesized low-frequency drone,
slowly detuned harmonics and filtered noise grow with proximity. This is artistic
sonification rather than sound traveling through a vacuum. Normal music returns
when the vessel leaves the warning zone. Pause, tab visibility and master mute
still govern all audio. User mixer preferences are never overwritten by a hazard.
