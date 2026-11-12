# Opening cinematic

The approved 20-second `Beyond the Known` film plays before the existing start menu. The playable ship, universe and combat are unchanged.

`Experience` mounts only `OpeningCinematic` initially; the game and its WebGL scene mount after natural completion, Skip intro, Escape or a media error. Video cleanup pauses playback and removes its source. This avoids concurrent WebGL rendering and movie decoding on older hardware.

Playback starts muted and inline to satisfy mobile/browser autoplay rules. A tap on the image or Sound on enables its existing soundtrack; the sound toggle can mute it again. If autoplay is rejected, Play intro offers a user-initiated fallback. Skip remains available. The film pauses when the tab is hidden. It runs once per page load, not on game-mode changes or challenge retries.

The web file preserves the approved cut and credit card, encoded H.264/AAC at 720p with fast-start metadata, approximately 3 MB. Assets resolve against Vite's BASE_URL, including the `/cosmic-drift/` Pages deployment. Composer/license and edit attribution are in `public/video/CREDITS.txt` and MP4 metadata.

Browser checks cover real 20-second playback and natural transition, no WebGL canvas during playback, sound toggling, cleanup, Escape, failed media, blocked autoplay, portrait/landscape touch controls, the existing two-Jump Avaris route and right-click weapon cycling. Existing gameplay tests use the real visible Skip intro action before entering the game.
