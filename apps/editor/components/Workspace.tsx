import { styled } from "@rimuru/ui";

export const Workspace = styled("div", {
  flexGrow: 1,
  display: "flex",
  background: "$gray400",
});

export const WorkspacePanelWrapper = styled("div", {
  display: "flex",
  minWidth: 250,
  minHeight: "100%",
  background: "#eee",
  flexDirection: "column",
});

export const WorkspaceCanvasWrapper = styled("div", {
  flexGrow: 1,
  width: "100%",
  minHeight: "100%",
  background: "$gray400",
  flexDirection: "column",
  overflow: "hidden",
});

const WorkspacePanelItemWrapper = styled("div", {
  background: "white",
});

const WorkspacePanelItemHeader = styled("div", {
  overflow: "auto",
  background: "#eee",
  border: "1px solid #ddd",
  minHeight: 25,
});

const WorkspacePanelItemContent = styled("div", {
  overflow: "auto",
  background: "white",
  minHeight: 250,
});

type WorkspacePanelItemProps = {
  title: string;
  children?: React.ReactNode;
};

export const WorkspacePanelItem = ({
  title,
  children,
}: WorkspacePanelItemProps) => (
  <WorkspacePanelItemWrapper>
    <WorkspacePanelItemHeader>{title}</WorkspacePanelItemHeader>
    <WorkspacePanelItemContent>{children}</WorkspacePanelItemContent>
  </WorkspacePanelItemWrapper>
);
