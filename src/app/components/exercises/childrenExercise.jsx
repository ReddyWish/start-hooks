import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";

const ListOfComponents = ({ children }) => {
  return (
    <ul>
      {React.Children.map(children, (child, index) => (
        <li>
          {index + 1}. {child}
        </li>
      ))}
    </ul>
  );
};
ListOfComponents.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них
        добавить порядковый номер, относительно того, как они
        располагаются на странице. Вы можете использовать как{" "}
        <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>
      <Divider/>
      <h2>solution</h2>
      <ListOfComponents>
        <Component/>
        <Component/>
        <Component/>
      </ListOfComponents>
    </CollapseWrapper>
  );
};

const Component = () => {
  return <div>Компонент списка</div>;
};

export default ChildrenExercise;
