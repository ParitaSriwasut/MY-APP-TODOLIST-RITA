import "./App.scss";
import {
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
  FaHome,
  FaInbox,
} from "react-icons/fa";
import Header from "./component/Header";
import ListItem from "./component/ListItem";

function App() {
  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 1, text: "Today", icon: <FaCalendar />, active: false },
    { id: 1, text: "Next 7 day", icon: <FaCalendarAlt />, active: false },
  ];
  const projectList = [
    { id: 1, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 1, text: "Project-B", icon: <FaInbox />, active: false },
  ];
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <List data={generalLists} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              <Lists data={projectList} />
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;

{
  /* <ul className="list">
  {generalLists.map((obj) => (
    <ListItem
      key={obj.id}
      // text={obj.text}
      // icon={obj.icon}
      // active={obj.active}
      {...obj}
    />
  ))}
</ul> */
}

{
  /* <ul className="list">
{projectList.map((obj) => (
  <ListItem
  key={obj.id}
  // text={obj.text}
  // icon={obj.icon}
  // active={obj.active}
  {...obj}
  />
  ))}
</ul> */
}
