import { ActivatedRouteSnapshot } from '@angular/router';

export class ActivatedRouteSnapshotMock implements Partial<ActivatedRouteSnapshot> {
    title = 'TEST_POST_PARAM';
    params = {
        post: 'TEST_POST_PARAM',
    };
}
