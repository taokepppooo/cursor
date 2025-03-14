import { LitElement } from 'lit';
declare const CheckboxField_base: {
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
export declare class CheckboxField extends CheckboxField_base {
    renderField(): import("lit-html").TemplateResult<1>;
    setFieldValue(value: string | number | boolean | string[] | undefined): void;
    handleChange(e: Event): void;
}
export {};
//# sourceMappingURL=checkbox-field.d.ts.map