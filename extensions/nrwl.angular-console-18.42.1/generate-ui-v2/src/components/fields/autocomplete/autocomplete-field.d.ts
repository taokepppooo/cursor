import { LitElement, TemplateResult } from 'lit';
declare const AutocompleteField_base: {
    new (...args: any[]): {
        render(): TemplateResult<1>;
        option: import("@nx-console/shared-schema").Option;
        renderField(): TemplateResult;
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
} & (new (...args: any[]) => import("../mixins/field-mixin").FieldInterface & import("../../../contexts/editor-context").EditorContextInterface & import("../../field-value-consumer-mixin").FieldValueConsumerInterface) & typeof LitElement;
export declare class AutocompleteField extends AutocompleteField_base {
    renderField(): TemplateResult;
    private renderVSCode;
    private renderIntellij;
    protected updated(): void;
    private handleChange;
    setFieldValue(value: string | boolean | number | string[] | undefined): void;
}
export {};
//# sourceMappingURL=autocomplete-field.d.ts.map