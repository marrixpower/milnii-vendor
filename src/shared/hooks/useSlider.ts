import { useCallback, useState } from "react";

type UseSliderProps = {
  min: number;
  max: number;
};

export const useSlider = ({ min, max }: UseSliderProps) => {
  const [index, setIndex] = useState<number>(0);

  const handleForwardClick = useCallback(() => {
    let newValue = index + 1;

    if (newValue === max) {
      newValue = min;
    }

    setIndex(newValue);
  }, [index, min, max]);

  const handleBackwardClick = useCallback(() => {
    let newValue = index - 1;

    if (newValue < min) {
      newValue = max - 1;
    }

    setIndex(newValue);
  }, [index, min, max]);

  return { handleForwardClick, handleBackwardClick, index };
};
