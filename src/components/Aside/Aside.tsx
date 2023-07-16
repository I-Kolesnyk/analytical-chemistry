import Image from "next/image";
import { useState } from "react";

import NavLink from "../NavLink/NavLink";

function Aside() {
  const [isFirstGroupCationsOpen, setIsFirstGroupCationsOpen] = useState(false);
  const [isSecondGroupCationsOpen, setIsSecondGroupCationsOpen] =
    useState(false);
  const [isThirdGroupCationsOpen, setIsThirdGroupCationsOpen] = useState(false);
  const [isForthGroupCationsOpen, setIsForthGroupCationsOpen] = useState(false);
  const [isFifthGroupCationsOpen, setIsFifthGroupCationsOpen] = useState(false);
  const [isSixthGroupCationsOpen, setIsSixthGroupCationsOpen] = useState(false);
  const [isFirstGroupAnionsOpen, setIsFirstGroupAnionsOpen] = useState(false);
  const [isSecondGroupAnionsOpen, setIsSecondGroupAnionsOpen] = useState(false);
  const [isThirdGroupAnionsOpen, setIsThirdGroupAnionsOpen] = useState(false);

  return (
    <aside className="float-left w-1/5 h-screen pt-4 pl-[30px] pr-[30px] bg-teal-200">
      <div className="relative w-[131px] h-[102px] mx-auto mb-14 overflow-hidden">
        <Image
          src="/assets/logo.png"
          fill
          sizes="(min-width: 320px) 100px, (min-width: 834px) 120px, (min-width: 1280px) 131px"
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center gap-[23px]  mx-auto mb-14">
        <p className="self-start text-teal-50 font-montserrat font-medium text-xl">
          Катіони
        </p>
        <ul className="flex flex-col gap-[20px] ml-[10px]">
          <li>
            <NavLink path={"/cations/first-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                Перша група
              </p>
              {isFirstGroupCationsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsFirstGroupCationsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsFirstGroupCationsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
            {isFirstGroupCationsOpen && (
              <ul className="flex flex-col gap-[16px] mt-[20px] ml-[16px]">
                <li>
                  <NavLink path={"/cations/second-group/sodium"}>
                    <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                      Na<sup>+</sup>
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink path={"/cations/second-group/potassium"}>
                    <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                      K<sup>+</sup>
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink path={"/cations/second-group/potassium"}>
                    <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                      NH<sub>4</sub>
                      <sup>+</sup>
                    </p>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink path={"/cations/second-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                Друга група
              </p>
              {isSecondGroupCationsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsSecondGroupCationsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSecondGroupCationsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink path={"/cations/third-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                Третя група
              </p>
              {isThirdGroupCationsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsThirdGroupCationsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsThirdGroupCationsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink path={"/cations/forth-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                Четверта група
              </p>
              {isForthGroupCationsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsForthGroupCationsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsForthGroupCationsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink path={"/cations/fifth-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                {" "}
                П&#39;ята група
              </p>
              {isFifthGroupCationsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsFifthGroupCationsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsFifthGroupCationsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink path={"/cations/sixth-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                Шоста група
              </p>
              {isSixthGroupCationsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsSixthGroupCationsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSixthGroupCationsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[23px]  mx-auto">
        <p className="self-start text-teal-50 font-montserrat font-medium text-xl">
          Аніони
        </p>
        <ul className="flex flex-col gap-[20px] ml-[10px]">
          <li>
            <NavLink path={"/anions/first-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                Перша група
              </p>
              {isFirstGroupAnionsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsFirstGroupAnionsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsFirstGroupAnionsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink path={"/anions/second-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                Друга група
              </p>
              {isSecondGroupAnionsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsSecondGroupAnionsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSecondGroupAnionsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink path={"/anions/third-group"}>
              <p className="text-teal-50 font-montserrat font-medium text-lg hover:text-lilac-50 focus:text-lilac-50">
                Третя група
              </p>
              {isThirdGroupAnionsOpen ? (
                <button
                  type="button"
                  onClick={() => setIsThirdGroupAnionsOpen(false)}
                >
                  <Image
                    src={"/assets/icons/chevron-top.svg"}
                    alt="closeIcon"
                    width={20}
                    height={20}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsThirdGroupAnionsOpen(true)}
                >
                  <Image
                    src={"/assets/icons/chevron-bottom.svg"}
                    alt="openIcon"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
