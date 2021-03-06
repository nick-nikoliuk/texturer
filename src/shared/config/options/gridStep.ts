///<reference path="../baseOption.ts"/>
namespace Texturer.Config {

	export class GridStep extends BaseOption<number> {
		getValue() : number {
			return this._getPropertyValue('grid-step');
		}

		protected _hasDefaultValue() : boolean {
			return true;
		}

		protected _getDefaultValue() : number {
			return 1;
		}
	}
}
