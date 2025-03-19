import { Option } from '@nx-console/shared-schema';
import { LitElement } from 'lit';
declare const MultiselectField_base: {
    new (...args: any[]): {
        render(): import("lit-html").TemplateResult<1>;
        option: Option;
        renderField(): import("lit-html").TemplateResult;
        validation: boolean | string | undefined;
        touched: boolean;
        getFormValues: (() => import("@nx-console/shared-generate-ui-types").FormValues) & (() => import("@nx-console/shared-generate-ui-types").FormValues);
        dispatchValue(value: string | boolean | number | string[] | undefined): void;
        setFieldValue(value: string | boolean | number | string[] | undefined): void;
        fieldId: string;
        ariaAttributes: Record<string, string>;
        editor: "vscode" | "intellij";
        isDefaultValue: boolean;
        submitted: boolean;
        generatorContext: import("@nx-console/shared-generate-ui-types").GeneratorContext | undefined;
        shouldRenderChanged(): boolean;
        shouldRenderError(): boolean;
    };
} & (new (...args: any[]) => import("./mixins/field-mixin").FieldInterface & import("../../contexts/editor-context").EditorContextInterface & import("../field-value-consumer-mixin").FieldValueConsumerInterface) & typeof LitElement;
export declare class MultiselectField extends MultiselectField_base {
    private selectedElements;
    renderField(): import("lit-html").TemplateResult<1>;
    private renderSelectField;
    private removeValue;
    private addValue;
    setFieldValue(value: string | number | boolean | string[] | undefined): void;
    private extractItemOptions;
}
export {};
//# sourceMappingURL=multiselect-field.d.ts.map