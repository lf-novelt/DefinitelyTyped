// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: lf-novelt <https://github.com/lf-novelt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_foldgutter

import * as CodeMirror from "codemirror";

declare module "codemirror" {

  // https://github.com/codemirror/CodeMirror/blob/1cb6de23c7e2b965201972ac5c6dcd2317e9eacf/addon/fold/foldcode.js#L80
  interface Editor {
    newFoldFunction(rangeFinder: Function, widget: string | HTMLElement): (cm: CodeMirror.Editor, pos: CodeMirror.Position) => void;
  }

  // https://github.com/codemirror/CodeMirror/blob/1cb6de23c7e2b965201972ac5c6dcd2317e9eacf/addon/fold/foldcode.js#L95-L115
  interface CommandActions {
    toggleFold(cm: CodeMirror.Editor): void;
    fold(cm: CodeMirror.Editor): void;
    unfold(cm: CodeMirror.Editor): void;
    foldAll(cm: CodeMirror.Editor): void;
    unfoldAll(cm: CodeMirror.Editor): void;
  }
}