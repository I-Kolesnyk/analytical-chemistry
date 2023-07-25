import { FC } from "react";
import Image from "next/image";

const OpenButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <Image
        src={"/assets/icons/chevron-bottom.svg"}
        alt="openIcon"
        width={20}
        height={20}
      />
    </button>
  );
};

export default OpenButton;
