import { LitElement } from 'lit';
export declare const editorContext: {
    __context__: "vscode" | "intellij";
};
export declare class EditorContextInterface {
    editor: 'vscode' | 'intellij';
}
type Constructor<T> = new (...args: any[]) => T;
export declare const EditorContext: <T extends Constructor<LitElement>>(superClass: T) => Constructor<EditorContextInterface> & T;
export {};
//# sourceMappingURL=editor-context.d.ts.map