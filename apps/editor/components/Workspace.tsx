import { styled } from "@rimuru/ui";

export const Workspace = styled("div", {
  flexGrow: 1,
  display: "flex",
  height: "100%",
  background: "$gray400",
});

export const WorkspacePanelWrapper = styled("div", {
  display: "flex",
  width: 250,
  background: "#eee",
  flexDirection: "column",
});

export const WorkspaceCanvasWrapper = styled("div", {
  flexGrow: 1,
  display: "flex",
  background: "$gray400",
  flexDirection: "column",
  overflow: "hidden",
});

const WorkspacePanelItemWrapper = styled("div", {
  flexGrow: 1,
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

export const Shell = styled("div", {
  background: "aqua",
  height: "100%",
  flexDirection: "column",
});

export const ShellHeader = styled("div", {
  background: "white",
  flexDirection: "column",
  height: 82,
});

export const ShellContent = styled("div", {
  background: "white",
  height: "calc(100% - 82px)",
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
