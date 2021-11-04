import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //state
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["未完了のTodo"]);
  const [completeTodos, setCompleteTodos] = useState(["完了したTodo"]);

  // inputエリアのonChange
  const onChangeText = (e) => {
    setInputText(() => e.target.value);
  };
  //追加ボタンの処理
  const onClickAdd = () => {
    //もしinputTextが空文字だったら処理をリターン
    if (inputText === "") return;
    const newTodos = [...incompleteTodos, inputText];
    setIncompleteTodos(newTodos);
    // inputエリアに入力、追加後またボックスを空にするため
    setInputText("");
  };
  //削除ボタンの処理
  const onclickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 「spliceメソッド」ででindex番目の要素を1つ削除する↓
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタンの処理
  const onClickComplete = (index) => {
    // 完了ボタンを押すと未完了のタスクの欄からは要素を削除するので、以下。(onclickDeleteのとこと同じ処理)
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // 完了のタスクの欄の後ろに追加されていくTodoたち
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
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
          {/* indexを引数として渡しておくことで、何番目の配列かが判定出来るようになる */}
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-wrapper">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 関数に引数を渡すときはアロー関数の形にして、新しく関数を生成してあげるイメージ */}
                <button onClick={() => onclickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      {/* complete-area */}
      <p>・完了したタスク</p>
      <div className="complete-area">
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-wrapper">
                <li>{todo}</li>
                <button>戻す</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
