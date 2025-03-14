import { GeneratorContext } from '@nx-console/shared-generate-ui-types';
import { LitElement } from 'lit';
export declare const generatorContextContext: {
    __context__: GeneratorContext;
};
export declare class GeneratorContextContextInterface {
    generatorContext: GeneratorContext | undefined;
}
type Constructor<T> = new (...args: any[]) => T;
export declare const GeneratorContextContext: <T extends Constructor<LitElement>>(superClass: T) => Constructor<GeneratorContextContextInterface> & T;
export {};
//# sourceMappingURL=generator-context-context.d.ts.map