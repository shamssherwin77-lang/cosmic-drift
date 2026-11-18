# Deep Silence encounter

Exactly one persistent sector (-1/0/1, Caeli-EFC7) in Deep Silence hosts the
supermassive black hole. Matching palette names or procedural seeds do not create
additional hosts. Its star and corona are hidden; other systems retain theirs.
The 7,500 u domain establishes entry, not a rendering cutoff. Once entered,
the host remains active across streamed-sector boundaries until a safe Jump or
physical departure beyond 68,000 u. Its image and light fade continuously between
48,000 and 64,000 u. Proximity alerts still follow their own distance thresholds.
The hole is absent after a Jump to another nebula, even if its host is still in the
streamed neighborhood. Safe Jumps land outside that domain; every Jump into the
unique host requires confirmation, including return visits.
Coordinates, disk orientation and horizon distance do not change with quality.

## Flight and consent

The Jump route returns to the unique host on Jumps 3, 8, 13, and so on.
Visits never consume or disable the encounter. Each return uses the same world
coordinates and asks for fresh confirmation, without adding a region picker
or duplicating the hole. Ordinary Jumps between visits continue exploring.
Previewing navigation never advances journey progress.

The scene exposes a synchronous Jump planner to the UI. Before entering a hazardous
system, an accessible, focus-contained advisory stops flight, suppresses normal
sound layers and offers Continue or Cancel. No Jump clock or relocation starts
before confirmation. A confirmed Jump retains the planned coordinates, arrives
26,000 game units from the singularity and points the vessel away from it. The arrival chooses a deterministic open-space point on that same distance shell,
avoiding nearby stars, the landable world and ancient hull. There is
no initial direction arrow revealing its location. Hazardous arrivals hold translation
through the remaining transition, reset actual speed, and select a gentle 18 u/s
cruise target. The pilot can raise the existing slider afterward. This prevents
a retained high cruise speed from carrying the ship outside the host before
the arrival animation finishes. Turning the vessel or looking
through the canopy reveals the disk in the distance.

Distance alerts start at 14,500 u (amber) and 7,600 u (red), with hysteresis on exit.
At 4,200 u the warning explicitly says to turn back and explains that crossing the
horizon is fatal. Transit control provides a bounded outward nudge, not an
invincible barrier. Steering, throttle, free-look and outward flight remain
available until the actual horizon at 1,600 u. Deliberate inward thrust can
overcome stabilization. A swept segment/sphere test catches crossings between
frames, including outside-to-outside crossings. Combat blink cannot cross it.
These are compressed gameplay distances, not a relativistic orbital simulation.

## Irreversible descent

Crossing starts a 10.5-second cinematic sequence. The cabin initially remains
intact; increasing tidal strain stretches the actual cockpit and hull, degrades
instrument displays, then reveals a small fixed set of hull ribbons before a
blackout. The world capture becomes a warped light ring behind the vessel. This
is a cinematic interpretation, not an observation of a black-hole interior.
Flight, weapons, blink and Jump are disabled during capture; the combat simulation
is suspended. Music stops; the existing synthesized anomaly changes into an
increasing strain sound, then all audio falls silent. Master mute and pause still
apply. A visible Pause/Resume action is available throughout the sequence, including
when the ordinary HUD was hidden. Hidden tabs do not advance or catch up the fall.

The final dialog offers Return to safe flight (20,000 u from the same fixed center,
facing outward, zero selected/actual thrust, same world and journey progress) or
Start a new journey (fresh game state and menu without replaying the intro).
Reduced motion reduces camera deformation, removes shake and reduces twisting.
The interior pass bypasses bloom and uses a fixed-cost shader and 38 simple ribbons
at every quality. Original cockpit/hull transforms are restored on recovery.

The extended visual range does not claim neighboring systems: a nearby ordinary
system retains its navigation name. Safe Jumps clear the host visit, so sharing a
nebula palette cannot create another black hole or carry one into a safe visit.

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
