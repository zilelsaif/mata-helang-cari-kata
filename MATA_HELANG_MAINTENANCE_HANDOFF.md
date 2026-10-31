# Mata Helang: Cari Kata — Maintenance Handoff

## Release status

- Final active-development target: **v0.25.0 by Zil-el-Saif**
- Status: **ACTIVE DEVELOPMENT PAUSED — MAINTENANCE & USER FEEDBACK**
- Release remains local until user acceptance, commit, tag and deployment are completed through the owner's normal workflow.
- The game is not discontinued. Future changes should respond to verified defects, accessibility needs and genuine player or parent feedback.

## Product overview

Mata Helang: Cari Kata is a static, privacy-first Bahasa Melayu Malaysia word-search game. It uses vanilla HTML, CSS and JavaScript and has no runtime package, login, backend, analytics or advertising dependency.

The five playable modes are:

1. Mod Klasik
2. Pencarian Rahsia
3. Huruf Tersembunyi
4. Misteri Berganda
5. Rantaian Kata

All modes share the existing four age groups, six categories, word-bank rules, pointer interaction, victory flow and responsive board generator.

## Player systems

### Jejak Helang

Jejak Helang records completed puzzles, found words, category/age coverage, ranks and achievement badges. Rewards are granted only through the established completed-puzzle path. Abandoned boards must never grant rewards.

### Kata Raka

Kata Raka is a profile-aware collectible-card system with three editions and 30 card assets. Unlocks remain tied to the existing completion and progression rules. Do not change card IDs, unlock conditions or stored ownership without an explicit migration plan.

### Profiles

Up to five local profiles are supported. Guest play remains available and stores no permanent profile. Legacy avatar IDs must continue to render even though new avatar selection uses the premium avatar set.

## Storage namespaces

The current versioned browser-storage namespaces are:

- `mataHelangProfiles_v1` — profile IDs, nicknames, avatar IDs and active profile.
- `mataHelangProgression_v1` — Jejak Helang totals, ranks, achievements and completion statistics by profile.
- `mataHelangKataRaka_v1` — Kata Raka ownership and unlock state by profile.
- `mataHelangZilTerokaIntro_v1` in `sessionStorage` — session-only intro visibility.

Do not rename, clear or reshape these keys without a backward-compatible migration and corrupted/unavailable-storage fallback tests.

The Parent Support page stores no acknowledgement, payment or personal data.

## Important asset directories

- `assets/raka/` — official Raka mascot artwork.
- `assets/avatar/` — premium profile avatar artwork.
- `assets/ikon/` — premium action and game-mode artwork.
- `assets/pangkat/pangkat-helang/` — seven rank emblems.
- `assets/lencana/achievements/` — achievement emblems.
- `assets/kata-raka/` — 30 Kata Raka card images.
- `assets/branding/` — ZilTeroka identity, game-gallery artwork and portal QR.

The portal QR at `assets/branding/zilteroka-qr.webp` is **not a payment QR** and must never be reused as one.

## Parent Support status

The v0.25.0 interface provides voluntary-support information behind a clear parent/guardian acknowledgement. Support does not unlock gameplay content, progression, avatars, ranks, achievements or cards.

The owner supplied and explicitly approved the Mata Helang support poster at `assets/support/mata-helang-support-qr.png`. The PNG is retained byte-for-byte without cropping, recompression, overlays or programmatic QR regeneration. Its SHA-256 hash is `8CBED0EB42AC20074D4A98C9488A66CF6D0B4EDB5A0F3774902FAC040D8993B3`.

The ZilTeroka portal QR remains a separate asset and must never be substituted for this payment poster. Payment completion is not detected or stored by the game.

Verified feedback destination used by the interface: `zilteroka@gmail.com`.

## Deployment information

- Application type: static web application.
- Canonical public URL recorded by the ZilTeroka catalogue: `https://mata-helang-cari-kata.pages.dev/`.
- Hosting workflow: GitHub repository with Cloudflare Pages automation managed outside the application source.
- Git operations remain owner-controlled through GitHub Desktop.

Do not claim a release is deployed until the public build and its version footer are verified at the canonical URL.

## Critical test checklist

Before every maintenance release:

1. Run `node --check game.js` and a whitespace/diff integrity check.
2. Serve the repository over local HTTP; do not rely on `file://` behavior.
3. Verify title, Raka artwork/fallback, player selection, five-profile limit, editing, deletion confirmation and guest flow.
4. Verify all four age groups and six categories can reach every applicable game mode.
5. Complete representative puzzles using real pointer dragging, including diagonal and reversed selections at the configured ages.
6. Verify wrong selections, persistent found-word colours, overlaps, victory, Jejak rewards, Kata Raka reveals and duplicate-reward prevention.
7. Verify MENU, TERUSKAN, KELUAR and MAIN LAGI state behavior.
8. Verify Parent Support acknowledgement, dismissal, support page, feedback link semantics and KEMBALI navigation.
9. Confirm the Parent Support flow does not write to profile, progression or card storage.
10. Verify Kenali ZilTeroka and its portal QR remain distinct from support content.
11. Check 320, 360, 390, 768, 1024, 1366 and 1600-pixel viewport widths for horizontal overflow.
12. Inspect browser console errors, failed assets and keyboard focus/Escape behavior.

## Known limitations and deferred work

- The approved support poster is bundled, but payment status is not verified by the game.
- Payment verification, checkout, subscriptions and in-app purchases are intentionally absent.
- No cloud account, profile sync, backend, analytics or recovery service exists.
- Data remains local to the browser and may be lost when site storage is cleared.
- Physical-device QR scanning and real payment transactions are outside local QA and must not be simulated.
- Locked achievement presentation uses the existing fallback treatment where dedicated locked artwork is unavailable.
- Future content, progression-schema changes and new modes are deferred until supported by genuine feedback.

## Safe future development

- Inspect the current UI, storage structures and user acceptance baseline before editing.
- Keep changes narrow and preserve the established Malaysian Malay vocabulary policy.
- Never modify release archives, profile IDs, stored avatar compatibility or reward rules casually.
- Add storage migrations before changing any persisted structure.
- Use text-safe rendering for player nicknames and avoid collecting unnecessary personal data.
- Treat supplied artwork and QR assets as immutable unless explicit editing approval is provided.
- Keep support voluntary, outside gameplay and free from pressure, rewards or child-directed prompts.
- Complete local regression and user acceptance before commit, tag or deployment.

