///<reference path="../baseOption.ts"/>
namespace Texturer.Config {

	export class RepeatX extends BaseOption<boolean> {
		getValue() : boolean {
			return this._getPropertyValue('repeat-x');
		}

		protected _hasDefaultValue() : boolean {
			return true;
		}

		protected _getDefaultValue() : boolean {
			return false;
		}
	}
}
