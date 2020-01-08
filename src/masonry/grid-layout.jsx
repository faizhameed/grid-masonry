import GridLayout from "react-grid-layout";
import React from "react";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import "./gridlayout.scss";

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 4, h: 6 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 2, h: 2 },
      { i: "d", x: 6, y: 1, w: 2, h: 4 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1000}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
        <div key="d">D</div>
      </GridLayout>
    );
  }
}

export default MyFirstGrid;
