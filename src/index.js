import React, { useState } from "react";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import ReactDOM from "react-dom";
import initialData from "./initalData";
import Column from "./Column";

const App = () => {
  const [data, setData] = useState(initialData);
  return (
    <DragDropContext onDragEnd={(result) => console.log(result)}>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.tasks.map((taskId) => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
