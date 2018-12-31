import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatasetsCreateComponent} from './datasets_create.component';

describe('DatasetsCreateComponent', () => {
    let component: DatasetsCreateComponent;
    let fixture: ComponentFixture<DatasetsCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatasetsCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DatasetsCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
