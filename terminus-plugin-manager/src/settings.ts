import { Injectable } from '@angular/core'
import { SettingsTabProvider, ComponentType } from 'terminus-settings'

import { PluginsSettingsTabComponent } from './components/pluginsSettingsTab.component'

@Injectable()
export class PluginsSettingsTabProvider extends SettingsTabProvider {
    title = 'Plugins'

    getComponentType (): ComponentType {
        return PluginsSettingsTabComponent
    }
}
