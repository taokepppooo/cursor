import { Option } from '@nx-console/shared-schema';
import { LitElement, TemplateResult } from 'lit';
declare const FieldList_base: (new (...args: any[]) => import("../contexts/generator-context-context").GeneratorContextContextInterface) & (new (...args: any[]) => import("../contexts/editor-context").EditorContextInterface) & typeof LitElement;
export declare class FieldList extends FieldList_base {
    options: Option[];
    searchValue: string | undefined;
    private showMore;
    private toggleShowMore;
    protected render(): TemplateResult<1>;
    private renderOptionNav;
    private renderOptionsWithDivider;
    protected firstUpdated(): void;
    private handleTreeClickEvent;
    private clearSearch;
    protected createRenderRoot(): Element | ShadowRoot;
}
export {};
//# sourceMappingURL=field-list.d.ts.map