import GroupHeader from "@/components/Header/GroupHeader";

export default function FirstGroupCationsReagent() {
  return (
    <>
      <GroupHeader
        path1="/cations/first-group"
        path2="/cations/first-group/reagent"
        path3="/cations/first-group/analysis"
      />
      <h1>Груповий реагент</h1>
      <p>
        Перша група не має групового реагенту, за допомогою якого можна було б
        перевести всі катіони в осад, оскільки майже всі сполуки з даними йонами
        розчинні у воді.
      </p>
    </>
  );
}
