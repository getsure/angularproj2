import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

fdescribe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validate addition result is equal to 8', ()=>{
    const addResult = service.addOpertion(5,3)
    expect(addResult).toBe(8)
  })

  it('validate addition result is equal to 9', ()=>{
    const addResult = service.addOpertion(5,4)
    expect(addResult).toBe(9)
  })

});
