<<<<<<< HEAD
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

=======
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
>>>>>>> 546280de7bde24f5e825fcf74ff869f1c632789b

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
