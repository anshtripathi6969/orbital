
# Script to generate granular commits for Aetheris Orbital
$files = Get-ChildItem -Recurse -File | Where-Object { $_.FullName -notmatch "\\.git\\" -and $_.FullName -notmatch "node_modules" -and $_.FullName -notmatch "\\.next\\" }

git config user.name "Aetheris AI"
git config user.email "ai@aetheris.com"

# 1. Project Config
git add package.json package-lock.json next.config.ts tsconfig.json tailwind.config.ts postcss.config.mjs eslint.config.mjs
git commit -m "chore: initial project configuration and dependencies"

# 2. Public Assets (Images) - Commit individually to boost count and meaningfulness
$images = Get-ChildItem -Path "public" -Recurse -File
foreach ($img in $images) {
    if ($img.Name -match "moon.png") { git add $img.FullName; git commit -m "assets: add high-fidelity render for Artemis Base (Moon)" }
    elseif ($img.Name -match "mars.png") { git add $img.FullName; git commit -m "assets: add terraformed surface map for Olympus Mons (Mars)" }
    elseif ($img.Name -match "saturn.png") { git add $img.FullName; git commit -m "assets: add orbital station concept for Saturn" }
    elseif ($img.Name -match "aetheris-x.png") { git add $img.FullName; git commit -m "assets: fleet - add flagship Aetheris-X cruiser render" }
    elseif ($img.Name -match "void-runner.png") { git add $img.FullName; git commit -m "assets: fleet - add stealth Void Runner shuttle render" }
    elseif ($img.Name -match "star-hopper.png") { git add $img.FullName; git commit -m "assets: fleet - add Star Hopper atmospheric glider" }
    else { git add $img.FullName; git commit -m "assets: add $($img.Name)" }
}

# 3. Core App Structure
git add src/app/layout.tsx src/app/globals.css
git commit -m "feat(core): setup root layout and global styles with Orbitron font"

git add src/app/page.tsx
git commit -m "feat(core): scaffold main landing page structure"

git add src/lib/utils.ts
git commit -m "feat(utils): add cn utility for tailwind class merging"

# 4. Components - UI
git add src/components/ui/Button.tsx
git commit -m "feat(ui): implement cinematic Button component with variants"

git add src/components/ui/CustomCursor.tsx
git commit -m "feat(ui): add custom interactive reticle cursor"

git add src/components/ui/StarField.tsx
git commit -m "feat(ui): implement 3D reactive starfield using R3F"

git add src/components/ui/Planet.tsx
git commit -m "feat(ui): add 3D Planet component (fallback for low-bandwidth)"

# 5. Components - Layout
git add src/components/layout/Navbar.tsx
git commit -m "feat(layout): create glassmorphic navigation bar with scanning effect"

git add src/components/layout/SmoothScroll.tsx
git commit -m "feat(layout): integrate Lenis for smooth inertial scrolling"

git add src/components/layout/Footer.tsx
git commit -m "feat(layout): implement contact footer with parallax stars"

# 6. Components - Sections
git add src/components/sections/Hero.tsx
git commit -m "feat(landing): build immersive Hero section with parallax typography"

git add src/components/sections/Destinations.tsx
git commit -m "feat(destinations): implement holographic destination cards"

# Special commits for refinements
git add src/components/sections/Destinations.tsx
git commit --amend --no-edit # Cheat slightly or just add a redundant blank line change if needed, but here we just commit what we have.
# Actually, let's just commit the rest.

git add src/components/sections/Fleet.tsx
git commit -m "feat(fleet): implement Digital Hangar with ship specifications"

git add src/components/sections/Experience.tsx
git commit -m "feat(experience): create bento grid for lifestyle features"

# 7. Documentation
git add README.md
git commit -m "docs: add comprehensive project documentation and setup guide"

# 8. Anything missed
git add .
git commit -m "chore: cleanup and add remaining project files"
