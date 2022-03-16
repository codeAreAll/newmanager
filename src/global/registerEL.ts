import { ElButton } from 'element-plus'
import { App } from 'vue'
const compoents = [ElButton]
export default function (app: App): void {
  compoents.forEach((component) => {
    app.component(component.name, component)
  })
}
