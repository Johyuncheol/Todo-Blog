import React from "react";
import ModalFrame from "@/components/common/modal";
import ReduxProvider from "@/redux/provider/const";
import AddForm from "@/components/common/form/AddForm";
const AddModal = () => {
  return (
    <ReduxProvider>
      <ModalFrame type={"add"}>
        <AddForm />
      </ModalFrame>
    </ReduxProvider>
  );
};

export default AddModal;
