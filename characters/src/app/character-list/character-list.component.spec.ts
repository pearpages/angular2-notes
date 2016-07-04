/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';

describe('Component: CharacterList', () => {
  it('should create an instance', () => {
    let component = new CharacterListComponent();
    expect(component).toBeTruthy();
  });
});
