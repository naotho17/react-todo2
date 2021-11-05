import React from "react";

export const CompleteArea = (props) => {
  const { completeTodos, onClickReturn, onClickDone } = props;
  return (
    <div className="complete-area">
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-wrapper">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
              <button onClick={() => onClickDone(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
