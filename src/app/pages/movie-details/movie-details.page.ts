import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})

export class MovieDetailsPage implements OnInit {
  information = null;

  constructor(private rout: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.rout.snapshot.paramMap.get('id');
    this.api.getDetails(id).subscribe((data: any) => {
      this.information = data;
  });
 }

  openSite() {
    window.open(this.information.Website, '_blank');
  }
}
