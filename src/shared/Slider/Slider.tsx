import { useSlider } from "shared/hooks";
import {
  Button,
  Container,
  Dot,
  DotsContainer,
  Image,
  ImageContainer,
  SliderContainer,
} from "./styled";
import { TouchEvent, useState } from "react";

type SliderProps = {
  photos: string[];
};

export const Slider = ({ photos }: SliderProps) => {
  const [startX, setStartX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  const { handleBackwardClick, handleForwardClick, index } = useSlider({
    min: 0,
    max: photos?.length,
  });

  const handleTouchStart = (e: TouchEvent<HTMLImageElement>) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLImageElement>) => {
    if (!isSwiping) return;

    const difference = startX - e.touches[0].clientX;

    if (difference > 25) {
      handleForwardClick();
      setIsSwiping(false);
    } else if (difference < -25) {
      handleBackwardClick();
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setStartX(0);
  };

  return (
    <Container>
      <SliderContainer>
        <Button onClick={handleBackwardClick}>
          <img src="/left-arrow.svg" />
        </Button>

        <ImageContainer>
          {photos.map((item, i) => (
            <Image
              key={item}
              src={item}
              $visible={i === index}
              alt="Slider photo"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          ))}
        </ImageContainer>

        <Button onClick={handleForwardClick}>
          <img src="/right-arrow.svg" />
        </Button>
      </SliderContainer>

      <DotsContainer>
        {photos.map((_, indx) => (
          <Dot $filled={indx === index} />
        ))}
      </DotsContainer>
    </Container>
  );
};
