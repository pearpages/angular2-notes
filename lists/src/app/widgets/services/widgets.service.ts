import { Widget } from './../models/widget';
import { Injectable } from '@angular/core';

@Injectable()
export class WidgetsService {

  private _widgets: Widget[] = [{ id: 1, title: 'Widget1', html: 'lipsum' }, { id: 2, title: 'Widget2', html: 'lipusm' }, { id: 3, title: 'Widget3', html: 'lipsum' }];

  constructor() { }

  getWidgets() {
    return this._widgets;
  }
}
