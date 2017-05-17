import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { TaldorPermissionsService } from './taldor-permissions.service';

@Directive({ selector: '[taldorPermissions]' })
export class TaldorPermissionsDirective implements OnInit {
    @Input('taldorPermissions') id: string;

    constructor(private el: ElementRef,
    private permissionsService: TaldorPermissionsService) { }

    ngOnInit(): void {
        this.permissionsService.isComponentPermitted(this.id).subscribe(
            data => {
                this.el.nativeElement.disabled = !data;
            },
            error => {
                alert(error);
            }
        )
    }
}