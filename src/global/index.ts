import registerEl from './registerEL'
import { App } from 'vue'
export default function registerApp(app: App): void {
  registerEl(app)
}
