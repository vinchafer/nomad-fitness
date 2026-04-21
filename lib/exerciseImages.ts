/**
 * Kuratierte Übungsbilder — direkte Pexels-CDN-URLs (kein API Key nötig).
 * Jede Übung hat genau zwei Bilder: start + execution.
 * Für nicht aufgeführte Übungen zeigt ExerciseImages.tsx den 🏃 Fallback.
 */

export interface ExerciseImagePair {
  start: string
  execution: string
}

function px(startId: number, execId: number): ExerciseImagePair {
  const url = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1`
  return { start: url(startId), execution: url(execId) }
}

export const exerciseImages: Record<string, ExerciseImagePair> = {
  // ── Kraft / Bodyweight ──────────────────────────────────────────────────────
  'Push-Ups':                       px(1552103, 416778),
  'Wall Push-Ups':                  px(1552103, 416778),
  'Pike Push-Ups':                  px(416778, 1552103),
  'Archer Push-Ups':                px(416778, 1552103),
  'Push Up from Standing':          px(1552103, 416778),
  'Push-Up to Rotation':            px(416778, 1552103),

  'Squats':                         px(841130, 2247179),
  'Bodyweight Squats':              px(841130, 2247179),
  'Jump Squats':                    px(2247179, 841130),
  'Assisted Squats (hold chair)':   px(841130, 863977),
  'Single-Leg Squats (Pistol Squat progression)': px(2247179, 841130),

  'Lunges':                         px(1553743, 863977),
  'Reverse Lunges':                 px(863977, 1553743),
  'Step Lunges':                    px(1553743, 863977),
  'Reverse Lunge + Knee Drive':     px(863977, 2827392),
  'Low Lunge both sides':           px(1553743, 317157),

  'Plank':                          px(3822906, 1552242),
  'Modified Plank (on knees)':      px(3822906, 1552242),

  'Glute Bridges':                  px(3076509, 28062),
  'Bridges':                        px(3076509, 28062),

  'Mountain Climbers':              px(3757376, 4498606),
  'Jumping Jacks':                  px(2827392, 1553743),
  'High Knees':                     px(2827392, 3747437),
  'Burpees':                        px(4498151, 3621451),
  'Inchworm Walk-Out':              px(3621451, 3076509),

  'Superman':                       px(1552242, 28062),
  'Bird Dog':                       px(1552242, 3822906),
  'Dead Bug':                       px(3076509, 1552242),
  'Bicycle':                        px(2247179, 3757376),

  'Calf Raises':                    px(863977, 1553743),
  'Tricep Dips (using chair/bed)':  px(416778, 1552103),
  'March in Place':                 px(2827392, 1553743),
  'Caterpillar':                    px(3621451, 3076509),

  'Handstand Hold (against wall)':  px(4498606, 4498151),
  'L-Sit Hold':                     px(4498151, 4498606),
  'Planche Lean':                   px(416778, 4498606),
  'Nordic Curls':                   px(3757376, 863977),
  'Dragon Flag (progression)':      px(3757376, 4498151),

  // ── Pilates ─────────────────────────────────────────────────────────────────
  'The Hundred':                    px(3621451, 3621577),
  'Hundred (modified)':             px(3621451, 3621577),
  'Roll Up':                        px(3621577, 3621451),
  'Warm-up Roll Down':              px(3621451, 28062),
  'Roll Down':                      px(3621451, 28062),
  'Rolling Like a Ball':            px(3621577, 3621451),

  'Single Leg Stretch':             px(3621451, 1552242),
  'Single Leg Stretch with Breath': px(3621451, 1552242),
  'Double Leg Kick':                px(1552242, 3621451),
  'Criss Cross':                    px(3621451, 2247179),
  'Scissors':                       px(1552242, 3621451),
  'Jackknife':                      px(3621577, 1552242),
  'Boomerang':                      px(3621451, 3621577),
  'Corkscrew':                      px(3621577, 1552242),
  'Teaser':                         px(3621577, 3621451),
  'Boat Pose':                      px(3621577, 3621451),

  'Swan Prep':                      px(1552242, 28062),
  'Side Kick Series':               px(3621451, 1553743),
  'Mermaid Stretch':                px(28062, 3621451),
  'Saw':                            px(3621451, 28062),
  'Spine Stretch Forward':          px(28062, 3621451),
  'Spine Twist':                    px(3621451, 28062),
  'Ribcage Arms':                   px(3621451, 28062),
  'Imprint & Release':              px(3076509, 28062),
  'Pelvic Tilts':                   px(3076509, 28062),
  'Knee Drops':                     px(3076509, 1552242),
  'Single Leg Circles':             px(3621451, 1552242),
  'Arm Circles':                    px(3621451, 28062),
  'Hip Circles':                    px(3621451, 28062),

  // ── Yoga ────────────────────────────────────────────────────────────────────
  'Downward Dog':                   px(317157, 3822622),
  'Child\'s Pose':                  px(1812964, 3621451),
  'Cat-Cow Stretch':                px(317157, 28062),
  'Sphinx Pose':                    px(317157, 1812964),
  'Mountain Pose (Tadasana)':       px(317157, 3822622),
  'Mountain Pose with Breath':      px(317157, 3822622),

  'Warrior I both sides':           px(317157, 1812964),
  'Warrior II both sides':          px(3822622, 317157),
  'Warrior III':                    px(317157, 3822622),
  'Half Moon Pose':                 px(3822622, 317157),

  'Tree Pose':                      px(1812964, 3822622),
  'Eagle Pose':                     px(3822622, 1812964),
  'Chair Pose':                     px(841130, 317157),

  'Standing Forward Fold':          px(317157, 28062),
  'Standing Side Stretch':          px(28062, 317157),

  'Pigeon Pose left':               px(3822622, 1812964),
  'Pigeon Pose right':              px(3822622, 1812964),
  'Sleeping Swan left':             px(1812964, 3822622),
  'Sleeping Swan right':            px(1812964, 3822622),
  'Lizard Pose':                    px(317157, 3822622),
  'Dragon Pose left':               px(1553743, 317157),
  'Dragon Pose right':              px(1553743, 317157),
  'Half Monkey (Hanumanasana prep)':px(317157, 1812964),

  'Butterfly':                      px(1812964, 28062),
  'Butterfly Pose':                 px(1812964, 28062),
  'Reclined Butterfly':             px(1812964, 3621451),
  'Reclined Bound Angle':           px(1812964, 3621451),
  'Happy Baby':                     px(1812964, 3621451),
  'Happy Baby Pose':                px(1812964, 3621451),
  'Supine Twist':                   px(28062, 1812964),
  'Supine Twist left':              px(28062, 1812964),
  'Supine Twist right':             px(28062, 1812964),
  'Twisted Root left':              px(28062, 317157),
  'Twisted Root right':             px(28062, 317157),
  'Fire Log Pose':                  px(1812964, 28062),
  'Frog Pose':                      px(28062, 1812964),
  'Legs Up the Wall':               px(1812964, 3621451),
  'Melting Heart Pose':             px(1812964, 3621451),
  'Chest Opener':                   px(28062, 1812964),
  'Thread the Needle':              px(28062, 317157),
  'Piriformis Stretch':             px(28062, 3621451),
  'Knee-to-Chest Stretch':         px(3076509, 28062),

  'Sun Salutation A':               px(317157, 3822622),
  'Sun Salutation B':               px(3822622, 317157),

  'Savasana':                       px(1812964, 3621451),
  'Savasana with Breath Awareness': px(1812964, 3621451),
  'Progressive Relaxation':         px(1812964, 3621451),

  // ── Atemübungen ─────────────────────────────────────────────────────────────
  'Box Breathing':                  px(1812964, 28062),
  'Diaphragmatic Breathing':        px(1812964, 28062),

  // ── Aufwärmen / Cool-down ────────────────────────────────────────────────────
  'Cool down stretch':              px(28062, 317157),
}
