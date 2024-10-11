import {
  useState,
  useCallback,
  useRef,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { DefaultContainer } from "shared/DefaultContainer";
import { Container, H1, Image, MainImage } from "./styled";
import { FaPlus } from "react-icons/fa6";
import { GetBusiness } from "features/business";

type ImagesProps = {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;
  data: GetBusiness | undefined;
};

const API = import.meta.env.VITE_BASE_URL;

export const Images = ({ images, data, setImages }: ImagesProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const mainImageRef = useRef<HTMLInputElement>(null);
  const imageRefs = useRef<Array<HTMLInputElement | null>>([
    null,
    null,
    null,
    null,
  ]);

  const handleImageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, index: number) => {
      const file = event.target.files ? event.target.files[0] : null;
      if (file) {
        const newImageUrl = URL.createObjectURL(file);
        setImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = file;
          return newImages;
        });
        setImageUrls((prevUrls) => {
          const newUrls = [...prevUrls];
          newUrls[index] = newImageUrl;
          return newUrls;
        });
      }
    },
    [images, setImages]
  );

  const assignRef = (element: HTMLInputElement, index: number) => {
    if (element) {
      imageRefs.current[index] = element;
    }
  };

  const triggerFileInputClick = (index: number) => {
    const element =
      index === 0 ? mainImageRef.current : imageRefs.current[index];
    element?.click();
  };

  useEffect(() => {
    if (data) {
      setImageUrls(data?.images.map((item) => `${API}public/business/${item}`));
    }
  }, [data]);

  return (
    <Container>
      <H1>
        Images
        <span>
          Add up to 5 high resolution images that best reflect your business.
          Images must not exceed 00MB
        </span>
      </H1>
      <DefaultContainer $position="relative">
        <FaPlus
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: "10",
          }}
        />
        <MainImage
          onClick={() => triggerFileInputClick(0)}
          src={imageUrls[0]}
        />
      </DefaultContainer>

      <input
        type="file"
        ref={mainImageRef}
        onChange={(event) => handleImageChange(event, 0)}
        accept="image/*"
        hidden
      />

      <DefaultContainer $gap="22px">
        {[1, 2, 3, 4].map((index) => (
          <>
            <Image
              key={index}
              onClick={() => triggerFileInputClick(index)}
              src={imageUrls[index]}
            />

            <input
              type="file"
              ref={(el) => assignRef(el!, index)}
              onChange={(event) => handleImageChange(event, index)}
              accept="image/*"
              hidden
            />
          </>
        ))}
      </DefaultContainer>
    </Container>
  );
};
