import React, { useCallback } from "react";
import { MdModeEdit } from "react-icons/md";

const EditTodo = ({ editContent }) => {
  const [editedOne, setEditedOne] = useState({ content: "", err: "" });

  const onChange = (e) => {
    setEditedOne({ [e.target.key]: e.target.value });
  };

  const onSubmit = useCallback(
    (e) => {
      if (editedOne.content === "") {
        setEditedOne({ err: "고칠게 없는가..." });
      } else {
        editContent(editedOne); // ToDo 컴포넌트에 수정내용 반영
        setEditedOne({ content: "", err: "" }); // 입력폼 초기화
        e.preventDefault(); // submit 이벤트로 인한 새로고침 방지
      }
    },
    [editContent, editedOne]
  );

  return (
    <>
      <form className="edit-todo" onSubmit={onSubmit}>
        <input
          className="editedOne"
          placeholder={todos.content}
          name="content"
          value={editedOne.content}
          onChange={onChange}
        />
      </form>
      <button type="submit">
        <MdModeEdit />
      </button>
      <div>{editedOne.err !== "" ? editedOne.err : null}</div>
    </>
  );
};

export default EditTodo;
