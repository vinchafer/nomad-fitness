import { PushUps } from './PushUps'
import { Squats } from './Squats'
import { Plank } from './Plank'
import { GluteBridges } from './GluteBridges'
import { MountainClimbers } from './MountainClimbers'
import { DownwardDog } from './DownwardDog'
import { ChildsPose } from './ChildsPose'
import { WarriorI } from './WarriorI'
import { WarriorII } from './WarriorII'
import { BicycleCrunches } from './BicycleCrunches'
import { DeadBug } from './DeadBug'
import { Superman } from './Superman'
import { CatCow } from './CatCow'
import { ReverseLunges } from './ReverseLunges'
import { TricepDips } from './TricepDips'
import { SidePlank } from './SidePlank'
import { LegRaises } from './LegRaises'
import { TreePose } from './TreePose'
import { PigeonPose } from './PigeonPose'
import { PilatesHundred } from './PilatesHundred'
import { RollUp } from './RollUp'
import { SingleLegStretch } from './SingleLegStretch'
import { DoubleLegStretch } from './DoubleLegStretch'
import { SpineTwist } from './SpineTwist'
import { HipCircles } from './HipCircles'
import { DiaphragmaticBreathing } from './DiaphragmaticBreathing'
import { PelvicTilt } from './PelvicTilt'
import { LegCircle } from './LegCircle'
import { SupineTwist } from './SupineTwist'
import { LegsUpTheWall } from './LegsUpTheWall'
import { Savasana } from './Savasana'
import { GenericMale } from './GenericMale'
import { GenericFemale } from './GenericFemale'
import { StandingForwardFold } from './StandingForwardFold'
import { CrescentLunge } from './CrescentLunge'
import { BoatPose } from './BoatPose'
import { CobraPose } from './CobraPose'
import { ThreadTheNeedle } from './ThreadTheNeedle'
import { MermaidStretch } from './MermaidStretch'
import { SeatedForwardFold } from './SeatedForwardFold'
import type { IllustrationPair } from './index'

export interface ExerciseIllustration extends IllustrationPair {
  character: 'male' | 'female'
}

// Shorthand
const M = 'male' as const
const F = 'female' as const

export const exerciseImageMap: Record<string, ExerciseIllustration> = {
  // ── Push-Ups & variants ──────────────────────────────────────────────────
  'Push-Ups':                               { character: M, ...PushUps },
  'Archer Push-Ups':                        { character: M, ...PushUps },
  'Pike Push-Ups':                          { character: M, ...PushUps },
  'Wall Push-Ups':                          { character: M, ...PushUps },
  'Push Up from Standing':                  { character: M, ...PushUps },
  'Push-Up to Rotation':                    { character: M, ...PushUps },

  // ── Squats & lower-body standing ────────────────────────────────────────
  'Squats':                                 { character: M, ...Squats },
  'Bodyweight Squats':                      { character: M, ...Squats },
  'Jump Squats':                            { character: M, ...Squats },
  'Assisted Squats (hold chair)':           { character: M, ...Squats },
  'Chair Pose':                             { character: F, ...Squats },
  'Single-Leg Squats (Pistol Squat progression)': { character: M, ...Squats },
  'Calf Raises':                            { character: M, ...Squats },

  // ── Plank ────────────────────────────────────────────────────────────────
  'Plank':                                  { character: M, ...Plank },
  'Modified Plank (on knees)':              { character: M, ...Plank },

  // ── Glute Bridges ────────────────────────────────────────────────────────
  'Glute Bridges':                          { character: F, ...GluteBridges },
  'Bridges':                                { character: F, ...GluteBridges },

  // ── Mountain Climbers / Cardio ───────────────────────────────────────────
  'Mountain Climbers':                      { character: M, ...MountainClimbers },
  'High Knees':                             { character: M, ...MountainClimbers },
  'Burpees':                                { character: M, ...MountainClimbers },
  'March in Place':                         { character: F, ...MountainClimbers },

  // ── Downward Dog / Sun Salutations ───────────────────────────────────────
  'Downward Dog':                           { character: F, ...DownwardDog },
  'Sun Salutation A':                       { character: F, ...DownwardDog },
  'Sun Salutation B':                       { character: F, ...DownwardDog },

  // ── Child's Pose ─────────────────────────────────────────────────────────
  "Child's Pose":                           { character: F, ...ChildsPose },

  // ── Warrior / Standing Yoga ──────────────────────────────────────────────
  'Warrior I both sides':                   { character: F, ...WarriorI },
  'Warrior II both sides':                  { character: F, ...WarriorII },
  'Warrior III':                            { character: F, ...WarriorII },
  'Half Moon Pose':                         { character: F, ...WarriorII },
  'Eagle Pose':                             { character: F, ...WarriorII },
  'Tree Pose':                              { character: F, ...TreePose },
  'Mountain Pose (Tadasana)':               { character: F, ...GenericFemale },
  'Mountain Pose with Breath':              { character: F, ...DiaphragmaticBreathing },

  // ── Bicycle / Pilates supine ─────────────────────────────────────────────
  'Bicycle':                                { character: F, ...BicycleCrunches },
  'Criss Cross':                            { character: F, ...BicycleCrunches },
  'Scissors':                               { character: F, ...BicycleCrunches },
  'Side Kick Series':                       { character: F, ...SidePlank },

  // ── Dead Bug / Bird Dog ──────────────────────────────────────────────────
  'Dead Bug':                               { character: F, ...DeadBug },
  'Bird Dog':                               { character: M, ...DeadBug },

  // ── Superman / Prone back extension ─────────────────────────────────────
  'Superman':                               { character: M, ...Superman },
  'Double Leg Kick':                        { character: F, ...Superman },

  // ── Cat-Cow ───────────────────────────────────────────────────────────────
  'Cat-Cow Stretch':                        { character: F, ...CatCow },

  // ── Lunges ───────────────────────────────────────────────────────────────
  'Reverse Lunges':                         { character: M, ...ReverseLunges },
  'Reverse Lunge + Knee Drive':             { character: M, ...ReverseLunges },
  'Step Lunges':                            { character: M, ...ReverseLunges },
  'Low Lunge both sides':                   { character: F, ...CrescentLunge },
  'Half Monkey (Hanumanasana prep)':        { character: F, ...CrescentLunge },

  // ── Tricep Dips ──────────────────────────────────────────────────────────
  'Tricep Dips (using chair/bed)':          { character: M, ...TricepDips },

  // ── Leg Raises ───────────────────────────────────────────────────────────
  'Leg Raises':                             { character: M, ...LegRaises },

  // ── Pigeon / Hip openers ─────────────────────────────────────────────────
  'Pigeon Pose left':                       { character: F, ...PigeonPose },
  'Pigeon Pose right':                      { character: F, ...PigeonPose },
  'Dragon Pose left':                       { character: F, ...PigeonPose },
  'Dragon Pose right':                      { character: F, ...PigeonPose },
  'Sleeping Swan left':                     { character: F, ...PigeonPose },
  'Sleeping Swan right':                    { character: F, ...PigeonPose },
  'Lizard Pose':                            { character: F, ...PigeonPose },
  'Butterfly Pose':                         { character: F, ...PigeonPose },
  'Butterfly':                              { character: F, ...PigeonPose },
  'Fire Log Pose':                          { character: F, ...PigeonPose },
  'Frog Pose':                              { character: F, ...PigeonPose },
  'Piriformis Stretch':                     { character: F, ...PigeonPose },

  // ── Pilates Hundred ──────────────────────────────────────────────────────
  'The Hundred':                            { character: F, ...PilatesHundred },
  'Hundred (modified)':                     { character: F, ...PilatesHundred },

  // ── Roll Up / Rolling ────────────────────────────────────────────────────
  'Roll Up':                                { character: F, ...RollUp },
  'Roll Down':                              { character: F, ...RollUp },
  'Warm-up Roll Down':                      { character: F, ...RollUp },
  'Rolling Like a Ball':                    { character: F, ...RollUp },

  // ── Single / Double Leg Stretch ──────────────────────────────────────────
  'Single Leg Stretch':                     { character: F, ...SingleLegStretch },
  'Single Leg Stretch with Breath':         { character: F, ...SingleLegStretch },
  'Double Leg Stretch':                     { character: F, ...DoubleLegStretch },

  // ── Spine Twist / Saw ────────────────────────────────────────────────────
  'Spine Twist':                            { character: F, ...SpineTwist },
  'Saw':                                    { character: F, ...SpineTwist },
  'Spine Stretch Forward':                  { character: F, ...SeatedForwardFold },

  // ── Hip Circles / Arm Circles ────────────────────────────────────────────
  'Hip Circles':                            { character: F, ...HipCircles },
  'Arm Circles':                            { character: F, ...HipCircles },

  // ── Breathing / Relaxation ───────────────────────────────────────────────
  'Diaphragmatic Breathing':                { character: F, ...DiaphragmaticBreathing },
  'Box Breathing':                          { character: F, ...DiaphragmaticBreathing },
  'Progressive Relaxation':                 { character: F, ...DiaphragmaticBreathing },

  // ── Pelvic Tilts / Pilates mat basics ────────────────────────────────────
  'Pelvic Tilts':                           { character: F, ...PelvicTilt },
  'Imprint & Release':                      { character: F, ...PelvicTilt },
  'Ribcage Arms':                           { character: F, ...PelvicTilt },
  'Knee Drops':                             { character: F, ...PelvicTilt },

  // ── Single Leg Circles ───────────────────────────────────────────────────
  'Single Leg Circles':                     { character: F, ...LegCircle },
  'Corkscrew':                              { character: F, ...LegCircle },

  // ── Supine Twist ─────────────────────────────────────────────────────────
  'Supine Twist':                           { character: F, ...SupineTwist },
  'Supine Twist left':                      { character: F, ...SupineTwist },
  'Supine Twist right':                     { character: F, ...SupineTwist },
  'Twisted Root left':                      { character: F, ...SupineTwist },
  'Twisted Root right':                     { character: F, ...SupineTwist },

  // ── Legs Up the Wall / Supine restorative ────────────────────────────────
  'Legs Up the Wall':                       { character: F, ...LegsUpTheWall },
  'Happy Baby Pose':                        { character: F, ...LegsUpTheWall },
  'Happy Baby':                             { character: F, ...LegsUpTheWall },
  'Reclined Bound Angle':                   { character: F, ...LegsUpTheWall },
  'Reclined Butterfly':                     { character: F, ...LegsUpTheWall },
  'Knee-to-Chest Stretch':                  { character: F, ...LegsUpTheWall },

  // ── Savasana / Cool-down ─────────────────────────────────────────────────
  'Savasana':                               { character: F, ...Savasana },
  'Savasana with Breath Awareness':         { character: F, ...Savasana },
  'Cool down stretch':                      { character: F, ...Savasana },

  // ── Standing Forward Fold ────────────────────────────────────────────────
  'Standing Forward Fold':                  { character: F, ...StandingForwardFold },
  'Inchworm Walk-Out':                      { character: M, ...StandingForwardFold },
  'Caterpillar':                            { character: F, ...StandingForwardFold },

  // ── Crescent Lunge ───────────────────────────────────────────────────────
  'Crescent Lunge':                         { character: F, ...CrescentLunge },

  // ── Boat Pose / Pilates Teaser ───────────────────────────────────────────
  'Boat Pose':                              { character: F, ...BoatPose },
  'Teaser':                                 { character: F, ...BoatPose },
  'Jackknife':                              { character: F, ...BoatPose },
  'L-Sit Hold':                             { character: M, ...BoatPose },
  'Boomerang':                              { character: F, ...BoatPose },

  // ── Cobra / Prone backbends ──────────────────────────────────────────────
  'Sphinx Pose':                            { character: F, ...CobraPose },
  'Swan Prep':                              { character: F, ...CobraPose },
  'Melting Heart Pose':                     { character: F, ...CobraPose },

  // ── Thread the Needle ────────────────────────────────────────────────────
  'Thread the Needle':                      { character: F, ...ThreadTheNeedle },

  // ── Mermaid / Side stretch ───────────────────────────────────────────────
  'Mermaid Stretch':                        { character: F, ...MermaidStretch },
  'Standing Side Stretch':                  { character: F, ...MermaidStretch },
  'Chest Opener':                           { character: F, ...MermaidStretch },

  // ── Seated Forward Fold ──────────────────────────────────────────────────
  'Seated Forward Fold':                    { character: F, ...SeatedForwardFold },

  // ── Advanced / Strength ─────────────────────────────────────────────────
  'Jumping Jacks':                          { character: M, ...GenericMale },
  'Dragon Flag (progression)':              { character: M, ...GenericMale },
  'Handstand Hold (against wall)':          { character: M, ...GenericMale },
  'Nordic Curls':                           { character: M, ...GenericMale },
  'Planche Lean':                           { character: M, ...GenericMale },
  'L-Sit':                                  { character: M, ...GenericMale },
  'Teaser (prep)':                          { character: F, ...BoatPose },
}
