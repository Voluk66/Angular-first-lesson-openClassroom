import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lanfing-page',
  templateUrl: './lanfing-page.component.html',
  styleUrls: ['./lanfing-page.component.scss']
})
export class LanfingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

}
