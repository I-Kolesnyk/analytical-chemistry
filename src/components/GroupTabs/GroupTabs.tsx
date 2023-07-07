import { FC, useState } from "react";

const GroupTabs: FC = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex list-none flex-wrap flex-row pt-3 pb-4 "
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-red-600"
                  : "text-red-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Загальна інформація
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg-red-600"
                  : "text-red-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Групові реагенти
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 3
                  ? "text-white bg-red-600"
                  : "text-red-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Завдання
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <p>here will be general information</p>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p>here will be group reagents</p>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <p>here will be tasks</p>
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupTabs;
