import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from './api.service';


const TOKEN_KEY = 'TOKEN_KEY';

@Injectable()

export class InterceptorService implements HttpInterceptor {
  protected url   = 'http://example.com/api';
  protected debug = true;
  loaderToShow: any;
  constructor(private alertController: AlertController, private storage: Storage, private api: ApiService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // YOU CAN ALSO DO THIS
      // const token = this.authenticationService.getToke()

      return from(this.storage.get(TOKEN_KEY))
          .pipe(
              switchMap(token => {
                  
                  if (token) {
                      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
                      
                  }

                  if (!request.headers.has('Content-Type')) {
                      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                  }

                  // if (this.debug) {
                  //     request = request.clone({ url: this.url + request.url + '?XDEBUG_SESSION_START=1'});
                  // }

                  return next.handle(request).pipe(
                      map((event: HttpEvent<any>) => {
                          if (event instanceof HttpResponse) {
                              // do nothing for now
                          }
                          return event;
                      }),
                      catchError((error: HttpErrorResponse) => {
                          const status =  error.statusText;
                          const reason = error.message;
                          const name = error.name
                          this.api.hideLoader();
                          this.presentAlert(status, reason, name);
                          return throwError(error);
                      })
                  );
              })
          );


  }

  async presentAlert(status, reason, name) {
      const alert = await this.alertController.create({
          header: status + ' Error',
          subHeader: name,
          message: reason,
          buttons: ['OK']
      });

      await alert.present();
  }
}


