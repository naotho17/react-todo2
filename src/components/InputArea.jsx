import React from "react";

export const InputArea = (props) => {
  const { inputText, onChangeText, onClickAdd } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        value={inputText}
        onChange={onChangeText}
        placeholder="Todoを入力"
      />
      <button onClick={onClickAdd}>追加！</button>
    </div>
  );
};
