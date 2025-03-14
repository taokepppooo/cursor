import { FormValues, GenerateUiConfiguration, GenerateUiOutputMessage, GeneratorSchema, ValidationResults } from '@nx-console/shared-generate-ui-types';
import { ReactiveController, ReactiveElement } from 'lit';
export declare class IdeCommunicationController implements ReactiveController {
    private host;
    editor: 'vscode' | 'intellij';
    generatorSchema: GeneratorSchema | undefined;
    configuration: GenerateUiConfiguration | undefined;
    banner: {
        message: string;
        type: 'info' | 'warning' | 'error';
    } | undefined;
    private postToIde;
    private generatorContextContextProvider;
    constructor(host: ReactiveElement);
    hostConnected(): void;
    postMessageToIde(message: GenerateUiOutputMessage): void;
    private pendingPluginValidationQueue;
    getValidationResults(formValues: FormValues, schema: GeneratorSchema): Promise<ValidationResults>;
    private setupVscodeCommunication;
    private setupIntellijCommunication;
    private handleInputMessage;
    private setIntellijStyles;
}
//# sourceMappingURL=ide-communication.controller.d.ts.map