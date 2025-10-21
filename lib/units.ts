export interface Unit {
  id: string;
  title: string;
  function: string;
  status: string;
  specs: string[];
}

export const UNITS: Record<string, Unit> = {
  "01": {
    id: "01",
    title: "UNIT_01 : HYBRID_SHORT",
    function: "STRENGTH + ENDURANCE",
    status: "SAMPLING",
    specs: [
      "Fabric: 88% nylon / 12% spandex, 220–240gsm, matte, 4-way stretch",
      "Inseam: 6.5in; waistband: 2.5in compression; hidden flat drawcord",
      "Pockets: dual side hidden-zip (7–8in), internal media pocket",
      "Seams: flatlock; bar-tacks at stress points; tonal thread",
      "Branding: tonal 1in matte silicone mark; inner-hem print 'Defy Limitation.'"
    ]
  },
  "02": {
    id: "02",
    title: "UNIT_02 : PERFORMANCE_TEE",
    function: "BREATH + MOTION",
    status: "SAMPLING",
    specs: [
      "Fabric: 90% poly / 10% spandex, 160–180gsm, matte, anti-odor",
      "Fit: athletic 'Quiet Taper', curved hem, 2cm drop tail",
      "Construction: forward shoulder seam, self-binding crew, ergonomic sleeve",
      "Ventilation: laser-cut micro-vents (upper back or underarm)",
      "Branding: 1in tonal mark on sleeve; inner-hem print 'Silence First.'"
    ]
  }
};
