export const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

function serializeNumberValues<T>(data: T): T {
  if (typeof data === "number") {
    return data.toString() as unknown as T;
  }

  if (Array.isArray(data)) {
    return data.map((item) => serializeNumberValues(item)) as unknown as T;
  }

  if (typeof data === "object" && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        serializeNumberValues(value),
      ])
    ) as T;
  }

  return data;
}
