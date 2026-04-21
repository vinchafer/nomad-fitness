import Image from 'next/image';

const flowImages = [
  { file: 'squat-flow.png', label: 'Squat — 3-Panel Flow (Mann)' },
  { file: 'childs-pose-flow.png', label: "Child's Pose — 3-Panel Flow (Frau)" },
];

const comparesections = [
  {
    title: 'Test 2 — Squat (Mann)',
    images: [
      { file: 'squat-1.png', label: 'Squat — Start' },
      { file: 'squat-2.png', label: 'Squat — Ausfuehrung' },
      { file: 'squat-3.png', label: 'Squat — Return' },
    ],
  },
  {
    title: "Test 2 — Downward Dog (Frau)",
    images: [
      { file: 'downward-dog-1.png', label: 'Downward Dog — Start' },
      { file: 'downward-dog-2.png', label: 'Downward Dog — Ausfuehrung' },
      { file: 'downward-dog-3.png', label: 'Downward Dog — End' },
    ],
  },
  {
    title: "Test 1 — Child's Pose (Frau)",
    images: [
      { file: 'childs-pose-1.png', label: "Child's Pose — Start" },
      { file: 'childs-pose-2.png', label: "Child's Pose — Ausfuehrung" },
      { file: 'childs-pose-3.png', label: "Child's Pose — End" },
    ],
  },
  {
    title: 'Test 1 — Push-Up (Mann)',
    images: [
      { file: 'push-up-1.png', label: 'Push-Up — Start' },
      { file: 'push-up-2.png', label: 'Push-Up — Ausfuehrung' },
      { file: 'push-up-3.png', label: 'Push-Up — End' },
    ],
  },
];

export default function ImageTestPage() {
  return (
    <main className="min-h-screen bg-gray-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-1">Image Test — Stil-Vergleich</h1>
      <p className="text-gray-400 mb-12">DALL-E 3 standard quality</p>

      {/* Flow Images — Test 3 */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-gray-200 mb-2 border-b border-gray-800 pb-3">
          Test 3 — 3-Panel Flow (1792×1024)
        </h2>
        <p className="text-gray-500 text-sm mb-6">Ein Bild pro Uebung mit Start / Ausfuehrung / End nebeneinander</p>
        <div className="flex flex-col gap-8">
          {flowImages.map(({ file, label }) => (
            <div key={file} className="flex flex-col gap-3">
              <div className="relative w-full overflow-hidden rounded-xl bg-gray-800 border border-gray-700" style={{ aspectRatio: '1792/1024' }}>
                <Image
                  src={`/exercise-images/${file}`}
                  alt={label}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <p className="text-gray-300 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Images — Tests 1 & 2 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-200 border-b border-gray-800 pb-3">
          Tests 1 &amp; 2 — Einzelbilder (1024×1024)
        </h2>
      </div>
      {comparesections.map((section) => (
        <section key={section.title} className="mb-12">
          <h3 className="text-base font-medium text-gray-400 mb-4">{section.title}</h3>
          <div className="grid grid-cols-3 gap-4">
            {section.images.map(({ file, label }) => (
              <div key={file} className="flex flex-col gap-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                  <Image
                    src={`/exercise-images/${file}`}
                    alt={label}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <p className="text-center text-gray-400 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
