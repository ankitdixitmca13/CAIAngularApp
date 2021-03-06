import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ConfirmEmailComponent } from './views/confirmemail/confirmemail.component';
import { ConfirmPhoneNoComponent } from './views/confirmphoneno/confirmphone.component';
import { ConfirmPanNoComponent } from './views/confirmpanno/confirmpanno.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    redirectTo: 'login',
    //canActivate:[AuthGuard],
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'investment',
  //   component: InvestmentComponent,
  //   data: {
  //     title: 'Investment Page'
  //   }
  // },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'confirmphone',
    component: ConfirmPhoneNoComponent,
    data: {
      title: 'ConfirmPhoneNo Page'
    }
  },
  {
    path: 'confirmpanno',
    component: ConfirmPanNoComponent,
    data: {
      title: 'ConfirmPanNo Page'
    }
  },
  {
    path: 'confirmemail/:emailKey',
    component: ConfirmEmailComponent,
    data: {
      title: 'ConfirmEmail Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      // {
      //   path: 'base',
      //   loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      // },
      // {
      //   path: 'buttons',
      //   loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      // },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'investment',
        loadChildren: () => import('./views/investment/investment.module').then(m => m.InvestmentModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('./views/transaction/transaction.module').then(m => m.TransactionModule)
      },
      {
        path: 'bank',
        loadChildren: () => import('./views/bank/bank.module').then(m => m.InvestmentModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)
      }
      // {
      //   path: 'icons',
      //   loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      // },
      // {
      //   path: 'notifications',
      //   loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      // },
      // {
      //   path: 'theme',
      //   loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      // }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
