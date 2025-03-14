import { LitElement } from 'lit';
declare const CwdBreadcrumb_base: (new (...args: any[]) => import("../contexts/generator-context-context").GeneratorContextContextInterface) & (new (...args: any[]) => import("../contexts/editor-context").EditorContextInterface) & typeof LitElement;
export declare class CwdBreadcrumb extends CwdBreadcrumb_base {
    _path: string;
    isEditable: boolean;
    set path(value: string);
    get path(): string;
    toggleEdit(): void;
    confirmEdit(): void;
    editToSegment(index: number): void;
    resetPath(): void;
    render(): import("lit-html").TemplateResult<1>;
    renderInlineEdit(): import("lit-html").TemplateResult<1>;
    private handleInlineEditKeydown;
    protected updated(_changedProperties: Map<PropertyKey, unknown>): void;
    private dispatchValue;
    protected createRenderRoot(): Element | ShadowRoot;
}
export {};
//# sourceMappingURL=cwd-breadcrumb.d.ts.map