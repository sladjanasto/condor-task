import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BrandsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  public items: any[] = [
    {
      src: `/assets/brands/brand-logos-frontpage-REM.png`,
      text: 'Hop aboard with Carlos the Bull and get lost within a universe overflowing with gamified greatness. The playing power is in your hands, you get to choose how to play and how to be rewarded, with 4 different modes of play, 100 levels, and a whole host of action-packed adventures. Get ready to lead the way with over 2000 slot, table, and live casino games, and get ready to savour all that the supercharged sportsbook has to offer. Go for gold with the cashout or 3+ Acca boost features, zero wagerings on all free spins, speedy payouts, free bets, and weekly reloads waiting.'
  },
    {
        src: `/assets/brands/brand-logos-frontpage-24-BETTLE.png`,
        text: 'The proportion of women who have their need for family planning satisfied with modern contraceptive methods remains low in sub-Saharan Africa'
  },
    {
    src: `/assets/brands/brand-logos-frontpage-B-BETS.png`,
    text: 'Calling all sportsbook superheroes, b-Bets is the perfect place for you to become the champion of every challenge. Bet your way to brilliance with the vast and dynamic selection of live and virtual sports or score more surprises with the never-ending supply of slots with the casino. Bid Bets are the real deal here, get ready and steady for some action in the auction, fiery free bets, speedy payouts, cashouts, and 100% Acca booster!'
  },
    {
      src: `/assets/brands/brand-logos-frontpage-BIG5.png`,
      text: 'Step into the Savanna and get ready for a wild ride in yet another gamified escape, alongside the five fierce creatures. Get your game on and be prepared to level up, there’s a new devil for each level, so expect a serving of the good, bad, and the ugly as you unleash your fierce side with one of the five fiends. The key is to activate your inner adventurer, in order to discover the dark delights, from super-speedy payouts to cashouts, zero wagerings on all free spins, and weekly reloads that come with a roar!'
  },
    {
      src: `/assets/brands/brand-logos-frontpage-SIEGER.png`,
      text: 'The go-to for all the no-nonsense born winners of the DACH region. Form your own fortune with the build your bonus fortune, which rewards players for their loyalty by leaving lots of luck in their loyalty bank, seek out the superb slots, casino, or live casino games and benefit from the wondrous weekly reloads, cashouts, speedier payouts and zero wagerings on all free spins.'
  },
    {
      src: `/assets/brands/luckybull.png`,
      text: 'Launch the rocket towards your luckiest future yet, in the latest of all three gamified brands. Travel through time, space, and the glistening galaxies, alongside one of the four friends and get well acquainted with an alternate universe full of achievements. Choose your friend, and become immersed in your very own comic book, which comes with unique adventures, stories, rewards, and sparkling surprises. Make way for mountains of magic with the many planets packed with promotions.'
  } 

];

}
