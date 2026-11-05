# Cinematic flight-deck finish

This art pass is confined to cockpit, exterior, shared ship materials and local
cabin illumination. Flight controls, camera attitude, universe coordinates, Jump
routing, exploration advisories, landing and music are unchanged.

The existing low instrument silhouette and panoramic windows are retained. New
features include rounded metal housings, pressure seals and canopy lock collars,
recessed fasteners, console encoders and faders, ventilation cartridges, cable
runs, amber practical strips and a reflection layer on the forward pane. Display
art uses a locally generated 2048-square atlas with a restrained ivory/blue/amber
palette. The radar sweep stays in the shader rather than uploading a canvas every
frame.

Satin PBR finishes use clear-coated metal where appropriate, filtered brushed
detail and sparse wear. Flat access-panel seams are suppressed on curved surfaces.
The exterior adds inset radiator panels and layered turbine rings/blades. One
short-range warm practical joins the existing local cabin lights; it casts no
extra shadow map. High retains cinematic shadows and Low retains direct rendering.

Cockpit and hull each retain six merged material batches. No remote models,
textures or runtime asset services are required. Geometry and texture cleanup,
quality switching, clear side/rear/roof sight lines, forward horizon clearance,
and wing attachment are covered by browser tests. A render harness captures front,
wing, rear and mobile landscape views for visual inspection.
