import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaldorPermissionsService } from './taldor-permissions.service';

@Directive({ selector: '[taldorPermissions]' })
export class TaldorPermissionsDirective implements OnInit {
    @Input('taldorPermissions') id: string;

    constructor(private el: ElementRef,
    private permissionsService: TaldorPermissionsService,
    private router: Router) { }

    ngOnInit(): void {
        this.el.nativeElement.disabled = !this.permissionsService.isComponentPermitted(this.router.url, this.id);
    }
}