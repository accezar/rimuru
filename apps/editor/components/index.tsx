import dynamic from "next/dynamic";

export const MainCanvasNoSSR = dynamic(() => import("./MainCanvas"), {
  ssr: false,
});

export * from "./CanvasTabBar";
export * from "./LayerEditorPanel";
export * from "./LayersPanel";
export * from "./MainMenu";
export * from "./PagesPanel";
export * from "./ToolBar";
export * from "./Workspace";
