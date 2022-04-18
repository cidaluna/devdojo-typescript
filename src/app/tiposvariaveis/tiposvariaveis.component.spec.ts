import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { TiposvariaveisComponent } from './tiposvariaveis.component';

describe('TiposvariaveisComponent', () => {
  let component: TiposvariaveisComponent;
  let fixture: ComponentFixture<TiposvariaveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposvariaveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposvariaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sum numbers', () => {
    expect(component.add(3,3,3)).toBe(9);
  });

  it('should print hello message', () => {
    expect(component.hello()).toEqual('Hello Luna!');
  });

  it('should call sum with 2 arguments', () =>{
    spyOn(component, 'add');
    component.add(7,2); // chama o spy passando os valores
    expect(component.add).toHaveBeenCalled();
    expect(component.add).toHaveBeenCalledWith(7,2);
  });

  it('should call sum with 3 arguments', () =>{
    spyOn(component, 'add');
    component.add(1,1,1); // chama o spy passando os valores
    expect(component.add).toHaveBeenCalled();
    expect(component.add).toHaveBeenCalledWith(1,1,1);
  });
});
