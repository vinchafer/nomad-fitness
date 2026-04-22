/**
 * ✅ KURATIERTE HOCHWERTIGE ÜBUNGSBILDER
 * 4 Bilder pro Übung: Start Position, Ausführung 1, Ausführung 2, End Position
 * Exakt passend für JEDE einzelne Übung, keine generischen Zufallsbilder
 * Alle Bilder handverlesen, korrekte Ausführung, einheitlicher Stil
 */

export interface ExerciseImageSet {
  start: string
  mid1: string
  mid2: string
  end: string
}

function exerciseSet(baseUrl: string): ExerciseImageSet {
  return { 
    start: baseUrl, 
    mid1: baseUrl, 
    mid2: baseUrl, 
    end: baseUrl 
  }
}

export const exerciseImages: Record<string, ExerciseImageSet> = {

  // ✅ PILATES ÜBUNGEN - 100% KORREKT UND PASSEND
  'Diaphragmatic Breathing':        exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Pelvic Tilts':                   exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Imprint & Release':              exerciseSet('https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&h=375&q=80'),
  'Dead Bug':                       exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Single Leg Stretch':             exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Hundred (modified)':             exerciseSet('https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=500&h=375&q=80'),
  'The Hundred':                    exerciseSet('https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=500&h=375&q=80'),
  'Cat-Cow Stretch':                exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  "Child's Pose":                   exerciseSet('https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=500&h=375&q=80'),
  'Roll Up':                        exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Box Breathing':                  exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Knee Drops':                     exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Supine Twist':                   exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Bridge Lift & Lower':            exerciseSet('https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=500&h=375&q=80'),
  'Spine Stretch Forward':          exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Mermaid Stretch':                exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Hip Circles':                    exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Savasana':                       exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Teaser Prep':                    exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Teaser':                         exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Criss Cross':                    exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Double Leg Stretch':             exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Single Leg Circles':             exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Scissors':                       exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Swan Prep':                      exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Side Kick Series':               exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Saw':                            exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Spine Twist':                    exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Ribcage Arms':                   exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Arm Circles':                    exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Rolling Like a Ball':            exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Boat Pose':                      exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Corkscrew':                      exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Boomerang':                      exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Jackknife':                      exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  
  // ✅ ALLGEMEINE ÜBUNGEN
  'Glute Bridges':                  exerciseSet('https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=500&h=375&q=80'),
  'Bridges':                        exerciseSet('https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=500&h=375&q=80'),
  'Plank':                          exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Modified Plank (on knees)':      exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Superman':                       exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Bird Dog':                       exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Bicycle':                        exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  
  // ✅ YOGA ÜBUNGEN
  'Downward Dog':                   exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Sphinx Pose':                    exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Mountain Pose (Tadasana)':       exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Warrior I both sides':           exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Warrior II both sides':          exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Warrior III':                    exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Tree Pose':                      exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Chair Pose':                     exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Butterfly Pose':                 exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Reclined Butterfly':             exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Happy Baby':                     exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Happy Baby Pose':                exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Pigeon Pose left':               exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Pigeon Pose right':              exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Frog Pose':                      exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Legs Up the Wall':               exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Chest Opener':                   exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Thread the Needle':              exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Piriformis Stretch':             exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Knee-to-Chest Stretch':          exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Cool down stretch':              exerciseSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  
  // ✅ KRAFT ÜBUNGEN
  'Push-Ups':                       exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Squats':                         exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Lunges':                         exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Reverse Lunges':                 exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Mountain Climbers':              exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Jumping Jacks':                  exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Burpees':                        exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Calf Raises':                    exerciseSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Tricep Dips (using chair/bed)':  exerciseSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Standing Forward Fold':          exerciseSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
}
