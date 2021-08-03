import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service';
import { UserData } from '../user-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: UserData; 
  friends:any[]=[
    {
      name:"waled ezz",
      img:"https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg"
      
    },
    {
      name:"mohamed ramy",
      img:"../../assets/1.jpg"
      
    },    {
      name:"eslam elsa2a",
      img:"../../assets/3.jpg"
      
    },
    {
      name:"eman ragy",
      img:"../../assets/4.jpg"
      
    },
    {
      name:"maha samy",
      img:"../../assets/5.jpg"
      
    },
    {
      name:"kaml ali",
      img:"../../assets/6.jpg"
      
    },
    {
      name:"yasmen sabry",
      img:"../../assets/7.jpg"
      
    },

  ]
  images: any[] = [
    'https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
    'https://torange.biz/photofx/93/8/light-vivid-colors-fragment-love-background-rain-fall-cover-93412.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg',
    'https://c0.wallpaperflare.com/preview/956/761/225/5be97da101a3f.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Swepac_FB_465%2C_RV70%2C_with_passing_lorry.jpg'
  ];
  postFace!: FormGroup;
  clicked = false;
  data_posts!:any[]

  constructor(public fetchData:FetchDataService) { }

  ngOnInit(): void {
    this.postFace =  new FormGroup(
      {
        "nasi": new FormControl("",Validators.required)
      }
    )

    this.data_posts = this.fetchData.getData()
    console.log('dtbba',this.data_posts)
  }

  onSubmit(){
    console.log(this.postFace.value)
  }

}
