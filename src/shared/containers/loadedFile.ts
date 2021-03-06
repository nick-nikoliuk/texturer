///<reference path="rect.ts"/>
namespace Texturer.Containers {

	export class LoadedFile {
		private _width : number;
		private _height : number;
		private _realWidth : number;
		private _realHeight : number;
		private _bitmap : number[];
		private _trim : Rect;
		private _opaque : boolean;

		constructor(width : number, height : number, realWidth : number, realHeight : number, opaque : boolean, trim : Rect, bitmap : number[]) {
			this._width      = width;
			this._height     = height;
			this._realWidth  = realWidth;
			this._realHeight = realHeight;
			this._opaque     = opaque;
			this._trim       = trim;
			this._bitmap     = bitmap;
		}

		isOpaque() : boolean {
			return this._opaque;
		}

		getWidth() : number {
			return this._width;
		}

		getHeight() : number {
			return this._height;
		}

		getRealWidth() : number {
			return this._realWidth;
		}

		getRealHeight() : number {
			return this._realHeight;
		}

		getTrim() : Rect {
			return this._trim;
		}

		getBitmap() : number[] {
			return this._bitmap;
		}
	}
}
