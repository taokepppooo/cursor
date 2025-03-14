import { LitElement } from 'lit';
import { IdeCommunicationController } from './ide-communication.controller';
import './components/index';
export declare class Root extends LitElement {
    icc: IdeCommunicationController;
    private formValuesService;
    constructor();
    private searchValue;
    private rootStyles;
    render(): import("lit-html").TemplateResult<1>;
    private renderHeader;
    private handleSearchValueChange;
    private clearSearch;
    private handleGlobalKeyboardShortcuts;
    openNxDev(link: string): void;
    protected createRenderRoot(): this;
}
//# sourceMappingURL=main.d.ts.map