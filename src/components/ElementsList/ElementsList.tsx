import { FC } from "react";

import NavLink from "../NavLink/NavLink";

const ElementsList: FC<{ elements: Array<string>; paths: Array<string> }> = ({
  elements,
  paths,
}) => {
  return (
    <ul className="flex flex-col gap-[16px] mt-[20px] ml-[16px]">
      {elements.map((element, index) => (
        <li key={index}>
          <NavLink path={paths[index]}>
            <p
              className="element__item"
              dangerouslySetInnerHTML={{ __html: element }}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ElementsList;
