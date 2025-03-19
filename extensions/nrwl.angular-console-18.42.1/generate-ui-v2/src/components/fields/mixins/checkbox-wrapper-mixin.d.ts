import { FieldInterface } from './field-mixin';
import { FieldValueConsumerInterface } from '../../field-value-consumer-mixin';
import { EditorContextInterface } from '../../../contexts/editor-context';
export declare const CheckboxWrapper: <T extends new (...args: any[]) => FieldInterface & EditorContextInterface & FieldValueConsumerInterface>(base: T) => {
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
} & T;
//# sourceMappingURL=checkbox-wrapper-mixin.d.ts.map