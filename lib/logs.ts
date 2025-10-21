export type LogEntry = {
  id: string;
  code: string;
  type: "RUN" | "LIFT" | "HYBRID";
  unit: "01" | "02";
  location: string;
  conditions?: string;
  durationSec: number;
  poster: string;
  src: string;
  dateISO: string;
  tags?: string[];
  transcript?: string[];
};

export const LOGS: LogEntry[] = [
  {
    id: "0501-01",
    code: "LOG_05:01 / RUN_01",
    type: "RUN",
    unit: "01",
    location: "MILFORD_CT",
    conditions: "37°F / WIND 4MPH",
    durationSec: 21,
    poster: "/video/log-0501-01.mp4",
    src: "/video/log-0501-01.mp4",
    dateISO: "2025-10-21T05:01:00-04:00",
    tags: ["NIGHT", "DAWN", "COLD"],
    transcript: [
      "ENTRY : RITUAL_PROTOCOL",
      "BREATH : CONTROLLED",
      "STATUS : COMPLETE"
    ]
  },
  {
    id: "0501-02",
    code: "LOG_05:06 / LIFT_01",
    type: "LIFT",
    unit: "01",
    location: "MILFORD_CT",
    durationSec: 18,
    poster: "/video/log-0501-02.mp4",
    src: "/video/log-0501-02.mp4",
    dateISO: "2025-10-21T05:06:00-04:00",
    tags: ["HYBRID"],
  },
  {
    id: "0501-03",
    code: "LOG_05:12 / HYBRID_01",
    type: "HYBRID",
    unit: "02",
    location: "MILFORD_CT",
    durationSec: 23,
    poster: "/video/log-0501-03.mp4",
    src: "/video/log-0501-03.mp4",
    dateISO: "2025-10-21T05:12:00-04:00",
    tags: ["NIGHT"],
  },
  {
    id: "0501-04",
    code: "LOG_05:18 / RUN_02",
    type: "RUN",
    unit: "01",
    location: "MILFORD_CT",
    durationSec: 20,
    poster: "/video/log-0501-04.mp4",
    src: "/video/log-0501-04.mp4",
    dateISO: "2025-10-21T05:18:00-04:00",
    tags: ["COLD", "DAWN"],
  },
  {
    id: "0501-05",
    code: "LOG_05:24 / LIFT_02",
    type: "LIFT",
    unit: "02",
    location: "MILFORD_CT",
    durationSec: 16,
    poster: "/video/log-0501-05.mp4",
    src: "/video/log-0501-05.mp4",
    dateISO: "2025-10-21T05:24:00-04:00",
    tags: ["NIGHT"],
  }
];
