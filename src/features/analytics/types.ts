export interface AnalyticsEvent {
  name: string;
  payload: Record<string, string | number>;
}
