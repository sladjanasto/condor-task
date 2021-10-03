import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandmenu',
  templateUrl: './brandmenu.component.html',
  styleUrls: ['./brandmenu.component.scss']
})
export class BrandmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public brands: any[] = [
    {
      src: `/assets/brands/brand-logos-frontpage-24-BETTLE.png`,
      link: `https://www.24bettle.com/`
    },
    {
      src: `/assets/brands/brand-logos-frontpage-B-BETS.png`,
      link: `https://www.b-bets.com/`
    },
    {
      src: `/assets/brands/brand-logos-frontpage-BIG5.png`,
      link: `https://www.big5casino.com/`
    },
    {
      src: `/assets/brands/brand-logos-frontpage-REM.png`,
      link: `https://www.b-bets.com/`
    },
    {
      src: `/assets/brands/brand-logos-frontpage-SIEGER.png`,
      link: `https://www.casinosieger.com/`
    },
    {
      src: `/assets/brands/luckybull.png`,
      link: `https://www.luckybull.com/`
    }

  ]

}
