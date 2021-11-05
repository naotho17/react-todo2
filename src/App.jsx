import React, { useState } from "react";
import { CompleteArea } from "./components/CompleteArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { InputArea } from "./components/InputArea";
import "./styles.css";

export const App = () => {
  //state
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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
  //削除ボタンの処理（未完了のタスク）
  const onclickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 「spliceメソッド」ででindex番目の要素を1つ削除する↓
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタンの処理
  const onClickComplete = (index) => {
    // ①未完了のタスクから要素を削除するので、以下。(onclickDeleteのとこと同じ処理)
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // ②完了のタスクに追加していく
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // ③更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  //削除ボタンの処理（完了のタスク）
  const onClickDone = (index) => {
    alert("本当に削除しますか？");
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };
  // 戻すボタンの処理
  const onClickReturn = (index) => {
    //①完了したタスクから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    //②未完了のタスクに追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    // ③更新
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  //
  return (
    <>
      <InputArea
        inputText={inputText}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
      />

      <p>・未完了のタスク</p>
      <IncompleteArea
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onclickDelete={onclickDelete}
      />

      <p>・完了したタスク</p>
      <CompleteArea
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
        onClickDone={onClickDone}
      />
    </>
  );
};
