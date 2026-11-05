# Avaris: landable world in Golden Core

Avaris is a fictional copper-red world with dark mesas, deep valleys, a thin dusty
atmosphere and a flat first landing basin. The cockpit, exterior, music controls,
Descent controls, wheel throttle and existing black-hole encounter remain intact.

## Finding and flying

Jump 2, 7, 12, etc. offers the same fixed host system, Thal-EF8E (sector 1/0/0), in
Golden Core. Arrival faces the planet and chooses gentle cruise speed. A dismissible
notice explicitly tells the pilot that this nebula contains a world they can land
on. It appears on each arrival. Avaris is reserved for these scheduled Jumps;
steering toward its host or passing close to that system does not skip Jump 2. Jump 3, 8, 13 still visits the unique black-hole host.

The orbital instrument reads distance remaining to the surface. As approach
continues, ground clearance, descent rate and terrain warnings fade into view.
Distances stay in compressed game units; the reference does not suddenly switch
from distance-to-center to altitude. Range/clearance are measured from the hull's
contact envelope and reach zero on touchdown; datum altitude is separately retained
in the model for comparison with mountain elevation.

Surface flight levels the vessel to the local horizon and enables Descent on
mouse/keyboard devices. W/S moves forward/reverse, A/D strafes, Space climbs and
Ctrl descends. Mouse and wheel retain their existing steering and speed functions.
Touch devices keep their joystick and can use the leveling/landing assists. Near
the ground an automatic speed limit gradually reaches 45 u/s; the target slider
remains available. Terrain probes follow the actual motion direction.

Land gently becomes available below 140 u over sufficiently flat ground at low
speed. The assist smoothly settles onto the hull contact envelope and holds the
ship there. Take off climbs clear and returns manual control. Jump can also leave
the destination, clearing its surface state. Surface features are deterministic
and retain their world positions on return.

## Terrain and contact

The world has radius 2,600 u. A seamless three-dimensional elevation function
provides basins, paired eroded ridges, plateaus and fine ground variation. The same
function supplies radar, collision, slope checks and all rendering tiers. The
first basin lies on the illuminated hemisphere and includes a fixed boulder field.

Six cube-sphere faces subdivide with distance into a quadtree. Each tile carries
analytic terrain normals and skirts; visible tiles merge into one draw batch to
avoid CPU overhead and seam shading. Cached CPU tiles are bounded, and old GPU
batches are disposed as LOD changes. Low/Medium/High retain the same world geometry
identity and change grid density only. The atmospheric shell and distance haze
blend the surface view gradually into space.

Swept hull-path tests prevent a fast frame crossing through the terrain. A flat
patch and gentle speed are required for assisted touchdown. The model is relaxed
exploration flight with powered landing assistance, not an orbital or atmospheric
flight simulator. Engine idle and filtered ambience change with density and landing
state without altering saved mixer preferences or interrupting the recorded music.

Validation covers deterministic terrain and basins, mountain elevation, continuous
altimetry, speed limits, high-speed contact, landing/takeoff, route metadata, entry
notice, all graphics tiers, GPU cleanup and the existing application regression suite.

The built GitHub Pages artifact is also tested without source injection:
`PLAYWRIGHT_PREVIEW=1 CHROMIUM_PATH=/usr/bin/chromium npm run test:browser -- tests/browser/published.spec.mjs`
after `npm run build -- --base=/cosmic-drift/`.

## Departing a host system

The visited host stays in the existing 27-system render pool until its landmark
finishes fading. Avaris and its host bodies now share a star-centered 32,000–42,000 u
fade; the black-hole host and accretion effect share 24,000–32,000 u. Their physical
centers never move. The pool replaces a distant unvisited neighbour when necessary,
so retaining the host does not add unbounded geometry or extra system slots.

Outside the local surface/hazard zone, navigation follows the nearest real system.
A still-visible landmark no longer forces the previous host's name and palette
while the pilot is reaching another star. Departing and returning reproduce the
same terrain and host coordinates. Scheduled special Jumps remain 2/7/12 for
Avaris and 3/8/13 for the black hole.

Browser regressions cover host-body/landmark opacity together across streaming
boundaries, navigation at the next star, return travel, resource bounds, and GPU
silhouette measurements at 6,000/12,000/24,000 u.
