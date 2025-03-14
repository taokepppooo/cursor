import { LitElement } from 'lit';
declare const Banner_base: (new (...args: any[]) => import("../contexts/editor-context").EditorContextInterface) & typeof LitElement;
export declare class Banner extends Banner_base {
    message: string;
    type: 'warning' | 'error';
    private dismissed;
    private dismiss;
    render(): import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): Element | ShadowRoot;
}
export {};
//# sourceMappingURL=banner.d.ts.map