import { GeneratorSchema } from '@nx-console/shared-generate-ui-types';
import { Option } from '@nx-console/shared-schema';
export declare function getGeneratorIdentifier(generatorSchema: GeneratorSchema | undefined): string;
export declare function getGeneratorNameTitleCase(generatorSchema: GeneratorSchema | undefined): string;
export declare function extractDefaultValue(option?: Option): string | boolean | number | string[] | undefined;
export declare function compareWithDefaultValue(value: string | boolean | number | string[] | undefined, defaultValue: string | boolean | number | string[] | undefined): boolean;
export declare function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void;
export declare function extractItemOptions(option: Option): string[];
//# sourceMappingURL=generator-schema-utils.d.ts.map