// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: lf-novelt <https://github.com/lf-novelt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_foldgutter

import * as CodeMirror from "codemirror";

declare module "codemirror" {


    /** An extension of the existing CodeMirror typings added by xml-fold.js */
    // https://github.com/codemirror/CodeMirror/blob/1cb6de23c7e2b965201972ac5c6dcd2317e9eacf/addon/fold/xml-fold.js#L151
    function findMatchingTag(cm: CodeMirror.Editor, pos: CodeMirror.Position, range: CodeMirror.Range): void;

    // https://github.com/codemirror/CodeMirror/blob/1cb6de23c7e2b965201972ac5c6dcd2317e9eacf/addon/fold/xml-fold.js#L168
    function findEnclosingTag(cm: CodeMirror.Editor, pos: CodeMirror.Position, range: CodeMirror.Range, tag: string): void;

    // https://github.com/codemirror/CodeMirror/blob/1cb6de23c7e2b965201972ac5c6dcd2317e9eacf/addon/fold/xml-fold.js#L180
    function scanForClosingTag(cm: CodeMirror.Editor, pos: CodeMirror.Position, name: string, end: number): void;


}
