# Meridian exterior integration

The reviewed Meridian revision 2 exterior is now the ship-space body used by `createHull`. The game does not load the separate model viewer or depend on an external asset host.

The fitted asset retains the tapered nose, layered pressure hull, swept armoured wings, radiator/intake details, two open turbine nacelles, inspection hatches and restrained ion emitters. Its previous demonstration canopy/seats/displays are removed from the exterior module so it fits around the existing game cockpit. A low cradle and swept pressure shoulders connect the deck floor/sills to the original nose and spine. The cockpit source/model is unchanged in this phase.

`public/models/meridian-exterior.glb` contains 48,548 triangles in 9 material batches. It embeds the reviewed materials, UV1 cavity shading and microdetail. Its coordinates are already in game ship space, looking along -Z. The runtime attaches the module directly to the existing vessel rig, so free-look and seat-height adjustments never move the body independently of the ship. Emission follows actual speed; it is bounded to prevent a bright screen-filling glow.

Low/Performance selects lightweight materials using the baked colour, without adding new lights/shadow passes. Higher quality retains metallic reflection and normal/roughness maps. Loading failure falls back to the previous procedural exterior, and resource disposal includes all loaded geometry/materials/textures.

Validation includes pilot side/rear sightlines, unobstructed forward horizon, visibility toggling, shared vessel transforms, complete exterior rendering, emissive response, material switching, GPU cleanup and a bound check against the existing landing clearance. Gameplay tests cover combat and actual landing/takeoff. A built-site check verifies both ship assets load under the GitHub Pages subpath.

Authoring files remain in `/workspace/meridian-integration` (fitted Blender source, fitting script and statistics), based on `/workspace/meridian-v2/Meridian.blend`. Public deployment is pending review. Software WebGL checks do not establish a physical-device frame rate.

Final asset validation: 6,037,452 bytes, 48,548 triangles, 9 mesh/material batches, 15 textures; all 32 floating-point accessors are finite. TypeScript/Vite build, flight/combat/campaign unit suites, exterior sightlines/transform/cleanup checks, game combat, actual landing/takeoff and the production subpath asset check passed. The cockpit code and binary are unchanged from the prior integration checkpoint.
