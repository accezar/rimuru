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
  Shell,
  ShellHeader,
  ShellContent,
} from "../components";

const Flex = styled("div", {
  display: "flex",
});

export default function Web() {
  globalStyles();

  return (
    <Shell>
      <ShellHeader>
        <MainMenu>
          <a href="/#">Projeto</a>
          <a href="/#">Editar</a>
          <a href="/#">Visualizar</a>
          <a href="/#">Ajuda</a>
        </MainMenu>
        <ToolBar>Toolbar</ToolBar>
      </ShellHeader>

      <ShellContent>
        <Workspace>
          <WorkspacePanelWrapper>
            <PagesPanel />
            <LayersPanel />
          </WorkspacePanelWrapper>
          <WorkspaceCanvasWrapper>
            <CanvasTabBar />
            {/* <MainCanvasNoSSR /> */}
          </WorkspaceCanvasWrapper>
          <WorkspacePanelWrapper>
            <LayerEditorPanel />
          </WorkspacePanelWrapper>
        </Workspace>
      </ShellContent>
    </Shell>
  );
}
