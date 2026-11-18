# Phone Descent test build

This is an isolated preview under `/cosmic-drift/previews/gyro-descent/`.
The production root's HTML, scripts, media and models are not replaced by this preview.
Build with `npm run build -- --config vite.gyro-preview.config.ts`.

## First test on S24

1. Open the preview directly in Chrome over HTTPS and skip/watch the intro.
2. Start a peaceful journey first. Descent is enabled by default on a primary touch device.
3. Hold the phone comfortably and tap **Enable gyro**. Allow motion/orientation access if asked.
4. Turn your body with the phone: the ship turns with you, while the cockpit remains in front.
5. Use the movement stick for forward/backward and sideways thrust. Release it to coast to rest.
6. Hold **Roll left** / **Roll right** to bank. The speed slider sets the available thrust speed.
7. **Center** changes your comfortable phone reference without moving the ship or cancelling thrust.
8. Adjust **Phone steering sensitivity** in Settings; 1.00× follows the physical turn.

The same flight controls are available in Challenge flight. FIRE, movement and roll
use independent pointer ownership; releasing a different finger does not end firing.
Keyboard thrust, mouse steering and desktop flight remain available as before.
Phone-only vertical movement is obtained by pitching and flying forward; the stick's
four directions translate locally forward/back and sideways. Existing Space/Ctrl
vertical thrust still works with a connected keyboard.

## Permissions and fallback

Sensors start only from the Enable button; there is no automatic sensor prompt.
Safari's explicit requestPermission flow and Android's no-prompt orientation API are
both supported. Denial, unavailable APIs, insecure pages, and no-data timeouts have
explicit messages and leave touch steering available. On Android, check the site's
**Motion sensors** permission if no readings arrive. Without gyro, swipe the view
to rotate the ship; the stick and roll buttons still work. The Descent checkbox can
be unticked in peaceful flight to restore the earlier cruise/steer controls.

## Steering implementation

Device alpha/beta/gamma are converted to a screen-corrected quaternion. Incremental
local deltas multiply the vessel's attitude target, not the passenger look camera.
This handles portrait, both landscape orientations, heading wraparound, full turns,
and simultaneous roll without Euler-angle limits. A 0.12° cumulative deadzone filters
jitter without discarding slow turns; existing frame-independent attitude damping
smooths the target. Sensitivity scales each angular increment from 0.5× to 1.5×.

The first sample anchors the current pose. Pause, menu, Jump, destruction, blur,
hidden tabs, screen rotation and long sensor gaps discard the old reference so the
ship cannot catch up missed device rotations. Explicit recenter also holds the current
ship attitude. Sensor listeners are removed on disable, leaving Descent, or disposal;
a late permission grant cannot revive a cancelled or disposed controller. Sensor
readings stay in browser memory and are not stored or sent to a service.

Validation uses synthetic browser sensor readings and real browser multi-touch events,
plus quaternion/controller unit tests. Actual S24 sensor quality, latency and browser
permission behavior still need the user's physical-device test.

Build smoke test: `GYRO_PREVIEW=1 CHROMIUM_PATH=/usr/bin/chromium npx playwright test tests/browser/phone-preview.spec.mjs`.
The isolated build must exist in `dist-gyro` before running that check.
