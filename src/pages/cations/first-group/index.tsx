import { FC } from "react";

import PageHead from "@/components/Head/Head";
import Aside from "@/components/Aside/Aside";
import GroupHeader from "@/components/Header/GroupHeader";
import MainTitle from "@/components/MainTitle/MainTitle";
import Element from "@/components/Element/Element";

const FirstGroupCationsMain: FC = () => {
  return (
    <>
      <PageHead title="First analytical group of cations" />

      <Aside />
      <main className="float-right w-4/5 h-screen bg-emerald-100">
        <div className="flex flex-col">
          <GroupHeader
            path1="/cations/first-group"
            path2="/cations/first-group/reagent"
            path3="/cations/first-group/analysis"
          />
          <section className="flex grow-1 p-14">
            <div className="flex flex-col gap-7">
              <MainTitle text="Загальна характеристика катіонів І групи" />
              <p className="grow-1 font-sans text-base font-semibold text-zinc-700 text-justify">
                До катіонів першої аналітичної групи належать катіони{" "}
                <Element>
                  Na
                  <sup>+</sup>
                </Element>
                ,&#160;
                <Element>
                  К<sup>+</sup>
                </Element>
                ,&#160;
                <Element>
                  NH<sub>4</sub>
                  <sup>+</sup>
                </Element>
                . Перша група не має групового реагенту, за допомогою якого
                можна було б перевести всі катіони в осад, оскільки майже всі
                сполуки з даними йонами розчинні у воді. Для цих йонів
                характерні стехіометрична валентність І, ступінь окиснення (+1)
                та заряд йонів (+1).
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default FirstGroupCationsMain;
