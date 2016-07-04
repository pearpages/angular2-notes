/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CharacterComponent } from './character.component';

describe('Component: Character', () => {
  it('should create an instance', () => {
    let component = new CharacterComponent();
    expect(component).toBeTruthy();
  });
});
