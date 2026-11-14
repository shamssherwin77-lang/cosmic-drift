# Opening cinematic

The approved 20-second `Meridian: Beyond the Known` trailer plays before the existing start menu. The playable ship, universe and combat are unchanged.

`Experience` mounts only `OpeningCinematic` initially; the game and its WebGL scene mount after natural completion, Skip intro, Escape or a media error. Video cleanup pauses playback and removes its source. This avoids concurrent WebGL rendering and movie decoding on older hardware.

Playback starts muted and inline to satisfy mobile/browser autoplay rules. A tap on the image or Sound on enables its existing soundtrack; the sound toggle can mute it again. If autoplay is rejected, Play intro offers a user-initiated fallback. Skip remains available. The film pauses when the tab is hidden. It runs once per page load, not on game-mode changes or challenge retries.

The web file preserves the approved cut and credit card, encoded H.264/AAC at 720p with fast-start metadata, approximately 6.9 MB (the approved master, without another lossy encode). Assets resolve against Vite's BASE_URL, including the `/cosmic-drift/` Pages deployment. Composer/license and edit attribution are in `public/video/CREDITS.txt` and MP4 metadata.

Browser checks cover real 20-second playback and natural transition, no WebGL canvas during playback, sound toggling, cleanup, Escape, failed media, blocked autoplay, portrait/landscape touch controls, the existing two-Jump Avaris route and right-click weapon cycling. Existing gameplay tests use the real visible Skip intro action before entering the game.

The approved Meridian trailer replaces the old opening film using the new `meridian-intro-v1.mp4` URL and matching poster, preventing cached copies of the previous movie from appearing. It includes the current ship, hostile formations, weapon passes, an impact and a black-hole approach. Playback/skip/sound controls and the delayed game mount remain unchanged.
