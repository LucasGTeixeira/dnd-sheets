import { TestBed } from '@angular/core/testing';

import { CharacterSheetLoaderServiceService } from './character-sheet-loader-service.service';

describe('CharacterSheetLoaderServiceService', () => {
  let service: CharacterSheetLoaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterSheetLoaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
