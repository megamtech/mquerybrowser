import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatabaseListComponent} from './databases_list.component';

describe('ListComponent', () => {
    let component: DatabaseListComponent;
    let fixture: ComponentFixture<DatabaseListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatabaseListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DatabaseListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
