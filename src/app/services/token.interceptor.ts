import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token : string = localStorage.getItem("token") ?? ""
  if(token != "") {
    let clone : any = req.clone({headers : req.headers.set('Authorization', 'bearer '+token)})
    return next(clone)
  }
  return next(req);
};
