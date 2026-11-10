# Challenge flight

The entry screen offers **Start journey** (unchanged peaceful exploration) and **Challenge flight**. Both use the same deterministic universe, Jump route, Avaris, black hole and ancient hull.

## Controls

Desktop challenge uses Descent flight automatically: click the view to capture the mouse; mouse aims the ship; hold left click to fire. W/S thrust forward/back, A/D strafe, Space/Ctrl climb/descend, Q/E roll, wheel sets thrust speed. Escape releases the mouse and pauses. Resume, then click the view again. Buttons and menus never fire. Keys 1–4 choose weapons; touchscreen players use the four weapon buttons, existing steering joystick, cruise slider and held FIRE trigger.

1. Pulse: rapid shots; especially effective against Viper light fighters.
2. Ion: four times shield damage, reduced hull damage; counters Aegis interceptors.
3. Rail: fast, swept projectiles; penetrates Bastion armour. Other weapons lose damage against this armour.
4. Seeker: acquires targets near the reticle, tracks their real position, and retains full damage against Wraith phase camouflage. An unlocked missile flies straight.

All weapons build heat and share cooling; overheating locks fire until cooled. A weapon match helps, but other weapons can still inflict damage. Ships have real hull and (where applicable) shield pools.

## Encounters

A seven-second signature countdown precedes each encounter. The first squad contains all four classes. Vipers weave and break away from aimed fire; Aegis units flank with predictive fire; Bastions stand off and launch finite-turn-rate homing missiles; Wraiths make a short vertical dash and periodically phase, leaving a faint silhouette. Target brackets warn before an enemy fires.

Attackers shoot finite-speed projectiles and lead moving targets. Swept collision prevents fast rounds tunnelling through enemies. Terrain and the ancient hull are sampled along shot paths, so cover stops both sides. Enemies reject obstructed spawn positions and avoid crossing these surfaces. These environment checks use physical terrain/hull surfaces rather than changing the visual models.

Squads grow from four to six on default desktop quality (eight on High). Coarse-pointer/mobile and Performance mode cap them at four. A fixed pool holds 128 projectiles and 20 impact effects. Meshes and enemy geometry are shared; neither bullets nor explosions allocate new meshes during play.

Shields regenerate after six seconds without hits; hull does not. Defeat freezes combat and offers retry or return to peaceful flight. Retry repairs the pilot in the same universe. Jump clears nearby combatants and projectiles and restarts the arrival countdown without repairing hull. Pauses, panels, departure briefings, landing transitions, hidden tabs and excessive frame gaps cannot accumulate attacks or catch-up damage.

## Validation

`npm test` includes deterministic combat and existing flight tests. `tests/browser/combat.spec.mjs` exercises live input, attacks, damage, pause/retry/peaceful return and touch cancellation. Existing published-journey tests cover the peaceful route. Browser screenshots are generated in `test-results`.
