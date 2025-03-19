import { LitElement } from 'lit';
declare const Banner_base: (new (...args: any[]) => import("../contexts/editor-context").EditorContextInterface) & typeof LitElement;
export declare class Banner extends Banner_base {
    text: string;
    fieldId: string;
    render(): import("lit-html").TemplateResult<1>;
    private editorSpecificStyles;
    private handleEnterKeyRemove;
    private handleClickRemove;
    protected createRenderRoot(): Element | ShadowRoot;
}
export {};
//# sourceMappingURL=badge.d.ts.map