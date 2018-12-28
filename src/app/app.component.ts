import { Component } from '@angular/core';
import { Hub } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semantic-search-spike';
  router: Router;

  constructor(router: Router) {
    this.router = router
    Hub.listen('auth', this, 'authListener');
  }

  onHubCapsule(capsule) {
      switch (capsule.payload.event) {
        case 'signIn':
          this.router.navigateByUrl('/upload');
          break;
        case 'signUp':
          this.router.navigateByUrl('/upload');
          break;
        case 'signOut':
          this.router.navigateByUrl('/');
          break;
        case 'signIn_failure':
          this.router.navigateByUrl('/');
          break;
        case 'configured':
          this.router.navigateByUrl('/');
          break;
      }
  };
}
