import { Component, OnInit } from '@angular/core';

import { CarouselModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public testimonials: any[] = [
    {
      src: `/assets/testimonials/bigfreechipslist.jpg`,
      text: 'We are so thankful we have such a good partner like "CondorAffiliates". Their amazing promotions for our players at some of top online casinos have led us to impressive revenues during the years. This is one of the better affiliate programs on the Internet!'
  },
  {
    src: `/assets/testimonials/Logo-CBM.jpg`,
    text: 'We have just started to collaborate with Condor Affiliates and their sport brand 24Bettle. Their casino brands are very nice and have their own flare, probably one of the best in the industry. Great support staff and affiliate managers as well, they are real professionals. It’s been a pleasure so far, we look forward to the further cooperation. We are pleased to give them our highest recommendations!'
},
{
  src: `/assets/testimonials/casino-geeks-logo.png`,
  text: 'Working with Condor Affiliates is pleasure. From the start of our partnership we at onlinecasinogeeks.com have had always the support from our affiliate manager Sorin, who is always there to help and assist.'
},
{
  src: `/assets/testimonials/toppcasinobonus.png`,
  text: 'When we launched toppcasinobonus.com we looked for affiliate partners that we felt we could work closely with in order to get the best results and Line and the team at Condor fit the bill perfectly. They have been incredibly helpful and responsive and we hope to continue working closely together for quite some time.'
},
{
  src: `/assets/testimonials/swv-logo.png`,
  text: 'Condor gaming have a number of strong brands; which offer both casino and sportsbook products. Very nice affiliate manager, responsive and flexible.'
},
{
  src: `/assets/testimonials/casino-gorilla.png`,
  text: 'We at Casino Gorilla have nothing negative to say about Condor Affiliates. Right from the start we have noticed that their team is extremely professional and their brands are loved by our international player base. '
},
{
  src: `/assets/testimonials/top-69-bm.jpg`,
  text: 'We were very happy and pleased to see that, from the very early stages of our collaboration, Condor showed respect, friendliness and top professionalism. Condor has a lovely affiliate team who replies extremely fast, does everything to help you, tries to maximize the results and make you happy. Top69bookmakers recommends Condor Affiliates! '
},
{
  src: `/assets/testimonials/protipster.png`,
  text: 'Our cooperation with Condor Affiliates has been smooth from the beginning. Great range of brands (including B-Bets and B-Bets Casino) combined with personalized promotional tools and communicative and helpful Affiliate Managers generated revenues from the get-go. We can definitely recommend working with Condor Affiliates.'
},
{
  src: `/assets/testimonials/mr-gamble.png`,
  text: 'Working with Condor Affiliates has been a real pleasure! Their professional and friendly Affiliate Manager has made things smooth and easy for us. And their brands are amazing! We specially love 24Bettle and b-Bets!'
},
{
  src: `/assets/testimonials/GamblerBay.png`,
  text: 'or The Gambler Bay, partnering with Condor Affiliates is a very important step. We have long been striving for this and believe that this is a mutually beneficial investment of forces. Condor Affiliates is the embodiment of functions that are absolutely necessary for modern affiliate programs. Playing for real money in online casinos is an important step, and you fully support the customers of your casinos!'
}

];
}
