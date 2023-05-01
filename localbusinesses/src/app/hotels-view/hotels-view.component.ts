import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { hotel } from '../model/hotels';
import { BusinessServiceService } from '../services/business-service.service';

@Component({
  selector: 'app-hotels-view',
  templateUrl: './hotels-view.component.html',
  styleUrls: ['./hotels-view.component.css']
})
export class HotelsViewComponent {
  hotel: hotel[]= [];
  address:any;
  rating:any;
  price:any;
  constructor(private res:BusinessServiceService){}
    ngOnInit(): void {
      this.res.getHotls().subscribe(response=>{
        this.hotel=response;
      })
    }
  
    search()
    {
  
      if(this.address == "")
      {
        this.ngOnInit();
      }
      else{
        this.hotel=this.hotel.filter(res=>{
          return res.address?.toLowerCase().match(this.address.toLocaleLowerCase());
        })
      }
    }
    book()
    {
     Swal.fire("Thank You...",'You Booked Sucessfully','success');
    }
    searchh()
    {
      
      if(this.rating == "")
      {
        this.ngOnInit();
      }
      else{
        this.hotel=this.hotel.filter(res=>{
      return res.rating?.toLowerCase().match(this.rating.toLocaleLowerCase());
        })
      }
    }
    searchhh()
    {

        
      if(this.price == "")
      {
        this.ngOnInit();
      }
      else{
        this.hotel=this.hotel.filter(res=>{
      return res.price?.toLowerCase().match(this.price.toLocaleLowerCase());
        })
      }

    }
}
