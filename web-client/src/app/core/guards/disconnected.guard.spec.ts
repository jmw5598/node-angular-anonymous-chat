import { TestBed, async, inject } from '@angular/core/testing';

import { DisconnectedGuard } from './disconnected.guard';

describe('DisconnectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisconnectedGuard]
    });
  });

  it('should ...', inject([DisconnectedGuard], (guard: DisconnectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
