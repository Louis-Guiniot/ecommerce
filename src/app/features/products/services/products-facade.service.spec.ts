import { TestBed } from '@angular/core/testing';

import { TodosFacadeService } from './products-facade.service';

describe('TodosFacadeService', () => {
  let service: TodosFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
