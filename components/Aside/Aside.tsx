import NavLink from "../NavLink/NavLink";

function Aside() {
  return (
    <aside className="float-left w-1/5">
      <ul>
        <li>
          <NavLink path={"/cations"}>
            <p>Катіони</p>
          </NavLink>
          <ul>
            <li>
              <NavLink path={"/cations/first-group"}>
                <p>Перша група</p>
              </NavLink>
              <ul>
                <li>Na+</li>
                <li>K+</li>
                <li>NH4+</li>
              </ul>
            </li>
            <li>
              <NavLink path={"/cations/second-group"}>
                <p>Друга група</p>
              </NavLink>
            </li>
            <li>
              <NavLink path={"/cations/third-group"}>
                <p>Третя група</p>
              </NavLink>
            </li>
            <li>
              <NavLink path={"/cations/forth-group"}>
                <p>Четверта група</p>
              </NavLink>
            </li>
            <li>П&#39;ята група</li>
            <li>Шоста група</li>
          </ul>
        </li>
        <li>Аніони</li>
      </ul>
    </aside>
  );
}

export default Aside;
