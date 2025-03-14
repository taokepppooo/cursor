import { FormValues } from '@nx-console/shared-generate-ui-types';
import { Root } from './main';
export declare const formValuesServiceContext: {
    __context__: FormValuesService;
};
export declare class FormValuesService {
    private cwdValue;
    private formValues;
    private validationResults;
    private icc;
    private submittedContextProvider;
    constructor(rootElement: Root);
    getFormValues(): FormValues;
    private handleOptionChange;
    private validate;
    runGenerator(dryRun?: boolean): void;
    private debouncedRunGenerator;
    copyCommandToClipboard(): void;
    private getSerializedFormValues;
    /** listeners **/
    private validationListeners;
    private defaultValueListeners;
    private touchedListeners;
    private formValueListeners;
    registerValidationListener(key: string, listener: (value: string | boolean | undefined) => void): void;
    registerDefaultValueListener(key: string, listener: (isDefault: boolean) => void): void;
    registerTouchedListener(key: string, listener: (isTouched: boolean) => void): void;
    registerFormValueListener(listener: (formValues: FormValues) => void): void;
}
//# sourceMappingURL=form-values.service.d.ts.map