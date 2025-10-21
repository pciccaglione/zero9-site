export const COPY = {
  boot: [
    "0/9_SYSTEM : ONLINE",
    "ENVIRONMENT : PREDAWN",
    "PROTOCOL : ACCESS",
    "STATUS : AWAITING_INPUT [ ENTER ]",
  ],
  executing: [
    "EXECUTING : RITUAL_PROTOCOL",
    "UNIT_01 : HYBRID_SHORT",
    "STATUS : ACTIVE",
  ],
  heroOverlay: "LOG_05:01 / STRENGTH_IN_SILENCE",
  creed: [
    "0/9 was born in the hours before sunrise — for those who train while the world sleeps.",
    "For the ones who build strength in silence and channel aggression into discipline.",
    "There is no noise here. No spectacle.",
    "Only the ritual.",
    "Silently Violent."
  ],
  units: {
    1: {
      code: "UNIT_01 : HYBRID_SHORT",
      function: "FUNCTION : STRENGTH + ENDURANCE",
      status: "STATUS : SAMPLING",
      cta: "EXECUTE DETAILS"
    },
    2: {
      code: "UNIT_02 : PERFORMANCE_TEE",
      function: "FUNCTION : BREATH + MOTION",
      status: "STATUS : SAMPLING",
      cta: "EXECUTE DETAILS"
    }
  },
  footer: {
    title: "0/9 SYSTEM  —  ZERO9.CO",
    copyright: "© ZERO9 — ALL RIGHTS RESERVED"
  }
};
