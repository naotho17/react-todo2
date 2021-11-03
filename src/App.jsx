import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //state
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["未完了のTodo"]);
  const [completeTodos, setCompleteTodos] = useState(["完了したTodo"]);

  //function
  const onChangeText = (e) => {
    setInputText(() => e.target.value);
  };
  const onClickAdd = () => {
    //もしinputTextが空文字だったら処理をリターン
    if (inputText === "") return;
    const newTodos = [...incompleteTodos, inputText];
    setIncompleteTodos(newTodos);
    // inputエリアに入力、追加後またボックスを空にするため
    setInputText("");
  };

  //
  return (
    <>
      {/* input-area */}
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          placeholder="Todoを入力"
        />
        <button onClick={onClickAdd}>追加！</button>
      </div>

      {/* incomplete-area */}
      <p>・未完了のタスク</p>
      <div className="incomplete-area">
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-wrapper">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      {/* complete-area */}
      <p>・完了したタスク</p>
      <div className="complete-area">
        <ul>
          <div className="list-wrapper">
            <li>{completeTodos}</li>
            <button>戻す</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
    </>
  );
};
