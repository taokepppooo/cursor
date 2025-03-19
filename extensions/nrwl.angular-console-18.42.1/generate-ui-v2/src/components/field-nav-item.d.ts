import { Option } from '@nx-console/shared-schema';
import { LitElement } from 'lit';
declare const FieldNavItem_base: (new (...args: any[]) => import("./field-value-consumer-mixin").FieldValueConsumerInterface) & typeof LitElement;
export declare class FieldNavItem extends FieldNavItem_base {
    option: Option;
    greyedOut: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private handleTreeClickEvent;
    protected createRenderRoot(): Element | ShadowRoot;
}
export {};
//# sourceMappingURL=field-nav-item.d.ts.map