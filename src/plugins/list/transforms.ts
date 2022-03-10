import { Transforms, Editor, Element } from "slate";

import { ListItemType, ListTypes } from "plugins/list/types";
import { isListItemElement } from "plugins/list/utils";
import { isParagraphElement } from "plugins/paragraph/utils";
import { ReactEditor } from "slate-react";

export const moveItemsForward = (editor: any, entry: any, maxDepth: any) => {
  const [node, path] = entry;

  Transforms.setNodes(
    editor,
    { depth: Math.min(maxDepth, node.depth + 1) },
    { at: path }
  );
};

export const moveItemsBack = (editor: any, entry: any) => {
  const [node, path] = entry;

  Transforms.setNodes(
    editor,
    { depth: Math.max(0, node.depth - 1) },
    { at: path }
  );
};

export const checkTodoItem = (
  editor: Editor,
  element: Element,
  checked: boolean
) => {
  const path = ReactEditor.findPath(editor, element);

  Transforms.setNodes(
    editor,
    { checked },
    { match: (node) => node === element, at: path }
  );
};

export const toggleList = (
  editor: Editor,
  { listType }: { listType: ListTypes }
) => {
  Editor.withoutNormalizing(editor, () => {
    const { selection } = editor;

    if (!selection) {
      return;
    }

    Transforms.setNodes(
      editor,
      { type: ListItemType, listType },
      { match: isListItemElement }
    );

    Transforms.setNodes(
      editor,
      { type: ListItemType, depth: 0, listType },
      { match: (node) => isParagraphElement(node) }
    );
  });
};