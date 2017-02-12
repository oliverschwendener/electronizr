import InstalledPrograms from './Plugins/InstalledPrograms'
import WebUrl from './Plugins/WebUrl'
import WebSearch from './Plugins/WebSearch'
import CustomShortcuts from './Plugins/CustomShortcuts'
import CommandLine from './Plugins/CommandLine'
import EzrCommands from './Plugins/EzrCommands'
import FilePath from './Plugins/FilePath'

export default class PluginManager {
    constructor() {
        this.plugins = [
            new CustomShortcuts(),
            new InstalledPrograms(),
            new WebUrl(),
            new WebSearch(),
            new CommandLine(),
            new EzrCommands(),
            new FilePath
        ]
    }

    isValid(args) {
        for (let plugin of this.plugins)
            if (plugin.isValid(args))
                return true

        return false
    }

    execute(userInput, execArg, callback) {
        for (let plugin of this.plugins)
            if (plugin.isValid(userInput))
                plugin.execute(execArg, callback)
    }

    getSearchResult(args) {
        for (let plugin of this.plugins)
            if (plugin.isValid(args))
                return plugin.getSearchResult(args)

        return []
    }
}