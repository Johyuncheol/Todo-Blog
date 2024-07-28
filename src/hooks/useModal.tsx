import React, { useState } from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const changeModalState = () => {
    setModalOpen(!modalOpen);
  };
  return { modalOpen, changeModalState };
};

export default useModal;
