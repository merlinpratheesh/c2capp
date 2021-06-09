import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './service/userdata.service';
import { map, startWith } from "rxjs/operators";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    { name: "Nagercoil", value: "nagercoil" },
    { name: "Konam", value: "konam" },
    { name: "Kottar", value: "kottar" },
    { name: "Vetturnimadam", value: "Vetturnimadam" },
    { name: "Vadasery", value: "vadasery" }
  ];
  filteredOptions: Observable<User[]> | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(user?: User): string | '' {
    console.log(user ? user.value : "");
    return user ? user.name : '';
  }
  returnFn(user?: User): string | undefined {
    return user ? user.value : undefined;
  }


  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
  myMapDetails(){
    this.router.navigate(['/mymapdetails']);

  }
}
