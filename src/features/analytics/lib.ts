import { AnalyticsEvent } from "./types";

let initialized = false;

export async function initializeAnalytics() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  initialized = true;
}

export function sendEvent({ name, payload }: AnalyticsEvent) {
  if (!initialized) throw new Error("Analytics is not initialized!");

  console.log(
    `Sending event: ${name} with payload "${JSON.stringify(payload)}"`
  );
}
