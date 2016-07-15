/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CharactersService } from './characters.service';

describe('Characters Service', () => {
  beforeEachProviders(() => [CharactersService]);

  it('should ...',
      inject([CharactersService], (service: CharactersService) => {
    expect(service).toBeTruthy();
  }));
});
