import { LitElement } from 'lit';
declare const Icon_base: (new (...args: any[]) => import("../contexts/editor-context").EditorContextInterface) & typeof LitElement;
export declare class Icon extends Icon_base {
    icon: string;
    color: string;
    applyFillColor: boolean;
    render(): import("lit-html").TemplateResult<1>;
    applyColorToSVG(): Promise<void>;
    protected createRenderRoot(): Element | ShadowRoot;
}
export {};
//# sourceMappingURL=icon.d.ts.map