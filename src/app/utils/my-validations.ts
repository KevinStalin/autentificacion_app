import { AbstractControl } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import { map } from 'rxjs/operators';

export class MyValidations {

    static validaEmail(apiServ: ApiService) {
        return (control: AbstractControl) => {
            return apiServ.check_email_user(control.value)
                .pipe(
                    map(res => {
                        return res.ok ? null : { ok: true };
                    })
                )
        }
    }
}