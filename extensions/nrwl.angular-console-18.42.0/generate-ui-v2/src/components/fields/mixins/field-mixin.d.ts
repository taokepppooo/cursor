import { FormValues } from '@nx-console/shared-generate-ui-types';
import { Option } from '@nx-console/shared-schema';
import { LitElement, TemplateResult } from 'lit';
import { EditorContextInterface } from '../../../contexts/editor-context';
import { FieldValueConsumerInterface } from '../../field-value-consumer-mixin';
type Constructor<T> = new (...args: any[]) => T;
export type OptionChangedDetails = {
    name: string;
    value: string | number | boolean | string[] | undefined;
    isDefaultValue: boolean;
};
export declare class FieldInterface {
    option: Option;
    renderField(): TemplateResult;
    validation: boolean | string | undefined;
    touched: boolean;
    getFormValues(): FormValues;
    dispatchValue(value: string | boolean | number | string[] | undefined): void;
    setFieldValue(value: string | boolean | number | string[] | undefined): void;
    fieldId: string;
    ariaAttributes: Record<string, string>;
}
export declare const Field: <T extends Constructor<LitElement>>(superClass: T) => Constructor<FieldInterface & EditorContextInterface & FieldValueConsumerInterface> & T;
export {};
//# sourceMappingURL=field-mixin.d.ts.map