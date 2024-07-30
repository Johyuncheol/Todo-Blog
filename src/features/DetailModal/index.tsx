import React from "react";
import ReduxProvider from "@/redux/provider/const";
import ModalFrame from "@/components/common/modal";
import DetailCard from "@/components/common/card/DetailCard";

const DetailModal = () => {
  return (
    <ReduxProvider>
      <ModalFrame type={"detail"}>
        <DetailCard />
      </ModalFrame>
    </ReduxProvider>
  );
};

export default DetailModal;
