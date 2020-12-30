import { Injectable } from "@angular/core";

const RegExpText =  /^[A-Za-z0-9!$~`?/@#%^*&()_+=.,';:|\" -]*/;

@Injectable()
export class ValidationService {




    static TextValidator(control){
        if(control.value){
            if(control.value.match(RegExpText))
            return null;

        }
        else {
            return {'InvalidText':true};
        }
    }

}