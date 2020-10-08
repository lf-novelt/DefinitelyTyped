// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: lf-novelt <https://github.com/lf-novelt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_foldgutter

import * as CodeMirror from "codemirror";

declare module "codemirror" {

  interface Editor {
    // Events https://github.com/codemirror/CodeMirror/blob/1cb6de23c7e2b965201972ac5c6dcd2317e9eacf/addon/fold/foldgutter.js#L26-L33
    on(eventName: 'gutterClick', handler: (instance: CodeMirror.Editor, line: number, gutter: string) => void): void;
    off(eventName: 'gutterClick', handler: (instance: CodeMirror.Editor, line: number, gutter: string) => void): void;
    on(eventName: 'changes', handler: (instance: CodeMirror.Editor) => void): void;
    off(eventName: 'changes', handler: (instance: CodeMirror.Editor) => void): void;
    on(eventName: 'viewportChange', handler: (instance: CodeMirror.Editor) => void): void;
    off(eventName: 'viewportChange', handler: (instance: CodeMirror.Editor) => void): void;
    on(eventName: 'fold', handler: (instance: CodeMirror.Editor, from: CodeMirror.Position) => void): void;
    off(eventName: 'fold', handler: (instance: CodeMirror.Editor, from: CodeMirror.Position) => void): void;
    on(eventName: 'unfold', handler: (instance: CodeMirror.Editor) => void): void;
    off(eventName: 'unfold', handler: (instance: CodeMirror.Editor) => void): void;
    on(eventName: 'swapDoc', handler: (instance: CodeMirror.Editor) => void): void;
    off(eventName: 'swapDoc', handler: (instance: CodeMirror.Editor) => void): void;
  }

  // defineOption https://github.com/codemirror/CodeMirror/blob/1cb6de23c7e2b965201972ac5c6dcd2317e9eacf/addon/fold/foldgutter.js#L14
  interface EditorConfiguration {
    foldGutter?: boolean;
  }
}