import { fork, allSettled } from "effector";
import {
  analyticsDomain,
  sendDataToAnalytics,
  initializeAnalyticsFx,
  sendEventFx,
} from "./analytics";

describe("analytics", () => {
  test("should send events instantly if analytics already initialized", async () => {
    const sendEventMock = jest.fn();

    const TEST_EVENT = { name: "test_event_1", payload: {} };

    const scope = fork(analyticsDomain, {
      handlers: new Map<any, any>([
        [initializeAnalyticsFx, jest.fn()],
        [sendEventFx, sendEventMock],
      ]),
    });

    await allSettled(initializeAnalyticsFx, { scope });
    await allSettled(sendDataToAnalytics, {
      scope,
      params: TEST_EVENT,
    });

    expect(sendEventMock).toHaveBeenCalledTimes(1);
    expect(sendEventMock).toHaveBeenCalledWith(TEST_EVENT);
  });

  test("should send events only after initialization", async () => {
    const sendEventMock = jest.fn();

    const TEST_EVENT = { name: "test_event_1", payload: {} };

    const scope = fork(analyticsDomain, {
      handlers: new Map<any, any>([
        [initializeAnalyticsFx, jest.fn()],
        [sendEventFx, sendEventMock],
      ]),
    });

    await allSettled(sendDataToAnalytics, {
      scope,
      params: TEST_EVENT,
    });

    expect(sendEventMock).not.toHaveBeenCalled();

    await allSettled(initializeAnalyticsFx, { scope });

    expect(sendEventMock).toHaveBeenCalledTimes(1);
    expect(sendEventMock).toHaveBeenCalledWith(TEST_EVENT);
  });

  test("Initialization event must occur only one time", async () => {
    const sendEventMock = jest.fn();

    const TEST_EVENT = { name: "test_event_1", payload: {} };

    const scope = fork(analyticsDomain, {
      handlers: new Map<any, any>([
        [initializeAnalyticsFx, jest.fn()],
        [sendEventFx, sendEventMock],
      ]),
    });

    await allSettled(sendDataToAnalytics, {
      scope,
      params: TEST_EVENT,
    });

    expect(sendEventMock).not.toHaveBeenCalled();

    await allSettled(initializeAnalyticsFx, { scope });

    expect(sendEventMock).toHaveBeenCalledTimes(1);
    expect(sendEventMock).toHaveBeenCalledWith(TEST_EVENT);

    await allSettled(initializeAnalyticsFx, { scope });

    expect(sendEventMock).toHaveBeenCalledTimes(1);
    expect(sendEventMock).toHaveBeenCalledWith(TEST_EVENT);
  });
});
