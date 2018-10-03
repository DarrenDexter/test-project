import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './navigation/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule, MatIconModule, MatCardModule, MatMenuModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { CardComponent } from './layout/card.component';
import { TopBarComponent } from './navigation/top-bar/top-bar.component';

@NgModule({
    declarations: [
        SideMenuComponent,
        CardComponent,
        TopBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        RouterModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
    ],
    exports: [
        SideMenuComponent,
        CardComponent,
        TopBarComponent
    ]
})
export class SharedModule { }
