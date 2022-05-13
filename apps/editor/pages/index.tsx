import { Button, styled, globalStyles } from "@rimuru/ui";

import {
  CanvasTabBar,
  LayerEditorPanel,
  LayersPanel,
  MainMenu,
  MainCanvasNoSSR,
  PagesPanel,
  Workspace,
  WorkspaceCanvasWrapper,
  WorkspacePanelWrapper,
  ToolBar,
} from "../components";

const Flex = styled("div", {
  display: "flex",
});

export default function Web() {
  globalStyles();

  return (
    <Flex css={{ flexDirection: "column" }}>
      <Flex css={{ flexDirection: "column" }}>
        <MainMenu>
          <a href="/#">Projeto</a>
          <a href="/#">Editar</a>
          <a href="/#">Visualizar</a>
          <a href="/#">Ajuda</a>
        </MainMenu>
        <ToolBar>Toolbar</ToolBar>
      </Flex>

      <Workspace>
        <WorkspacePanelWrapper>
          <PagesPanel />
          <LayersPanel />
        </WorkspacePanelWrapper>
        <WorkspaceCanvasWrapper>
          <CanvasTabBar />
          <MainCanvasNoSSR />
        </WorkspaceCanvasWrapper>
        <WorkspacePanelWrapper>
          <LayerEditorPanel>Layer Editor</LayerEditorPanel>
        </WorkspacePanelWrapper>
      </Workspace>
    </Flex>
  );
}
