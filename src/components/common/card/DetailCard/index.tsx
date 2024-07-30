import useModal from "@/hooks/useModal";
import useTodo from "@/hooks/useTodo";
import React from "react";

const DetailCard = () => {
  const { modalState } = useModal();
  const { getDetail } = useTodo();
  const todo = modalState.detail.id ? getDetail(modalState.detail.id) : null;
  return (
    <div>
      <div>제목: {todo?.title}</div>
      <div>카테고리:{todo?.category}</div>
      <div>내용: {todo?.detail}</div>
      <div>시작날짜: {todo?.startDate}</div>
      <div>끝 날짜 : {todo?.endDate}</div>
  
    </div>
  );
};

export default DetailCard;
