import Aside from "@/components/Aside/Aside";
import GroupHeader from "@/components/Header/GroupHeader";

export default function FirstGroupCationsMain() {
  return (
    <>
      <GroupHeader
        path1="/cations/first-group"
        path2="/cations/first-group/reagent"
        path3="/cations/first-group/analysis"
      />
      <h1>Загальна характеристика катіонів І групи</h1>
      <p>
        До катіонів першої аналітичної групи належать катіони Na+, К+, NH4+.
        Перша група не має групового реагенту, за допомогою якого можна було б
        перевести всі катіони в осад, оскільки майже всі сполуки з даними йонами
        розчинні у воді. Для цих йонів характерні стехіометрична валентність І,
        ступінь окиснення (+1) та заряд йонів (+1).
      </p>
    </>
  );
}
