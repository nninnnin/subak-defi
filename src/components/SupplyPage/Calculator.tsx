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
        `}
        ref={(ref) => (containerRef.current = ref)}
      >
        <NextReactP5Wrapper
          sketch={(p5) => {
            p5.setup = () =>
              p5.createCanvas(
                containerRef.current?.offsetWidth,
                containerRef.current?.offsetHeight,
                p5.WEBGL
              );

            p5.draw = () => {
              p5.background(255, 204, 0);
              p5.normalMaterial();

              p5.push();
              p5.rotateZ(p5.frameCount * 0.01);
              p5.rotateX(p5.frameCount * 0.01);
              p5.rotateY(p5.frameCount * 0.01);
              p5.plane(50);
              p5.pop();

              p5.push();
              p5.rotateZ(p5.frameCount * 0.02);
              p5.rotateX(p5.frameCount * 0.03);
              p5.rotateY(p5.frameCount * 0.04);
              p5.quad(38, 31, 86, 20, 69, 63, 30, 76);
              p5.pop();
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
