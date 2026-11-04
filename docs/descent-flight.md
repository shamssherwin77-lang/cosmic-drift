# Optional Descent free flight

The existing cruise/manual controls remain the default. On a desktop with a fine
pointer, open Settings and enable **Descent free flight**, then close Settings and
click the world. The browser captures the mouse; Escape releases it. If pointer
lock is unavailable, holding and dragging the mouse still steers the vessel.

| Input | Action |
| --- | --- |
| Mouse | Vessel yaw and pitch |
| W / S | Forward / reverse thrust |
| A / D | Strafe left / right |
| Space / Ctrl | Ascend / descend |
| Q / E | Roll left / right |
| Arrow keys or existing joystick | Additional steering |
| Escape | Release mouse and clear held input |

The existing speed slider sets the thrust speed limit. With no thrust, navigation rests while the whole vessel gently
heaves and sways; releasing thrust coasts smoothly to a stop. Diagonal inputs are
normalized to avoid a speed bonus. Translation follows the vessel's local frame,
including its roll. Quaternion attitude integration permits vertical flight and
full rotation without a pitch clamp.

The optional mode respects sensitivity, mouse inversion and reduced motion.
Opening settings, pausing, losing focus or releasing mouse lock clears held
commands. Menus stop free-flight translation. Space keeps its existing Pause
shortcut when the option is off, and becomes vertical thrust only while enabled.
Pointer lock is requested only from a direct click on the game canvas and released
for settings, Jump, warnings and disposal. Ctrl plus flight keys is intercepted
while steering so descending and moving forward cannot trigger a browser shortcut.

Jump uses its existing drive, destination, warning and arrival sequence. Vessel
attitude is synchronized after relocation; free flight resumes at rest without
carrying held thrust across the transition. The option remains selected. Graphics,
ship models, audio, nebula traversal, black-hole behavior and the mobile control
layout are unchanged. Touch-only devices retain their existing flight controls.

Validation includes legacy control tests, six-axis direction/inertia and frame-rate
tests, browser mouse-lock/keyboard/menu tests, and an actual Jump with free flight
selected and thrust held.

## Idle suspension

Descent adds bounded, slow multi-frequency heave, sway and attitude motion to the
shared vessel root, carrying the cockpit, camera, wings and engine housings together.
It does not change navigation coordinates, commanded orientation or collision
distances. Motion reduces while aiming, thrusting or rolling and gradually returns
after controls and drift settle. The existing Camera movement slider controls its
amplitude; Reduced motion disables it. Pause and menus freeze it. Jump fades it
out, resets it under the transition and resumes gently after arrival. Legacy cruise
and touch-only flight retain their previous behavior.
