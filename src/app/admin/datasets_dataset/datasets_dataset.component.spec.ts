import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatasetsDatasetComponent} from '../datasets_dataset/datasets_dataset.component';

describe('DatasetsDatasetComponent', () => {
    let component: DatasetsDatasetComponent;
    let fixture: ComponentFixture<DatasetsDatasetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatasetsDatasetComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DatasetsDatasetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
