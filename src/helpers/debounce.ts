type DebouncedFunction<T extends any[]> = (...args: T) => void;

export function debounce<T extends any[]>(func: DebouncedFunction<T>, delay: number) {
  let timeoutId: NodeJS.Timeout | null = null;

  return function (...args: T) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
