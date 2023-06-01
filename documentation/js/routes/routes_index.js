var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./modules/auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"login","component":"LoginComponent","title":"Login"},{"path":"register","component":"RegisterComponent","title":"Register"}],"kind":"module"}],"module":"AuthModule"}]},{"path":"app","loadChildren":"./modules/layout/layout.module#LayoutModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/layout/layout-routing.module.ts","module":"LayoutRoutingModule","children":[{"path":"","component":"LayoutComponent","children":[{"path":"","redirectTo":"menu","pathMatch":"full"},{"path":"menu","canActivate":["AuthGuard"],"loadChildren":"../menu/menu.module#MenuModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/menu/menu-routing.module.ts","module":"MenuRoutingModule","children":[{"path":"","component":"MenuComponent"}],"kind":"module"}],"module":"MenuModule"}]},{"path":"cita","canActivate":["AuthGuard"],"loadChildren":"../citas/citas.module#CitasModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/citas/citas-routing.module.ts","module":"CitasRoutingModule","children":[{"path":"","component":"CitaComponent"},{"path":"nueva","component":"CitaNuevaComponent"}],"kind":"module"}],"module":"CitasModule"}]},{"path":"**","redirectTo":""}]}],"kind":"module"}],"module":"LayoutModule"}]}],"kind":"module"}]}
