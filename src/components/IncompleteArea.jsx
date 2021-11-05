import React from "react";

export const IncompleteArea = (props) => {
  const { incompleteTodos, onClickComplete, onclickDelete } = props;
  return (
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
  );
};
