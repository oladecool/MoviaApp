import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { searchType, ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = '';
  type : searchType = searchType.all;


  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.api.searchData(this.searchTerm, this.type);
  }

}
