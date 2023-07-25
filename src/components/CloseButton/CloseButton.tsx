import { FC } from "react";
import Image from "next/image";

const CloseButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <Image
        src={"/assets/icons/chevron-top.svg"}
        alt="closeIcon"
        width={20}
        height={20}
      />
    </button>
  );
};

export default CloseButton;
