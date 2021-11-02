import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //state
  const [text, setText] = useState();

  //function
  const onChange = (e) => {
    setText(() => e.target.value);
  };
  const onClickAdd = () => {
    alert(text);
  };

  //
  return (
    <>
      {/* input-area */}
      <div className="input-area">
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Todoを入力"
        />
        <button onClick={onClickAdd}>追加！</button>
      </div>

      {/* incomplete-area */}
      <p>・未完了のTodo</p>
      <div className="incomplete-area">
        <ul>
          <li>
            ・未完了のTodo
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>

      {/* complete-area */}
      <p>・完了したTodo</p>
      <div className="complete-area">
        <ul>
          <li>
            例：朝ごはんを食べる
            <button>戻す</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
    </>
  );
};
