import React from "react";
import { css } from "@emotion/css";
import { Token } from "@/models";
import useInputValue from "@/hooks/useNumberInput";

const SelectedToken = ({ selectedToken }: { selectedToken: Token | null }) => {
  const [amount, handleChangeAmount, validateNumber] = useInputValue(0);

  const hasSelected = Boolean(selectedToken);

  return (
    <div
      className={css`
        background-color: #efefef;
        padding: 8px;
        border-radius: 10px;
        display: flex;
        align-items: center;
      `}
    >
      <>
        <img
          role="selected-token-logo"
          src={selectedToken?.logoURI ?? ""}
          className={css`
            background-color: ${hasSelected ? "" : "gainsboro"};
            min-width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 6px;
            overflow: hidden;
          `}
        />

        <div
          role="selected-token-input-container"
          className={css`
            background-color: ${hasSelected ? "" : "gainsboro"};
            flex: 1;
            height: 24px;
            display: flex;
            align-items: center;
            padding: 0 5px;
            border-radius: 4px;
          `}
        >
          {hasSelected && (
            <input
              type="text"
              role="selected-token-amount"
              className={css`
                margin-right: 4px;
                width: 100%;
                text-align: center;
              `}
              value={amount}
              onChange={handleChangeAmount}
              onKeyDown={validateNumber}
            />
          )}
          <span role="selected-token-symbol">
            {selectedToken?.symbol ?? ""}
          </span>
        </div>
      </>
    </div>
  );
};

export default SelectedToken;
