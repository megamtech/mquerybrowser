import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatasetsDataComponent} from './datasets_data.component';

describe('DatasetsDataComponent', () => {
    let component: DatasetsDataComponent;
    let fixture: ComponentFixture<DatasetsDataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatasetsDataComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DatasetsDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
