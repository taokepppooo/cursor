import { LitElement } from 'lit';
import { Option } from '@nx-console/shared-schema';
import { FormValues, GeneratorContext } from '@nx-console/shared-generate-ui-types';
type Constructor<T> = new (...args: any[]) => T;
export declare class FieldValueConsumerInterface {
    option: Option;
    validation: boolean | string | undefined;
    touched: boolean;
    isDefaultValue: boolean;
    submitted: boolean;
    generatorContext: GeneratorContext | undefined;
    shouldRenderChanged(): boolean;
    shouldRenderError(): boolean;
    getFormValues(): FormValues;
}
export declare const FieldValueConsumer: <T extends Constructor<LitElement>>(superClass: T) => Constructor<FieldValueConsumerInterface> & T;
export {};
//# sourceMappingURL=field-value-consumer-mixin.d.ts.map