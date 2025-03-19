import { LitElement } from 'lit';
export declare class Popover extends LitElement {
    content: string;
    isPopoverVisible: boolean;
    constructor();
    showTooltip(): void;
    hideTooltip(): void;
    render(): import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): Element | ShadowRoot;
}
//# sourceMappingURL=popover.d.ts.map