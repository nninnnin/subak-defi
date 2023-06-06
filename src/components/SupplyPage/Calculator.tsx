import React, { useRef } from "react";
import { css } from "@emotion/css";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

import Container from "@/components/common/CalculatorContainer";

const Calculator = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <Container>
      <div
        className={css`
          border-right: 1px solid gainsboro;
          flex: 1;
          min-height: 200px;
        `}
        ref={(ref) => (containerRef.current = ref)}
      >
        <NextReactP5Wrapper
          sketch={(p5) => {
            const { offsetWidth, offsetHeight } = containerRef.current!;

            p5.setup = () => {
              p5.createCanvas(offsetWidth, offsetHeight, p5.WEBGL);
            };

            function drawRect(x = 0, y = 0) {
              p5.push();
              p5.fill(255, 158, 158);
              p5.noStroke();
              p5.beginShape();
              p5.vertex(x + 0, y + 35); // 위
              p5.vertex(x + 35, y + 0); // 오른쪽
              p5.vertex(x + 0, y + -35); // 아래
              p5.vertex(x + -35, y + 0); // 왼쪽
              p5.endShape();
              p5.pop();
            }

            p5.draw = () => {
              p5.rectMode(p5.CORNERS);
              p5.background(210, 210, 310);
              p5.normalMaterial();

              drawRect(-50);
              drawRect(50, 0);
            };
          }}
        />
      </div>
      <div
        className={css`
          flex: 1;
        `}
      >
        Right
      </div>
    </Container>
  );
};

export default Calculator;
