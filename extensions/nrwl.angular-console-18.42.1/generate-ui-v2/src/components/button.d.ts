import { LitElement } from 'lit';
declare const Button_base: (new (...args: any[]) => import("../contexts/editor-context").EditorContextInterface) & typeof LitElement;
export declare class Button extends Button_base {
    text: string;
    appearance: 'primary' | 'secondary' | 'icon';
    color: string;
    applyFillColor: boolean;
    render(): import("lit-html").TemplateResult<1>;
    renderVSCode(): import("lit-html").TemplateResult<1>;
    renderIntellij(): import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): Element | ShadowRoot;
}
export {};
//# sourceMappingURL=button.d.ts.map