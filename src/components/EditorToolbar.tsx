import React from "react";
import {
  ListOrderedIcon,
  ListUnorderedIcon,
  TasklistIcon,
} from "@primer/octicons-react";

import { toggleList } from "plugins/list/transforms";
import { useSlateStatic } from "slate-react";
import { ListTypes } from "plugins/list/types";
import { toggleElement } from "transforms";
import { ParagraphType } from "plugins/paragraph/types";
import {
  Heading1Type,
  Heading2Type,
  Heading3Type,
} from "plugins/heading/types";

const EditorToolbar = () => {
  const editor = useSlateStatic();

  return (
    <div>
      <button
        onClick={() => toggleElement(editor, ParagraphType)}
        className="toolbar-button"
      >
        P
      </button>

      <button
        onClick={() => toggleElement(editor, Heading1Type)}
        className="toolbar-button"
      >
        H1
      </button>

      <button
        onClick={() => toggleElement(editor, Heading2Type)}
        className="toolbar-button"
      >
        H2
      </button>

      <button
        onClick={() => toggleElement(editor, Heading3Type)}
        className="toolbar-button"
      >
        H3
      </button>

      <button
        onClick={() => toggleList(editor, { listType: ListTypes.Bulleted })}
        className="toolbar-button"
      >
        <ListUnorderedIcon />
      </button>

      <button
        onClick={() => toggleList(editor, { listType: ListTypes.Numbered })}
        className="toolbar-button"
      >
        <ListOrderedIcon />
      </button>

      <button
        onClick={() => toggleList(editor, { listType: ListTypes.TodoList })}
        className="toolbar-button"
      >
        <TasklistIcon />
      </button>
    </div>
  );
};

export default EditorToolbar;
