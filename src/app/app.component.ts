import { Component } from '@angular/core';
import { Hub } from 'aws-amplify';
import { Router } from '@angular/router';
import { RouterInitializer } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semantic-search-spike';
  router = null;

  constructor(router: Router) {
    this.router = router
    Hub.listen('auth', this, 'authListener');
  }

  onHubCapsule(capsule) {
      switch (capsule.payload.event) {
        case 'signIn':
          this.router.navigateByUrl('/search');
          break;
        case 'signUp':
        this.router.navigateByUrl('/search');
          break;
        case 'signOut':
        this.router.navigateByUrl('/');
          break;
        case 'signIn_failure':
          break;
        case 'configured':
          break;
      }
  };
}
