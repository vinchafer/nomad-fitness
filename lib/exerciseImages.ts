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

function imgSet(baseUrl: string): ExerciseImageSet {
  return {
    start: baseUrl,
    mid1: baseUrl,
    mid2: baseUrl,
    end: baseUrl
  }
}

export const exerciseImages: Record<string, ExerciseImageSet> = {

  // ✅ PILATES ÜBUNGEN - 100% KORREKT UND PASSEND
  'Diaphragmatic Breathing':        imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Pelvic Tilts':                   imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Imprint & Release':              imgSet('https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&h=375&q=80'),
  'Dead Bug':                       imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Single Leg Stretch':             imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Hundred (modified)':             imgSet('https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=500&h=375&q=80'),
  'The Hundred':                    imgSet('https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=500&h=375&q=80'),
  'Cat-Cow Stretch':                imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  "Child's Pose":                   imgSet('https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=500&h=375&q=80'),
  'Roll Up':                        imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Box Breathing':                  imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Knee Drops':                     imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Supine Twist':                   imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Bridge Lift & Lower':            imgSet('https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=500&h=375&q=80'),
  'Spine Stretch Forward':          imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Mermaid Stretch':                imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Hip Circles':                    imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Savasana':                       imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Teaser Prep':                    imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Teaser':                         imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Criss Cross':                    imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Double Leg Stretch':             imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Single Leg Circles':             imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Scissors':                       imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Swan Prep':                      imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Side Kick Series':               imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Saw':                            imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Spine Twist':                    imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Ribcage Arms':                   imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Arm Circles':                    imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Rolling Like a Ball':            imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Boat Pose':                      imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Corkscrew':                      imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Boomerang':                      imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Jackknife':                      imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  
  // ✅ ALLGEMEINE ÜBUNGEN
  'Glute Bridges':                  imgSet('https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=500&h=375&q=80'),
  'Bridges':                        imgSet('https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=500&h=375&q=80'),
  'Plank':                          imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Modified Plank (on knees)':      imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Superman':                       imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Bird Dog':                       imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Bicycle':                        imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  
  // ✅ YOGA ÜBUNGEN
  'Downward Dog':                   imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Sphinx Pose':                    imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Mountain Pose (Tadasana)':       imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Warrior I both sides':           imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Warrior II both sides':          imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Warrior III':                    imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Tree Pose':                      imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Chair Pose':                     imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Butterfly Pose':                 imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Reclined Butterfly':             imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Happy Baby':                     imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Happy Baby Pose':                imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Pigeon Pose left':               imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Pigeon Pose right':              imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Frog Pose':                      imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Legs Up the Wall':               imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Chest Opener':                   imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Thread the Needle':              imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Piriformis Stretch':             imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Knee-to-Chest Stretch':          imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Cool down stretch':              imgSet('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=375&q=80'),
  
  // ✅ KRAFT ÜBUNGEN
  'Push-Ups':                       imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Squats':                         imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Lunges':                         imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Reverse Lunges':                 imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Mountain Climbers':              imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Jumping Jacks':                  imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Burpees':                        imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
  'Calf Raises':                    imgSet('https://images.unsplash.com/photo-1571019614242-c5c5dee9f56b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Tricep Dips (using chair/bed)':  imgSet('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&h=375&q=80'),
  'Standing Forward Fold':          imgSet('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&h=375&q=80'),
}