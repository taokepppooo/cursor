import { LitElement } from 'lit';
declare const SearchBar_base: (new (...args: any[]) => import("../contexts/editor-context").EditorContextInterface) & typeof LitElement;
export declare class SearchBar extends SearchBar_base {
    render(): import("lit-html").TemplateResult<1>;
    clearSearch(): void;
    getKeyboardShortcutSymbol(): "⌘" | "Ctrl ";
    protected createRenderRoot(): Element | ShadowRoot;
    private handleInput;
}
export {};
//# sourceMappingURL=search-bar.d.ts.map