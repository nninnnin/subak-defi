import React from "react";
import { css } from "@emotion/css";
import { Token } from "@/models";

const SelectedToken = ({ selectedToken }: { selectedToken: Token | null }) => {
  return (
    <div
      className={css`
        background-color: pink;
      `}
    >
      {selectedToken ? selectedToken.name : "선택해주세요"}
    </div>
  );
};

export default SelectedToken;
