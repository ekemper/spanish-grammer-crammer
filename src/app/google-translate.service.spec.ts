import { TestBed, inject } from '@angular/core/testing';

import { GoogleTranslateService } from './google-translate.service';

describe('GoogleTranslateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleTranslateService]
    });
  });

  it('should ...', inject([GoogleTranslateService], (service: GoogleTranslateService) => {
    expect(service).toBeTruthy();
  }));
});
