import { exec } from "child_process";
import { Config } from "../config";
import { Executor } from "./executor";

export class WindowsSettingsExecutor implements Executor {
    public execute(executionArgument: string): void {
        const command = this.replacePrefix(executionArgument);

        exec(`start ${command}`, (err, stdout, sterr): void => {
            if (err) {
                throw err;
            }
        });
    }

    public hideAfterExecution(): boolean {
        return true;
    }

    public resetUserInputAfterExecution(): boolean {
        return true;
    }

    public logExecute(): boolean {
        return true;
    }

    private replacePrefix(executionArgument: string): string {
        return executionArgument.replace(Config.windowsSettingsPrefix, "");
    }
}
