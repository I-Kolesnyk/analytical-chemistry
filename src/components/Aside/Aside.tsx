import Image from "next/image";
import { useState } from "react";

import NavLink from "../NavLink/NavLink";
import CloseButton from "../CloseButton/CloseButton";
import OpenButton from "../OpenButton/OpenButton";
import ElementsList from "../ElementsList/ElementsList";

import { firstGroupList, firstGroupPath } from "@/data/firstGroupList";

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
        <p className="group__text">Катіони</p>
        <ul className="flex flex-col gap-[20px] ml-[10px]">
          <li className="group__item">
            <NavLink path={"/cations/first-group"}>
              <p className="group__link">Перша група</p>
            </NavLink>
            {isFirstGroupCationsOpen ? (
              <CloseButton onClick={() => setIsFirstGroupCationsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsFirstGroupCationsOpen(true)} />
            )}
            {isFirstGroupCationsOpen && (
              <ElementsList elements={firstGroupList} paths={firstGroupPath} />
            )}
          </li>
          <li className="group__item">
            <NavLink path={"/cations/second-group"}>
              <p className="group__link">Друга група</p>
            </NavLink>
            {isSecondGroupCationsOpen ? (
              <CloseButton onClick={() => setIsSecondGroupCationsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsSecondGroupCationsOpen(true)} />
            )}
          </li>
          <li className="group__item">
            <NavLink path={"/cations/third-group"}>
              <p className="group__link">Третя група</p>
            </NavLink>
            {isThirdGroupCationsOpen ? (
              <CloseButton onClick={() => setIsThirdGroupCationsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsThirdGroupCationsOpen(true)} />
            )}
          </li>
          <li className="group__item">
            <NavLink path={"/cations/forth-group"}>
              <p className="group__link">Четверта група</p>
            </NavLink>
            {isForthGroupCationsOpen ? (
              <CloseButton onClick={() => setIsForthGroupCationsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsForthGroupCationsOpen(true)} />
            )}
          </li>
          <li className="group__item">
            <NavLink path={"/cations/fifth-group"}>
              <p className="group__link">П&#39;ята група</p>
            </NavLink>
            {isFifthGroupCationsOpen ? (
              <CloseButton onClick={() => setIsFifthGroupCationsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsFifthGroupCationsOpen(true)} />
            )}
          </li>
          <li className="group__item">
            <NavLink path={"/cations/sixth-group"}>
              <p className="group__link">Шоста група</p>
            </NavLink>
            {isSixthGroupCationsOpen ? (
              <CloseButton onClick={() => setIsSixthGroupCationsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsSixthGroupCationsOpen(true)} />
            )}
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[23px]  mx-auto">
        <p className="group__text">Аніони</p>
        <ul className="flex flex-col gap-[20px] ml-[10px]">
          <li className="group__item">
            <NavLink path={"/anions/first-group"}>
              <p className="group__link">Перша група</p>
            </NavLink>
            {isFirstGroupAnionsOpen ? (
              <CloseButton onClick={() => setIsFirstGroupAnionsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsFirstGroupAnionsOpen(true)} />
            )}
          </li>
          <li className="group__item">
            <NavLink path={"/anions/second-group"}>
              <p className="group__link">Друга група</p>
            </NavLink>
            {isSecondGroupAnionsOpen ? (
              <CloseButton onClick={() => setIsSecondGroupAnionsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsSecondGroupAnionsOpen(true)} />
            )}
          </li>
          <li className="group__item">
            <NavLink path={"/anions/third-group"}>
              <p className="group__link">Третя група</p>
            </NavLink>
            {isThirdGroupAnionsOpen ? (
              <CloseButton onClick={() => setIsThirdGroupAnionsOpen(false)} />
            ) : (
              <OpenButton onClick={() => setIsThirdGroupAnionsOpen(true)} />
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
