import { LitElement } from 'lit';
declare const ArrayField_base: {
    new (...args: any[]): {
        render(): import("lit-html").TemplateResult<1>;
        option: import("@nx-console/shared-schema").Option;
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
export declare class ArrayField extends ArrayField_base {
    private elements;
    renderField(): import("lit-html").TemplateResult<1>;
    private renderInputField;
    private get inputFieldSelector();
    private handleEnterKeyAdd;
    private addValue;
    private removeValue;
    setFieldValue(value: string | boolean | number | string[] | undefined): void;
}
export {};
//# sourceMappingURL=array-field.d.ts.map