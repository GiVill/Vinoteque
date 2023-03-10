import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { AuthenticationService } from './Services/authentication.service';
import { User } from './Model/User';
import { WineService } from './Services/wine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private service : AuthenticationService,
              private wineService : WineService){}

  sessionId : String = "";

  title = 'Vinoteque';

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    var sessionId = urlParams.get("jsessionid");
    if (sessionId){
      this.sessionId = sessionId;
      this.service.logged = true;
      this.service.checkLogin(sessionId).subscribe(userData => {
        if (userData){
          //sessionStorage.setItem("user",JSON.stringify(userData))
          this.service.currentUser = userData;
          localStorage.setItem("user",JSON.stringify(userData));
          localStorage.setItem("jsessionid",this.sessionId.toString())
          sessionStorage.setItem("cart",JSON.stringify(userData.carrello))
          this.saveFavorites(userData)
        }
      });
    } else {
      if(localStorage.getItem("user")){
        this.service.logged = true;
        this.service.currentUser = JSON.parse(localStorage.getItem("user")!);
        this.saveFavorites(this.service.currentUser!)
      }
    }
  }

  saveFavorites(user : User){
    this.wineService.getFavoritesID(user.id).subscribe(data =>{
      this.service.favourites = data
    })
  }


  ngOnDestroy(): void {
    if(localStorage.getItem("user")){
      localStorage.clear();
    }
  }

}
