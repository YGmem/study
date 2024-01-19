import { App } from "vue";
import lazy from './v-lazy'
import bright from './v-bright'

const directivesList: any = {
	// Custom directives
	lazy,
	bright
};

const directives = {
	install: function (app: App<Element>) {
		Object.keys(directivesList).forEach(key => {
			// 注册所有自定义指令
			app.directive(key, directivesList[key]);
		});
	}
};

export default directives;
