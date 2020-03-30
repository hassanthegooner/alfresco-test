import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsComponent } from './chips.component';

export const routes: Routes = [
    {
        path: '',
        component: ChipsComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
