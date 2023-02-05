import "./index.css";
export default function NavBar() {
  return (
    <>
      <nav className="nav border-gray-100 border-2 rounded-3xl p-1">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Fcc-Projects</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="active ">
                <a href="./quote">Quote Generator</a>
              </li>
              <li>
                <a href="./markDown">MarkDown Previewer</a>
              </li>
              <li>
                <a href="./calculator">JS Calculator</a>
              </li>
              <li>
                <a href="./drum">Drum Machine</a>
              </li>
              <li>
                <a href="./Clock">25 + 5 Clock</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
