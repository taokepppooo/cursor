import { LitElement } from 'lit';
declare const ShowMoreDivider_base: (new (...args: any[]) => import("../contexts/editor-context").EditorContextInterface) & typeof LitElement;
export declare class ShowMoreDivider extends ShowMoreDivider_base {
    showMore: boolean;
    render(): import("lit-html").TemplateResult<1>;
    handleKeyEvent(e: KeyboardEvent): void;
    toggleShowMore(): void;
    protected createRenderRoot(): this;
}
export {};
//# sourceMappingURL=show-more-divider.d.ts.map