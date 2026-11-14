# Meridian flight deck

Integrated from the separately reviewed Meridian cockpit. The GLB is original project artwork, generated with Blender; it embeds baked albedo, microdetail and instrument textures. No external asset host is required.

- Model: `public/models/meridian-cockpit.glb`, 89,900 triangles, 21 mesh batches / 20 materials, 7,821,760 bytes.
- Authored pilot eye in glTF: (0, 1.72, -1.80), looking toward +Z. A 180° yaw and scale 1.5 map this to the existing ship camera at the origin, looking toward -Z.
- Pilot eye height: -12 to +38 cm in authored model scale, saved under `cosmic-drift-pilot-height`. The offset is applied after inertial suspension, in vessel-up; it does not change navigation, throttle, flight attitude or weapon simulation.
- Navigation, speed/thrust, bearing, shield/hull, weapon heat, selected weapon, nearest hostile range and ship-relative radar contacts are sampled from the existing simulation. Canvas displays sample at up to 4 Hz rather than uploading textures every rendered frame. Sampling continues while paused so changes such as the searchlight toggle are reflected without advancing navigation.
- Normal material lighting and reflections are retained at Medium/High. Low/Performance uses baked colour with unlit materials; geometry remains the same. The existing scene environment and ship lights are shared; no extra shadow lights or render passes were added.
- If the model cannot load, the previous procedural cabin is loaded as a fallback. Asset textures/materials/geometry are disposed with the scene.

The flight controls, combat rules, landmarks, music and opening film remain in place. The subsequent Meridian body integration is documented in `meridian-exterior.md`. Physical switches are visual model details; they are not new clickable game controls. The two physical gauge needles now rotate from actual shield and weapon-heat telemetry. Their motion stays in the instrument plane and is smoothed independently of flight physics. The digital dial labels/readings match SHLD and HEAT.

Desktop/mobile screenshots and browser assertions are captured in the Meridian browser tests. Software WebGL validation does not establish frame rate on a physical S24 or other GPU.

## Validation

- `npm test`: flight/control, combat and campaign suites pass.
- `npm run build -- --base=/cosmic-drift/`: TypeScript and Vite build pass.
- Browser coverage: physical needle movement in the correct plane, paused searchlight-display updates without navigation movement, live instrument rendering, canopy sightlines, cockpit visibility, asset-failure fallback/disposal, saved height/reset/mobile slider, actual suspension/height bounds, forward/wing/rear/mobile views, mouse-owned Descent and Jump, wheel throttle, searchlight keyboard/touch controls, weapon selection/fire/pause, touch cancellation, defeat/retry, blink/reload and pooled hostile effects.
- Built-site smoke check confirms the 7,821,760-byte model loads with HTTP 200 under `/cosmic-drift/models/`, and the English height control works in the production bundle.

The checks ran in Chromium with SwiftShader. This validates behaviour and graphics correctness, not physical-device frame rate. Public deployment is intentionally pending visual review.

The final packed Blender source and needle-separation script are retained in `/workspace/meridian-cockpit-final`. The needle split preserves the 89,900-triangle silhouette; it adds two small draw batches. Instrument glass opacity is reduced for readable telemetry while canopy reflections and the reviewed exterior remain unchanged.

Final completion checks passed: physical needles rotate in-plane, paused searchlight changes reach the actual display without navigation movement, saved/reset height works at desktop and mobile sizes, model-failure fallback/disposal works, and the built GitHub Pages subpath loads both assets. LCD emission is independent of cabin lighting and matches the lightweight display palette.
