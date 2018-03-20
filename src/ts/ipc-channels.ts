import { Config } from "./config";

export class IpcChannels {
    public static readonly hideWindow = "hide-window";
    public static readonly execute = "execute";
    public static readonly getSearch = "get-search";
    public static readonly getSearchResponse = "get-search-response";
    public static readonly openFileLocation = "open-file-location";
    public static readonly getSearchIcon = "get-search-icon";
    public static readonly getSearchIconResponse = "get-search-icon-response";
    public static readonly autoComplete = "auto-complete";
    public static readonly autoCompleteResponse = "auto-complete-response";
    public static readonly commandLineExecution = "command-line-execution";
    public static readonly commandLineOutput = "command-line-output";
    public static readonly ezrReload = `${Config.electronizrCommandPrefix}reload`;
    public static readonly ezrExit = `${Config.electronizrCommandPrefix}exit`;
    public static readonly exitCommandLineTool = "exit-command-line-tool";
}