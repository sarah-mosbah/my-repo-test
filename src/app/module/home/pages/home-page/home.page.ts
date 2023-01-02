import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Article } from '../../components/blog/blog.component';
import { Bundle } from '../../components/check-me-bundle-item/check-me-bundle-item.component';
import { Category } from '../../components/check-me-category-item/check-me-category-item.component';
import { Feedback } from '../../components/feed-back-card/feed-back-card.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  feedbacks: Feedback[] = [{
    reviewerName: 'Shane Kuhn',
    reviewerType: 'Patient',
    feedbackTitle: 'It was a very good experience',
    feedbackDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.`
  },
  {
    reviewerName: 'Shane Kuhn',
    reviewerType: 'Patient',
    feedbackTitle: 'It was a very good experience',
    feedbackDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.`
  },
  {
    reviewerName: 'Shane Kuhn',
    reviewerType: 'Patient',
    feedbackTitle: 'It was a very good experience',
    feedbackDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.`
  },
  {
    reviewerName: 'Shane Kuhn',
    reviewerType: 'Patient',
    feedbackTitle: 'It was a very good experience',
    feedbackDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.`
  }]
  bundles: Bundle[] = [{
    name: "Comprehensive Silver Full Body Checkup",
    price: 170,
    properties: {
      bloodTest: true,
      fasting: true,
      noOfTests: 12
    }
  }, {
    name: "Diabetes Package Advanced",
    price: 170,
    properties: {
      bloodTest: true,
      fasting: true,
      noOfTests: 0
    }
  }, {
    name: "Comprehensive Full Body Checkup + Covid Antibody IgG Quantitative",
    price: 170,
    properties: {
      bloodTest: true,
      fasting: true,
      noOfTests: 10
    },
    
  },
  {
    name: "Comprehensive Full Body Checkup + Covid Antibody IgG Quantitative",
    price: 170,
    properties: {
      bloodTest: true,
      fasting: true,
      noOfTests: 10
    }
  },
  {
    name: "Comprehensive Full Body Checkup + Covid Antibody IgG Quantitative",
    price: 170,
    properties: {
      bloodTest: false,
      fasting: true,
      noOfTests: 10
    }
  }
  ]

  categories: Category[] = [
    {
      icon: 'assets/images/test-icons/test-icon1.svg',
      title: 'Kidney Functions',
      price: 170
    },
    {
      icon: 'assets/images/test-icons/test-icon2.svg',
      title: 'Liver Functions',
      price: 170
    },
    {
      icon: 'assets/images/test-icons/test-icon3.svg',
      title: 'Immunity Check',
      price: 500
    },
    {
      icon: 'assets/images/test-icons/test-icon2.svg',
      title: 'Bome Screen',
      price: 500
    },
    {
      icon: 'assets/images/test-icons/test-icon1.svg',
      title: 'Bome Screen',
      price: 500
    },
    {
      icon: 'assets/images/test-icons/test-icon3.svg',
      title: 'Bome Screen',
      price: 500
    },
    {
      icon: 'assets/images/test-icons/test-icon1.svg',
      title: 'Bome Screen',
      price: 500
    },
    {
      icon: 'assets/images/test-icons/test-icon2.svg',
      title: 'Bome Screen',
      price: 500
    },
    {
      icon: 'assets/images/test-icons/test-icon3.svg',
      title: 'Bome Screen',
      price: 500
    },
  ]
  slides=[
    'assets/images/pregnancy-carousel.png', 
    'assets/images/cariusel-test-image.png', 
    'assets/images/cariusel-test-image.png'
  ]
  customOptions: OwlOptions = {
    rtl: navigator.language === "ar" ? true : false,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    rewind: true,
    autoplay: true,
    autoWidth: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }

  bundleResponsive = {
    240: {
      items: 1
    },
    400: {
      items: 3
    },
    740: {
      items: 3
    },
    940: {
      items: 3
    },
    1440: {
      items: 4
    },
    2000: {
      items: 5
    }

  };

  categoryResponsive = {
    240: {
      items: 1
    },
    400: {
      items: 4
    },
    740: {
      items: 6
    },
    940: {
      items: 6
    }
  };

  feedbackOptions: OwlOptions = {
    rtl: navigator.language === "ar" ? true : false,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    rewind: true,
    autoplay: true,
    autoWidth: true,
    autoplaySpeed: 2000,
    margin: 15,
    responsive: {
      0: {
        items: 1
      },
      630: {
        items: 2
      },
      940: {
        items: 3
      },
      1440: {
        items: 4
      }
    },
  }

  articles: Article[] = [{
      articleImage: "assets/images/test-icons/blog-test1.png",
      articleType: "General Health",
      articleTitle: "Quo et aliquam neque assumenda laborum quam dolorum non.",
      authorImage: "https://picsum.photos/200/300",
      publishingTime: '21 Nov 2022',
      readingTime: '3 Minutes read',
      authorName: 'Mr. Tyler Gaylord'}
    , {
      articleImage: "assets/images/test-icons/blog-test2.png",
      articleType: "General Health",
      articleTitle: "Quo et aliquam neque assumenda laborum quam dolorum non.",
      authorImage: "https://picsum.photos/200/300",
      publishingTime: '21 Nov 2022',
      readingTime: '3 Minutes read',
      authorName: 'Mr. Tyler Gaylord'
    }, 
    {
      articleImage: "assets/images/test-icons/blog-test3.png",
      articleType: "General Health",
      articleTitle: "Quo et aliquam neque assumenda laborum quam dolorum non.",
      authorImage: "https://picsum.photos/200/300",
      publishingTime: '21 Nov 2022',
      readingTime: '3 Minutes read',
      authorName: 'Mr. Tyler Gaylord'
    },
    {
      articleImage: "assets/images/test-icons/blog-test1.png",
      articleType: "General Health",
      articleTitle: "Quo et aliquam neque assumenda laborum quam dolorum non.",
      authorImage: "https://picsum.photos/200/300",
      publishingTime: '21 Nov 2022',
      readingTime: '3 Minutes read',
      authorName: 'Mr. Tyler Gaylord'}
    , {
      articleImage: "assets/images/test-icons/blog-test2.png",
      articleType: "General Health",
      articleTitle: "Quo et aliquam neque assumenda laborum quam dolorum non.",
      authorImage: "https://picsum.photos/200/300",
      publishingTime: '21 Nov 2022',
      readingTime: '3 Minutes read',
      authorName: 'Mr. Tyler Gaylord'
    }, 
    {
      articleImage: "assets/images/test-icons/blog-test3.png",
      articleType: "General Health",
      articleTitle: "Quo et aliquam neque assumenda laborum quam dolorum non.",
      authorImage: "https://picsum.photos/200/300",
      publishingTime: '21 Nov 2022',
      readingTime: '3 Minutes read',
      authorName: 'Mr. Tyler Gaylord'
    }]
    blogResponsive = {
      240: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      1440: {
        items: 3
      }
    };
  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  onSearch(searchQuery: string) {
    this.router.navigateByUrl(`doctors?q=${searchQuery}`);
  }

}
