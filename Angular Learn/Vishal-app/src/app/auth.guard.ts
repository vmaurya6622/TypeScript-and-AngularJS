import { inject } from "@angular/core";
import { Router } from "@angular/router";
// @Component({
//     selector: 'app-protected',
//     standalone: true,
//     imports: [CommonModule, HelloComponent, FormsModule, ReactiveFormsModule, RouterLink],
//     templateUrl: './protectedPage.html',
//     // styleUrls: ['./app.css']
// })
let isLoggedIn = false;
export function setLoginStatus() {
    isLoggedIn = true;
}
export function setLogoutStatus() {
    isLoggedIn = false;
}
export function getLoginStatus() {
    return isLoggedIn;
}
export const authGuard = () => {
    if (isLoggedIn) {
        return true; //if user is logged in, allow access to the route otherwise forbid the access.
    }
    const router = inject(Router);
    return router.createUrlTree(['/']); //redirect to protected page if user is not logged in.
}
