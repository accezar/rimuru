import { styled } from "@rimuru/ui";

import { Stage, Layer, Rect, Circle } from "react-konva";

const Canvas = styled("div", {
  background: "gray",
  overflow: "auto",
  width: "calc(100% - 500px)",
  height: "calc(100% - 30px)",
});

export const MainCanvas = () => (
  <Stage width={2000} height={3000}>
    <Layer>
      <Rect x={150} y={70} width={50} height={50} fill="red" stroke="black" />
      <Circle x={200} y={200} stroke="black" radius={50} fill="red" />
    </Layer>
  </Stage>
);

export default MainCanvas;
